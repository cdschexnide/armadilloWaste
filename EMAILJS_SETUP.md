# EmailJS Setup Guide for Armadillo Waste Contact Form

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 2. Add Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended for business use)
4. Follow the instructions to connect your business Gmail account
5. **Copy the Service ID** (you'll need this later)

## 3. Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello {{to_name}},

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your Armadillo Waste website contact form.
```

4. **Copy the Template ID** (you'll need this later)

## 4. Get Public Key

1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key**

## 5. Update Environment Variables

1. Open the `.env.local` file in your project
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Set Up Vercel Environment Variables

For production deployment:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add these three variables:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key

## 7. Test the Form

1. Build and deploy your site
2. Fill out the contact form with test data
3. Check your business email for the submission
4. Verify the email formatting looks correct

## Free Tier Limits

- 200 emails per month
- No credit card required
- Perfect for small business websites

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that your Gmail account is properly connected
- Verify the template ID matches your created template
- Check browser console for any error messages