# Hostinger Backend API Deployment Guide

## Step 1: Prepare Your Hostinger Account

### 1.1 Enable Node.js Support
- Log into your Hostinger control panel
- Go to **Advanced** → **Node.js**
- Create a new Node.js application
- Select Node.js version 18 or higher
- Set the startup file to `index.js`

### 1.2 Set Up Email Account
- Go to **Email** → **Email Accounts**
- Create `contact@quantumdatasynergy.com` (or your domain)
- Note down the password for later use

## Step 2: Upload Backend Files

### 2.1 File Structure
Upload these files to your Hostinger Node.js application directory:
```
your-app-folder/
├── index.js
├── package.json
├── .env
└── README.md
```

### 2.2 Create Environment File
Create a `.env` file with your actual credentials:
```env
# Replace with your actual values
EMAIL_USER=contact@quantumdatasynergy.com
EMAIL_PASS=your-actual-email-password
ADMIN_EMAIL=contact@quantumdatasynergy.com
FRONTEND_URL=https://yourdomain.com
PORT=3001
NODE_ENV=production
```

## Step 3: Install Dependencies

### 3.1 Via Hostinger Control Panel
- In your Node.js app settings, click **Install Dependencies**
- Or use the terminal: `npm install`

### 3.2 Required Dependencies
The following will be installed automatically:
- express
- nodemailer
- cors
- express-rate-limit
- dotenv

## Step 4: Configure Your Domain

### 4.1 Update Frontend URL
In your React app's Contact component, update the API URL:
```javascript
const API_URL = 'https://yourdomain.com/api/contact';
```

### 4.2 Set Up Subdomain (Optional)
- Create a subdomain like `api.quantumdatasynergy.com`
- Point it to your Node.js application
- Update the frontend to use `https://api.quantumdatasynergy.com/api/contact`

## Step 5: Test the Setup

### 5.1 Health Check
Visit: `https://yourdomain.com/api/health`
You should see: `{"status":"OK","timestamp":"..."}`

### 5.2 Test Contact Form
1. Fill out your website's contact form
2. Check if you receive the email
3. Verify the auto-reply is sent to the user

## Step 6: Hostinger-Specific SMTP Settings

### 6.1 SMTP Configuration
```javascript
// In your index.js file, use these Hostinger settings:
const transporter = nodemailer.createTransporter({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: 'contact@quantumdatasynergy.com', // Your email
    pass: 'your-email-password'             // Your password
  },
  tls: {
    rejectUnauthorized: false
  }
});
```

### 6.2 Alternative SMTP Settings (if needed)
If the above doesn't work, try:
```javascript
{
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'contact@quantumdatasynergy.com',
    pass: 'your-email-password'
  }
}
```

## Step 7: Security Considerations

### 7.1 Environment Variables
- Never commit `.env` files to version control
- Use strong passwords for email accounts
- Consider using app-specific passwords

### 7.2 Rate Limiting
The API includes rate limiting (5 requests per 15 minutes per IP) to prevent spam.

### 7.3 Input Validation
All form inputs are validated and sanitized before processing.

## Step 8: Troubleshooting

### 8.1 Common Issues

**Email not sending:**
- Check SMTP credentials
- Verify email account exists
- Try different port (587 vs 465)
- Check Hostinger email logs

**CORS errors:**
- Verify FRONTEND_URL in .env
- Check domain spelling
- Ensure HTTPS is used in production

**500 errors:**
- Check Node.js application logs in Hostinger
- Verify all dependencies are installed
- Check .env file format

### 8.2 Testing Commands
```bash
# Test SMTP connection
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: 'contact@quantumdatasynergy.com',
    pass: 'your-password'
  }
});
transporter.verify().then(console.log).catch(console.error);
"
```

## Step 9: Monitoring

### 9.1 Log Monitoring
- Check Hostinger's Node.js application logs regularly
- Monitor for failed email attempts
- Watch for unusual traffic patterns

### 9.2 Email Delivery
- Test the contact form weekly
- Check spam folders
- Monitor email delivery rates

## Support

If you encounter issues:
1. Check Hostinger's Node.js documentation
2. Contact Hostinger support for SMTP issues
3. Review the application logs for error details

## Security Note
Remember to:
- Keep your email password secure
- Regularly update dependencies
- Monitor for suspicious activity
- Use HTTPS in production