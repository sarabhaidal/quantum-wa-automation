// test-email-preview.js
import { emailHtmlTemplate } from './templates/emailTemplate.js';
import fs from 'fs';

const testData = {
    name: 'Om Chavan',
    email: 'test@example.com',
    whatsapp: '8149326426'
};

const html = emailHtmlTemplate(testData);
fs.writeFileSync('email-preview.html', html);

console.log('✅ Email preview saved to email-preview.html');
console.log('📧 Open it in your browser to see how it looks!');
console.log('\nNote: The "Copy Link" button and sharing links will work in actual emails.');