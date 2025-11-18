// templates/emailTemplate.js

export function emailTextTemplate(data) {
    const name = data.name || 'there';
    return `Hi ${name},

Thank you for registering for our Nobel Prize 2025 Public Talk!

📢 Invitation — Nobel Prize 2025 Public Talk
"THE CAT'S OUT, THE CIRCUITS ARE QUANTUM!"

A fun, story-driven talk on the experiments behind the 2025 Nobel Prize in Physics — from Schrödinger's Cat to Quantum Computers.

📅 Date: 22 Nov 2025 (Saturday)
⏰ Time: 6:30–8:30 PM
📍 Venue: Auditorium, Jnana Prabodhini, Sadashiv Peth, Pune

🎙 Speaker: Dr. Siddharth Dhomkar
Faculty, Physics Dept., IIT Madras | Honorary Research Associate, University College London

Highlights:
• Clear, intuitive explanation of superconducting quantum circuits
• Minimal math — fully engaging & interactive
• Free 1-page "Quantum Map" cheatsheet — a beginner-friendly guide to modern quantum physics (attached)

📄 Your "Quantum Map" PDF is attached to this email.

📞 Questions? Contact Om Chavan: +91 8390770254
🔗 Share & register: tinyurl.com/quantum-cats

Open for all • Free entry
Please share widely in your groups!

See you there!
— Jnana Prabodhini, Yuvak Vibhag`;
}

export function emailHtmlTemplate(data) {
    const name = data.name || 'there';
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #4285f4;
        }
        .title {
            color: #1a73e8;
            font-size: 24px;
            font-weight: bold;
            margin: 10px 0;
        }
        .subtitle {
            color: #5f6368;
            font-size: 18px;
            font-style: italic;
        }
        .info-box {
            background-color: #e8f0fe;
            border-left: 4px solid #4285f4;
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 4px;
        }
        .info-box p {
            margin: 8px 0;
        }
        .info-box strong {
            color: #1a73e8;
        }
        .speaker-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            margin: 20px 0;
        }
        .highlights {
            margin: 20px 0;
        }
        .highlights ul {
            list-style: none;
            padding-left: 0;
        }
        .highlights li {
            padding: 8px 0 8px 30px;
            position: relative;
        }
        .highlights li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #34a853;
            font-weight: bold;
            font-size: 18px;
        }
        .attachment-notice {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        .cta-button {
            display: inline-block;
            background-color: #4285f4;
            color: #ffffff !important;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin: 10px 5px;
            text-align: center;
        }
        .cta-button:hover {
            background-color: #1a73e8;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            color: #5f6368;
            font-size: 14px;
        }
        .contact {
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 6px;
        }
        @media only screen and (max-width: 600px) {
            body {
                padding: 10px;
            }
            .container {
                padding: 20px;
            }
            .title {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <p style="margin: 0; color: #5f6368;">Hi <strong>${name}</strong>! 👋</p>
            <p style="margin: 10px 0 0 0; color: #5f6368;">Thank you for registering!</p>
        </div>

        <div class="title">
            📢 Nobel Prize 2025 Public Talk
        </div>
        <div class="subtitle">
            "THE CAT'S OUT, THE CIRCUITS ARE QUANTUM!"
        </div>

        <p style="margin: 20px 0; font-size: 16px;">
            A fun, story-driven talk on the experiments behind the <strong>2025 Nobel Prize in Physics</strong> — from Schrödinger's Cat to Quantum Computers.
        </p>

        <div class="info-box">
            <p><strong>📅 Date:</strong> 22 Nov 2025 (Saturday)</p>
            <p><strong>⏰ Time:</strong> 6:30–8:30 PM</p>
            <p><strong>📍 Venue:</strong> Auditorium, <strong>Jnana Prabodhini</strong>, Sadashiv Peth, Pune</p>
        </div>

        <div class="speaker-box">
            <p style="margin: 0;"><strong>🎙 Speaker: Dr. Siddharth Dhomkar</strong></p>
            <p style="margin: 8px 0 0 0; color: #5f6368; font-size: 14px;">
                Faculty, Physics Dept., <strong>IIT Madras</strong><br>
                Honorary Research Associate, <strong>University College London</strong>
            </p>
        </div>

        <div class="highlights">
            <h3 style="color: #1a73e8; margin-bottom: 15px;">Highlights:</h3>
            <ul>
                <li>Clear, intuitive explanation of superconducting quantum circuits</li>
                <li>Minimal math — fully engaging & interactive</li>
                <li>Free 1-page "Quantum Map" cheatsheet — a beginner-friendly guide to modern quantum physics</li>
            </ul>
        </div>

        <div class="attachment-notice">
            <strong>📄 Your "Quantum Map" PDF is attached to this email!</strong>
            <p style="margin: 8px 0 0 0; font-size: 14px;">
                This one-page guide will help you prepare for the talk and understand the key concepts.
            </p>
        </div>

        <div style="text-align: center; margin: 30px 0;">
            <a href="https://tinyurl.com/quantum-cats" class="cta-button">📝 Register & Share</a>
        </div>

        <div class="contact">
            <p style="margin: 0;"><strong>📞 Questions?</strong></p>
            <p style="margin: 8px 0 0 0;">Contact Om Chavan: <a href="tel:+918390770254" style="color: #1a73e8;">+91 8390770254</a></p>
        </div>

        <div style="background-color: #e8f5e9; padding: 15px; border-radius: 6px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; color: #2e7d32; font-weight: bold;">
                ✨ Open for all • Free entry ✨
            </p>
            <p style="margin: 8px 0 0 0; color: #5f6368; font-size: 14px;">
                Please share widely in your groups!
            </p>
        </div>

        <div class="footer">
            <p style="margin: 0; font-weight: bold; color: #333;">See you there! 🚀</p>
            <p style="margin: 8px 0 0 0;">— Jnana Prabodhini, Yuvak Vibhag</p>
        </div>
    </div>
</body>
</html>
    `.trim();
}