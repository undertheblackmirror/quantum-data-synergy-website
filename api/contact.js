// This is a sample backend API endpoint for Hostinger
// You'll need to create this file in your Hostinger hosting environment

const nodemailer = require('nodemailer');

// Configure your Hostinger SMTP settings
const transporter = nodemailer.createTransporter({
  host: 'smtp.hostinger.com', // Hostinger SMTP server
  port: 587, // or 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'contact@quantumdatasynergy.com', // Your Hostinger email
    pass: 'your-email-password' // Your email password or app password
  }
});

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    // Email content
    const mailOptions = {
      from: 'contact@quantumdatasynergy.com',
      to: 'contact@quantumdatasynergy.com', // Where you want to receive emails
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from quantumdatasynergy.com contact form</small></p>
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};