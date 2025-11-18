// whatsapp-client.js
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth, MessageMedia } = pkg;
import qrcode from 'qrcode-terminal';

let client = null;
let ready = false;

export async function initWhatsAppClient(clientId = 'jp-client-1') {
    return new Promise((resolve, reject) => {
        client = new Client({
            authStrategy: new LocalAuth({ clientId }),
            puppeteer: {
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu'
                ]
            }
        });

        client.on('qr', qr => {
            console.log('\n' + '='.repeat(60));
            console.log('📱 SCAN THIS QR CODE WITH WHATSAPP');
            console.log('='.repeat(60) + '\n');
            qrcode.generate(qr, { small: true });
            console.log('\n' + '='.repeat(60));
            console.log('WhatsApp → Settings → Linked Devices → Link a Device');
            console.log('='.repeat(60) + '\n');
        });

        client.on('authenticated', () => {
            console.log('✓ WhatsApp authenticated');
        });

        client.on('ready', () => {
            ready = true;
            console.log('✅ WhatsApp client READY\n');
            resolve(client);
        });

        client.on('auth_failure', msg => {
            console.error('✗ Auth failure:', msg);
            reject(new Error('Authentication failed'));
        });

        client.on('disconnected', reason => {
            ready = false;
            console.log('⚠️  Disconnected:', reason);
        });

        console.log('🔄 Initializing WhatsApp client...');
        client.initialize().catch(err => {
            console.error('✗ Init failed:', err);
            reject(err);
        });
    });
}

export function isWhatsAppReady() {
    return ready && client;
}

export async function sendWhatsApp(phoneNumber, text, pdfPath = null) {
    if (!client || !ready) {
        throw new Error('WhatsApp client not ready');
    }

    const digits = phoneNumber.replace(/\D/g, '');
    console.log(`📤 Sending to: ${digits}`);

    try {
        // Verify number exists on WhatsApp
        const numberId = await client.getNumberId(digits);
        if (!numberId) {
            throw new Error(`${digits} not on WhatsApp`);
        }

        const chatId = numberId._serialized;

        // Send text
        await client.sendMessage(chatId, text);
        console.log('✓ Text sent');

        // Send PDF if provided
        if (pdfPath) {
            await new Promise(r => setTimeout(r, 1000));
            const media = MessageMedia.fromFilePath(pdfPath);
            await client.sendMessage(chatId, media, {
                caption: 'Your Quantum Map (PDF)'
            });
            console.log('✓ PDF sent');
        }

        return true;
    } catch (error) {
        console.error('❌ Send failed:', error.message);
        throw error;
    }
}