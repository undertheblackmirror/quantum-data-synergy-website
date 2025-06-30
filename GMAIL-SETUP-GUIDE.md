# 📧 Gmail Integration Setup Guide

## 🚀 Step 1: Enable Gmail App Passwords

Since you created the email on Gmail, you need to set up **App Passwords** for security:

### 1.1 Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the setup process to enable 2FA

### 1.2 Generate App Password
1. After enabling 2FA, go back to **Security**
2. Under "Signing in to Google", click **App passwords**
3. Select **Mail** as the app
4. Select **Other (Custom name)** as the device
5. Enter "Quantum Data Synergy Website" as the name
6. Click **Generate**
7. **Copy the 16-character password** (you'll need this!)

## 🔧 Step 2: Configure Your Backend

### 2.1 Update Environment Variables
Create a `.env` file in your `server/` folder:

```env
# Your Gmail address
GMAIL_USER=contact@quantumdatasynergy.com

# The 16-character app password from Step 1.2
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop

# Where you want to receive emails (usually same as GMAIL_USER)
ADMIN_EMAIL=contact@quantumdatasynergy.com

# Your website domain
FRONTEND_URL=https://quantumdatasynergy.com

PORT=3001
NODE_ENV=production
```

### 2.2 Use the Gmail-Specific Server
- Use `server/index-gmail.js` instead of the regular `index.js`
- This file is specifically configured for Gmail SMTP

## 📱 Step 3: Deploy to Your Hosting

### Option A: Deploy to Hostinger
1. Upload the `server/` folder to your Hostinger account
2. If Hostinger supports Node.js:
   - Create a Node.js app
   - Upload `index-gmail.js` and rename it to `index.js`
   - Upload `package.json`
   - Create the `.env` file with your credentials
   - Install dependencies: `npm install`

### Option B: Use a Free Service (Recommended)
Since Gmail works great with these services:

#### Vercel (Free)
1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Add environment variables in Vercel dashboard
4. Deploy automatically

#### Railway (Free tier)
1. Create account at [railway.app](https://railway.app)
2. Connect GitHub repository
3. Add environment variables
4. Deploy with one click

#### Render (Free tier)
1. Create account at [render.com](https://render.com)
2. Connect GitHub repository
3. Add environment variables
4. Deploy automatically

## 🌐 Step 4: Update Your Website

### 4.1 Update Contact Form URL
In your React app's `Contact.tsx`, update the API URL:

```javascript
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api/contact'  // Your deployed API URL
  : 'http://localhost:3001/api/contact';
```

### 4.2 Example URLs:
- **Vercel**: `https://your-app-name.vercel.app/api/contact`
- **Railway**: `https://your-app-name.up.railway.app/api/contact`
- **Render**: `https://your-app-name.onrender.com/api/contact`

## ✅ Step 5: Test Everything

### 5.1 Test the API
Visit your deployed API health check:
`https://your-api-domain.com/api/health`

You should see:
```json
{
  "status": "OK",
  "service": "Gmail SMTP",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 5.2 Test the Contact Form
1. Fill out your website's contact form
2. Check your Gmail inbox for the notification
3. Check the sender's email for the auto-reply

## 🔒 Security Features

### ✅ What's Included:
- **Rate limiting**: 5 submissions per 15 minutes per IP
- **Input validation**: Prevents malicious data
- **Sanitization**: Cleans all user input
- **App passwords**: More secure than regular passwords
- **CORS protection**: Only your domain can use the API

## 🎨 Email Features

### For You (Admin Emails):
- 🎨 **Beautiful design** with gradients and icons
- 📱 **Mobile-friendly** responsive layout
- ⚡ **Quick action buttons** to reply instantly
- 📊 **Contact details** prominently displayed
- 🔗 **Direct reply links** for easy responses

### For Users (Auto-Reply):
- 🏢 **Professional branding** with your company colors
- ✅ **Confirmation message** with next steps
- 📞 **Contact information** for urgent matters
- 📱 **Social media links** for engagement
- 🎯 **Clear expectations** about response time

## 🚨 Troubleshooting

### Common Issues:

**"Invalid credentials" error:**
- Make sure you're using the **App Password**, not your regular Gmail password
- Double-check the 16-character app password format

**"Authentication failed" error:**
- Ensure 2-Factor Authentication is enabled
- Regenerate the app password if needed

**Emails not sending:**
- Check Gmail's "Sent" folder
- Verify the recipient email address
- Check spam folders

**CORS errors:**
- Update `FRONTEND_URL` in your `.env` file
- Make sure your website domain is correct

## 💡 Pro Tips

1. **Test locally first**: Run the server on your computer before deploying
2. **Use environment variables**: Never hardcode passwords in your code
3. **Monitor email delivery**: Check Gmail's sent folder regularly
4. **Keep app passwords secure**: Treat them like regular passwords
5. **Update regularly**: Keep your dependencies up to date

## 📞 Need Help?

If you run into issues:
1. Check the server logs for error messages
2. Verify your Gmail app password is correct
3. Test the API health endpoint
4. Make sure 2FA is enabled on your Google account

---

**Ready to go live?** 🚀

Once you've completed these steps, your contact form will send beautiful, professional emails through Gmail with automatic replies to your visitors!