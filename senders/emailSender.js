// senders/emailSender.js
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
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

export async function sendEmail({ toEmail, subject, textBody, htmlBody, pdfPath }) {
    const attachments = [];
    if (pdfPath && fs.existsSync(pdfPath)) {
        attachments.push({
            filename: path.basename(pdfPath),
            path: pdfPath,
            contentType: 'application/pdf'
        });
    }

    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: toEmail,
        subject,
        text: textBody,
        html: htmlBody,
        attachments
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
}