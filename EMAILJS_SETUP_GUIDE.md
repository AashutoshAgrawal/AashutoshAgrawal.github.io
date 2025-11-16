# 📧 EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form actually send emails to your inbox.

## 🚀 Quick Setup (5-10 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" 
3. Create your account (you can use Google/GitHub login)

### Step 2: Add Email Service
1. After login, go to **Email Services** from the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Follow the connection steps:
   - For Gmail: You'll need to authenticate with your Google account
   - Name your service (e.g., "Portfolio Contact")
5. **Copy your Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** from the dashboard
2. Click **"Create New Template"**
3. Set up your template:

**Subject field:**
```
New Portfolio Contact: {{subject}}
```

**Content (To You):**
```
Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Optional: Set up an **Auto-Reply** template to send confirmation to the visitor
5. Click **"Save"**
6. **Copy your Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. **Copy your Public Key** (looks like: `abcdefghijk123456789`)

### Step 5: Update Your Portfolio Code
1. Open the file: `src/config/emailjs.ts`
2. Replace the placeholders with your actual values:

```typescript
export const emailConfig = {
  serviceId: 'service_abc123',    // Your actual Service ID
  templateId: 'template_xyz789',  // Your actual Template ID
  publicKey: 'abcdefghijk123456',  // Your actual Public Key
};
```

### Step 6: Test Your Form
1. Restart your development server: `npm start`
2. Go to your portfolio website
3. Fill out the contact form
4. Click "Send Message"
5. Check your email inbox - you should receive the message!

## 📊 EmailJS Free Plan Limits
- **200 emails per month** (resets monthly)
- **2 email templates**
- **Limited to 50KB per request**
- **No credit card required**

## 🔧 Troubleshooting

### Form shows "error" after submitting:
1. Check browser console for error messages
2. Verify all three IDs are correct in `emailjs.ts`
3. Make sure your email service is connected in EmailJS dashboard

### Not receiving emails:
1. Check your spam folder
2. Verify the email service is "Active" in EmailJS dashboard
3. Check EmailJS dashboard for failed attempts

### "Unauthorized" error:
- Your Public Key might be incorrect
- Check if you're using the Public Key (not Private Key)

## 🔒 Security Notes
- **Never commit your Private Key** to GitHub
- The Public Key is safe to use in frontend code
- For production, consider using environment variables

## 📝 Template Variables Reference
Your contact form sends these variables:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{subject}}` - Email subject
- `{{message}}` - The message content
- `{{to_name}}` - Your name (from constants)

## 🎨 Customization Ideas
1. **Add more fields**: Phone number, company, etc.
2. **Multiple templates**: Different templates for different types of inquiries
3. **Auto-reply**: Send a confirmation email to visitors
4. **Attachments**: Upgrade to paid plan to accept file attachments

## 💡 Pro Tips
1. Test with your own email first
2. Set up email filters to organize portfolio messages
3. Consider adding reCAPTCHA for spam protection (paid feature)
4. Monitor your usage in EmailJS dashboard

## 🆘 Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Examples: https://www.emailjs.com/docs/examples/reactjs/
- Support: support@emailjs.com

---

**Remember to update `src/config/emailjs.ts` with your actual credentials!**

