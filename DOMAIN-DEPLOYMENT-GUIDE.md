# 🌐 Deploy quantumdatasynergy.com Website to Vercel

## Step 1: Deploy Your Frontend to Vercel

### 1.1 Create Frontend Repository
1. Go to [github.com](https://github.com)
2. Create a new repository: `quantum-data-synergy-website`
3. Upload your entire frontend project (all files except the `server/` folder)

### 1.2 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your `quantum-data-synergy-website` repository
4. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**

## Step 2: Connect Your Custom Domain

### 2.1 Add Domain in Vercel
1. In your Vercel project dashboard, go to **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter: `quantumdatasynergy.com`
4. Click **"Add"**
5. Also add: `www.quantumdatasynergy.com`

### 2.2 Configure DNS Records
Vercel will show you DNS records to add. Go to your domain registrar (where you bought the domain) and add these records:

**For the main domain (quantumdatasynergy.com):**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `76.76.19.61` (Vercel's IP)

**For www subdomain:**
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com`

### 2.3 Wait for DNS Propagation
- DNS changes can take 24-48 hours to fully propagate
- You can check status in Vercel dashboard

## Step 3: Set Up API Subdomain (Optional but Recommended)

### 3.1 Add API Subdomain
1. In Vercel, go to your **backend project** (the one you uploaded earlier)
2. Go to **"Settings"** → **"Domains"**
3. Add domain: `api.quantumdatasynergy.com`

### 3.2 Add DNS Record for API
In your domain registrar, add:
- **Type:** CNAME
- **Name:** api
- **Value:** `your-backend-project.vercel.app`

### 3.3 Update Contact Form
Update your contact form to use the custom API domain:

```javascript
// In src/components/Contact.tsx
const API_URL = 'https://api.quantumdatasynergy.com/api/contact';
```

## Step 4: Environment Variables (if needed)

If your frontend needs environment variables:
1. In Vercel project settings → **"Environment Variables"**
2. Add any needed variables
3. Redeploy if necessary

## Step 5: Test Everything

### 5.1 Test Website
- Visit: `https://quantumdatasynergy.com`
- Check all pages load correctly
- Test dark/light mode toggle
- Verify responsive design

### 5.2 Test Contact Form
- Fill out the contact form
- Check if emails are received
- Verify auto-reply functionality

### 5.3 Test API Health
- Visit: `https://api.quantumdatasynergy.com/api/health`
- Should return: `{"status":"OK"}`

## Step 6: SSL Certificate

Vercel automatically provides SSL certificates for your custom domain. Once DNS propagates:
- Your site will be available at `https://quantumdatasynergy.com`
- SSL certificate will be automatically issued and renewed

## Troubleshooting

### Domain Not Working?
1. **Check DNS propagation:** Use [whatsmydns.net](https://whatsmydns.net)
2. **Verify DNS records:** Make sure A and CNAME records are correct
3. **Wait longer:** DNS can take up to 48 hours

### Contact Form Not Working?
1. **Check API deployment:** Visit the health endpoint
2. **Verify environment variables:** In backend Vercel project
3. **Check Gmail app password:** Make sure it's the 16-character one

### SSL Issues?
1. **Wait for propagation:** SSL certificates are issued after DNS propagates
2. **Force refresh:** Clear browser cache
3. **Check Vercel dashboard:** Look for SSL status

## Final Checklist

- [ ] Frontend deployed to Vercel
- [ ] Custom domain `quantumdatasynergy.com` added
- [ ] DNS records configured at domain registrar
- [ ] Backend API deployed (separate project)
- [ ] API subdomain `api.quantumdatasynergy.com` configured
- [ ] Contact form updated with correct API URL
- [ ] Gmail app password configured
- [ ] SSL certificate issued
- [ ] Website fully functional

## Expected Timeline

- **Immediate:** Vercel deployment complete
- **15 minutes:** DNS starts propagating
- **2-6 hours:** Domain partially working
- **24-48 hours:** Fully propagated worldwide

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify DNS settings with your registrar
3. Test API endpoints individually
4. Contact Vercel support if needed

Your professional website will be live at `quantumdatasynergy.com`! 🚀