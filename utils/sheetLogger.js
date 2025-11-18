// utils/sheetLogger.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK;

export async function appendToSheet(data) {
    if (!SHEET_WEBHOOK) {
        console.warn('⚠️  No GOOGLE_SHEET_WEBHOOK configured');
        return;
    }

    try {
        await axios.post(SHEET_WEBHOOK, data, {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        throw new Error('Sheet append failed: ' + err.message);
    }
}