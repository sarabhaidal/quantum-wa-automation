// senders/whatsappSender.js
import { sendWhatsApp, isWhatsAppReady } from '../whatsapp-client.js';

export async function safeSendWhatsApp(phoneNumber, message, pdfPath = null) {
    if (!isWhatsAppReady()) {
        return { success: false, error: 'WhatsApp not ready' };
    }

    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`WhatsApp attempt ${attempt}/${maxRetries}`);
            await sendWhatsApp(phoneNumber, message, pdfPath);
            console.log(`✓ Sent on attempt ${attempt}`);
            return { success: true };
        } catch (err) {
            console.error(`Attempt ${attempt} failed:`, err.message);

            if (attempt >= maxRetries) {
                return { success: false, error: err.message };
            }

            // Wait before retry: 2s, 4s, 8s
            const delay = 2000 * Math.pow(2, attempt - 1);
            await new Promise(r => setTimeout(r, delay));
        }
    }

    return { success: false, error: 'Max retries exceeded' };
}