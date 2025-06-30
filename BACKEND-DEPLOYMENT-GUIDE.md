# 🚀 Backend API Deployment Guide for quantumdatasynergy.com

## Quick Setup Options

### Option 1: Vercel (Recommended - Free & Fast)

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy Your Backend**
   - Upload your `server/` folder to a new GitHub repository
   - Connect the repository to Vercel
   - Set these environment variables in Vercel dashboard:
     ```
     GMAIL_USER=contact@quantumdatasynergy.com
     GMAIL_APP_PASSWORD=your-16-character-app-password
     ADMIN_EMAIL=contact@quantumdatasynergy.com
     FRONTEND_URL=https://quantumdatasynergy.com
     ```

3. **Your API will be available at:**
   `https://your-project-name.vercel.app/api/contact`

### Option 2: Railway (Free Tier)

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy Backend**
   - Connect your GitHub repository
   - Add the same environment variables
   - Deploy automatically

3. **Your API will be available at:**
   `https://your-project-name.up.railway.app/api/contact`

### Option 3: Render (Free Tier)

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Deploy Backend**
   - Connect repository
   - Add environment variables
   - Deploy

3. **Your API will be available at:**
   `https://your-project-name.onrender.com/api/contact`

## Gmail Setup (Required)

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** → **2-Step Verification**
3. Follow setup process

### Step 2: Generate App Password
1. Go to **Security** → **App passwords**
2. Select **Mail** and **Other (Custom name)**
3. Enter "Quantum Data Synergy Website"
4. **Copy the 16-character password**

### Step 3: Update Environment Variables
Use the 16-character password as `GMAIL_APP_PASSWORD` in your deployment.

## Testing Your Deployment

1. **Health Check**
   Visit: `https://your-api-domain.com/api/health`
   Should return: `{"status":"OK","service":"Gmail SMTP"}`

2. **Test Contact Form**
   - Fill out your website's contact form
   - Check Gmail for admin notification
   - Verify auto-reply is sent

## Domain Configuration (Optional)

### Set Up API Subdomain
1. In your domain registrar, add CNAME record:
   - Name: `api`
   - Value: `your-deployment-domain.vercel.app`

2. Update contact form to use:
   `https://api.quantumdatasynergy.com/api/contact`

## Files to Upload

Make sure your backend repository includes:
- `server/index-gmail.js` (rename to `index.js`)
- `server/package.json`
- `.env` file with your credentials

## Quick Commands

```bash
# Test your API locally first
cd server
npm install
npm start

# Check if it works
curl http://localhost:3001/api/health
```

## Support

If you need help:
1. Check deployment logs in your chosen platform
2. Verify Gmail app password is correct
3. Test the health endpoint first
4. Make sure environment variables are set correctly

Your contact form will work once the backend is deployed! 🚀