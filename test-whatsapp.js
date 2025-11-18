// test-whatsapp.js
import { initWhatsAppClient, sendWhatsApp } from './whatsapp-client.js';
import dotenv from 'dotenv';
dotenv.config();

const TEST_NUMBER = '917066131709'; // Your test number
const TEST_MESSAGE = 'Hello! This is a test message from the pipeline.';

console.log('🧪 Testing WhatsApp...\n');

initWhatsAppClient('test-client-' + Date.now())
    .then(async () => {
        console.log('Sending test message...');
        await sendWhatsApp(TEST_NUMBER, TEST_MESSAGE);
        console.log('\n✅ Test successful!\n');

        setTimeout(() => process.exit(0), 3000);
    })
    .catch(err => {
        console.error('\n❌ Test failed:', err);
        process.exit(1);
    });