// server.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initWhatsAppClient } from './whatsapp-client.js';
import { sendEmail } from './senders/emailSender.js';
import { safeSendWhatsApp } from './senders/whatsappSender.js';
import { whatsappTemplate } from './templates/message.js';
import { normalizePhone } from './utils/normalizePhone.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 80;
const PDF_PATH = process.env.PDF_PATH || path.join(__dirname, 'assets', 'QuantumMap.pdf');
const API_KEY = process.env.API_KEY || 'quantumcats';
const HOST = process.env.HOST || `http://localhost:${PORT}`;

let whatsappReady = false;
let whatsappError = null;

// Initialize WhatsApp
console.log('🚀 Starting server...\n');
initWhatsAppClient(process.env.WHATSAPP_CLIENT_ID || 'jp-client-1')
    .then(() => {
        whatsappReady = true;
    })
    .catch(err => {
        whatsappError = err.message;
        console.error('⚠️  WhatsApp unavailable:', err.message);
    });

app.get('/health', (req, res) => {
    res.json({
        ok: true,
        whatsapp: whatsappReady,
        error: whatsappError,
        timestamp: new Date().toISOString()
    });
});

app.post('/api/form-submit', async (req, res) => {
    try {
        const incomingKey = req.headers['x-api-key'] || req.query.api_key;
        if (!incomingKey || incomingKey !== API_KEY) {
            return res.status(403).json({ ok: false, error: 'Invalid API key' });
        }

        const data = req.body || {};
        console.log('\n📝 Form submission:', data.name, data.email, data.whatsapp);

        const results = { email: null, whatsapp: null };

        // Email
        if (data.email) {
            try {
                const emailResult = await sendEmail({
                    toEmail: data.email,
                    subject: 'Your Quantum Map — & details for the Nobel Prize Lecture (22 Nov)',
                    textBody: `Hi ${data.name || ''},\n\nAttached is "The Quantum Map"...`,
                    htmlBody: `<p>Hi ${data.name || ''},</p><p>Please find attached "The Quantum Map".</p>`,
                    pdfPath: PDF_PATH
                });
                console.log('✓ Email sent');
                results.email = { success: true, id: emailResult.messageId };
            } catch (err) {
                console.error('✗ Email failed:', err.message);
                results.email = { success: false, error: err.message };
            }
        }

        // WhatsApp
        if (data.whatsapp) {
            const normalizedPhone = normalizePhone(data.whatsapp);
            const waText = whatsappTemplate({ name: data.name });
            results.whatsapp = await safeSendWhatsApp(normalizedPhone, waText, PDF_PATH);
        }

        console.log('✅ Done\n');
        return res.json({ ok: true, results });

    } catch (err) {
        console.error('❌ Server error:', err);
        return res.status(500).json({ ok: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🌐 Server running on port ${PORT}`);
    console.log(`📡 Webhook: ${HOST}/api/form-submit`);
    console.log(`🔑 API Key: ${API_KEY}`);
    console.log(`📄 PDF: ${PDF_PATH}`);
    console.log('='.repeat(60) + '\n');
});