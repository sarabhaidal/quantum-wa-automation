// senders/emailSender.js
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { emailTextTemplate, emailHtmlTemplate } from '../templates/emailTemplate.js';

dotenv.config();

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
    if (pdfPath && fs.existsSync(pdfPath)) {
        attachments.push({
            filename: 'Quantum-Map.pdf',
            path: pdfPath,
            contentType: 'application/pdf'
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