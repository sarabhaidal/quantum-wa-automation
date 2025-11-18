// templates/message.js
export function whatsappTemplate(data) {
    const name = data.name || 'Friend';
    return `Hi ${name} 👋

Thanks for signing up for *The Cat's Out, the Circuits Are Quantum!* — a public lecture by Dr. Siddharth Dhomkar (IIT Madras).

📅 Date: 22 Nov 2025
⏰ Time: 6:30 PM – 8:30 PM
📍 Venue: Auditorium, Jnana Prabodhini, Sadashiv Peth

Attached is your *Quantum Map* — a one-page cheatsheet to prepare for the talk. The session is interactive and non-mathematical. If you can't open the PDF, reply here and we'll send an alternate link.

See you there!
— Jnana Prabodhini, Yuvak Vibhag`;
}