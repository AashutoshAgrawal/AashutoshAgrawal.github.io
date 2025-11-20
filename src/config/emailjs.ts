// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from https://www.emailjs.com/ after creating your account

export const emailConfig = {
  // Your EmailJS Service ID (from EmailJS dashboard)
  serviceId: 'YOUR_SERVICE_ID', // e.g., 'service_abc123'
  
  // Your EmailJS Template ID (from EmailJS dashboard)
  templateId: 'YOUR_TEMPLATE_ID', // e.g., 'template_xyz789'
  
  // Your EmailJS Public Key (from EmailJS dashboard -> Account -> API Keys)
  publicKey: 'YOUR_PUBLIC_KEY', // e.g., 'abcdefghijk123456789'
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.) in the Email Services section
// 3. Create an email template in the Email Templates section
// 4. Copy your Service ID, Template ID, and Public Key
// 5. Replace the placeholders above with your actual values

// Template variables that will be sent:
// - from_name: Sender's name
// - from_email: Sender's email
// - subject: Email subject
// - message: Email message
// - to_name: Your name (recipient)
