// server.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEmail } from './senders/emailSender.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 80;
const PDF_PATH = process.env.PDF_PATH || path.join(__dirname, 'assets', 'QuantumMap.pdf');
const API_KEY = process.env.API_KEY || 'quantumcats';
const HOST = process.env.HOST || `http://localhost:${PORT}`;

app.get('/health', (req, res) => {
    res.json({
        ok: true,
        timestamp: new Date().toISOString(),
        version: '2.0.0-email-only'
    });
});

app.post('/api/form-submit', async (req, res) => {
    try {
        const incomingKey = req.headers['x-api-key'] || req.query.api_key;
        if (!incomingKey || incomingKey !== API_KEY) {
            return res.status(403).json({ ok: false, error: 'Invalid API key' });
        }

        const data = req.body || {};
        console.log('\n📝 Form submission:', {
            timestamp: new Date().toISOString(),
            name: data.name,
            email: data.email,
            whatsapp: data.whatsapp
        });

        const results = { email: null };

        // Send Email
        if (data.email) {
            try {
                const emailResult = await sendEmail({
                    toEmail: data.email,
                    data: data,  // Pass full data object for template
                    pdfPath: PDF_PATH
                });
                console.log('✓ Email sent to:', data.email);
                results.email = { success: true, id: emailResult.messageId };
            } catch (err) {
                console.error('✗ Email failed:', err.message);
                results.email = { success: false, error: err.message };
            }
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
    console.log(`📧 Email-only mode`);
    console.log('='.repeat(60) + '\n');
});