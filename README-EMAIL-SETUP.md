# Email Integration Setup for Hostinger

## Option 1: Backend API (Recommended)

### Step 1: Create API Endpoint on Hostinger
1. In your Hostinger hosting account, create a new folder called `api`
2. Upload the `contact.js` and `package.json` files to this folder
3. Install dependencies by running `npm install` in the api folder

### Step 2: Configure SMTP Settings
Update the `contact.js` file with your actual Hostinger email credentials:

```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: 'contact@quantumdatasynergy.com', // Your actual email
    pass: 'your-actual-password' // Your email password
  }
});
```

### Step 3: Update Frontend URL
In the Contact component, update the fetch URL to match your domain:
```javascript
const response = await fetch('https://yourdomain.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## Option 2: Third-Party Services (Alternative)

### EmailJS (Free tier available)
1. Sign up at https://www.emailjs.com/
2. Create a service and template
3. Install EmailJS: `npm install @emailjs/browser`
4. Update the contact form to use EmailJS

### Formspree (Free tier available)
1. Sign up at https://formspree.io/
2. Create a form endpoint
3. Update the form action to point to Formspree

## Option 3: PHP Contact Form (For shared hosting)

If your Hostinger account supports PHP, you can create a simple PHP script:

```php
<?php
// contact.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'];
    $email = $input['email'];
    $subject = $input['subject'];
    $message = $input['message'];
    
    $to = 'contact@quantumdatasynergy.com';
    $email_subject = "New Contact Form: " . $subject;
    $email_body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Failed to send email']);
    }
}
?>
```

## Hostinger Email Settings

### SMTP Configuration:
- **SMTP Server:** smtp.hostinger.com
- **Port:** 587 (TLS) or 465 (SSL)
- **Security:** STARTTLS or SSL/TLS
- **Username:** Your full email address
- **Password:** Your email password

### Important Notes:
1. Make sure your email account is created in Hostinger's control panel
2. Enable "Less secure app access" if required
3. Consider using app-specific passwords for better security
4. Test the email configuration before going live

## Testing
1. Deploy your backend API to Hostinger
2. Update the frontend fetch URL
3. Test the contact form
4. Check your email inbox for received messages

Choose the option that best fits your Hostinger hosting plan and technical requirements.