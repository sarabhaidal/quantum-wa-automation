// senders/emailSender.js
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { emailTextTemplate, emailHtmlTemplate } from '../templates/emailTemplate.js';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export async function sendEmail({ toEmail, data, pdfPath }) {
    const attachments = [];

    // Add PDF attachment
    if (pdfPath && fs.existsSync(pdfPath)) {
        attachments.push({
            filename: 'Quantum-Map.pdf',
            path: pdfPath,
            contentType: 'application/pdf'
        });
    }

    // Add logo as embedded image
    const logoPath = process.env.LOGO_PATH || path.join(__dirname, '..', 'assets', 'logo.png');
    if (fs.existsSync(logoPath)) {
        attachments.push({
            filename: 'logo.png',
            path: logoPath,
            cid: 'logo' // Same as referenced in HTML template
        });
    }

    const mailOptions = {
        from: `"Jnana Prabodhini - Yuvak Vibhag" <${process.env.FROM_EMAIL}>`,
        to: toEmail,
        subject: '🎓 Nobel Prize 2025 Talk — Your Quantum Map Inside!',
        text: emailTextTemplate(data),
        html: emailHtmlTemplate(data),
        attachments
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
}