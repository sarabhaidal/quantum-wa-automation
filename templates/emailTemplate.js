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

Help us spread the word! Share the registration link with your friends:
🔗 https://tinyurl.com/quantum-cats

📞 Questions? Contact Om Chavan: +91 8390770254

Open for all • Free entry
Please share widely in your groups!

See you there!
— Jnana Prabodhini, Yuvak Vibhag`;
}

export function emailHtmlTemplate(data) {
    const name = data.name || 'there';
    const shareUrl = 'https://tinyurl.com/quantum-cats';
    const shareText = encodeURIComponent('Join me at "The Cat\'s Out, The Circuits Are Quantum!" - A Nobel Prize 2025 Physics talk on Nov 22 at Jnana Prabodhini, Pune. Register free: ' + shareUrl);

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
        .logo-container {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo-container img {
            max-width: 180px;
            height: auto;
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
        .share-section {
            background-color: #f0f7ff;
            border: 2px dashed #4285f4;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            text-align: center;
        }
        .share-title {
            color: #1a73e8;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .share-buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }
        .share-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 18px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            color: #ffffff !important;
            transition: transform 0.2s;
            min-width: 120px;
        }
        .share-button:hover {
            transform: translateY(-2px);
        }
        .share-button.whatsapp {
            background-color: #25D366;
        }
        .share-button.whatsapp:hover {
            background-color: #1da851;
        }
        .share-button.facebook {
            background-color: #1877F2;
        }
        .share-button.facebook:hover {
            background-color: #0d65d9;
        }
        .share-button.twitter {
            background-color: #1DA1F2;
        }
        .share-button.twitter:hover {
            background-color: #0d8bd9;
        }
        .share-button.linkedin {
            background-color: #0A66C2;
        }
        .share-button.linkedin:hover {
            background-color: #004182;
        }
        .share-button.email {
            background-color: #EA4335;
        }
        .share-button.email:hover {
            background-color: #d33426;
        }
        .copy-link-box {
            background-color: #ffffff;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            padding: 12px;
            margin: 15px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .copy-link-input {
            flex: 1;
            border: none;
            background: transparent;
            font-size: 14px;
            color: #5f6368;
            outline: none;
        }
        .copy-button {
            background-color: #4285f4;
            color: #ffffff;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            font-size: 13px;
        }
        .copy-button:hover {
            background-color: #1a73e8;
        }
        .contact {
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 6px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            color: #5f6368;
            font-size: 14px;
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
            .share-buttons {
                flex-direction: column;
            }
            .share-button {
                width: 100%;
                min-width: auto;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo-container">
            <img src="cid:logo" alt="Jnana Prabodhini - Yuvak Vibhag" />
        </div>

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

        <!-- SHARING SECTION -->
        <!-- SHARING SECTION -->
        <div class="share-section">
            <div class="share-title">🌟 Help Us Spread the Word!</div>
            <p style="margin: 10px 0; color: #5f6368;">Share this event with your friends, family, and colleagues</p>
            
            <div style="background-color: #ffffff; border: 2px solid #e0e0e0; border-radius: 6px; padding: 12px; margin: 15px 0; text-align: center;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #5f6368; font-weight: 600;">REGISTRATION LINK</p>
                <code style="background-color: #f5f5f5; padding: 8px 12px; border-radius: 4px; font-size: 14px; color: #1a73e8; display: inline-block; word-break: break-all;">
                    ${shareUrl}
                </code>
                <p style="margin: 8px 0 0 0; font-size: 12px; color: #5f6368;">
                    📋 Select and copy the link above to share
                </p>
            </div>

            <div class="share-buttons">
                <a href="https://wa.me/?text=${shareText}" class="share-button whatsapp" target="_blank">
                    📱 WhatsApp
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}" class="share-button facebook" target="_blank">
                    📘 Facebook
                </a>
                <a href="https://twitter.com/intent/tweet?text=${shareText}" class="share-button twitter" target="_blank">
                    🐦 Twitter
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}" class="share-button linkedin" target="_blank">
                    💼 LinkedIn
                </a>
                <a href="mailto:?subject=Nobel Prize 2025 Physics Talk&body=${shareText}" class="share-button email">
                    ✉️ Email
                </a>
            </div>
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

    <script>
        function copyLink() {
            const input = document.getElementById('shareLink');
            input.select();
            input.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = '✓ Copied!';
            button.style.backgroundColor = '#34a853';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '#4285f4';
            }, 2000);
        }
    </script>
</body>
</html>
    `.trim();
}