# EmailJS Contact Form - Troubleshooting Guide

## Error 422: Unprocessable Content

This error occurs when your EmailJS template doesn't match what the form is sending.

## Solution: Create/Update Your EmailJS Template

### Step 1: Log in to EmailJS

- Go to https://dashboard.emailjs.com/
- Click **Email Templates** on the left

### Step 2: Check Your Template

Your template should have these variables:

- `{{user_name}}`
- `{{user_email}}`
- `{{message}}`

### Step 3: Template Example

Create/Edit your template with this content:

```
To: your-email@gmail.com
From: {{user_email}}
Subject: New Message from {{user_name}}

Message from: {{user_name}}
Email: {{user_email}}

---

{{message}}
```

### Step 4: Verify Your IDs

1. Go to Dashboard
2. Copy your:
   - **Service ID** (under Email Services)
   - **Template ID** (ID column in Email Templates)
   - **Public Key** (Account > API Keys)

### Step 5: Update .env file

```
VITE_APP_EMAILJS_SERVICE_ID=service_xxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxx
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 6: Test

1. Rebuild: `npm run build`
2. Run: `npm run preview`
3. Fill form and click Send
4. Check console for logs

## Common Issues

| Error              | Fix                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| 422 Unprocessable  | Template variables don't match - update template to use `{{user_name}}`, `{{user_email}}`, `{{message}}` |
| 401 Unauthorized   | Public key is wrong                                                                                      |
| 404 Not Found      | Service ID or Template ID is invalid                                                                     |
| Email not received | Check EmailJS Dashboard Activity tab for errors                                                          |

## Quick Debug Checklist

- [ ] Service ID is correct in `.env`
- [ ] Template ID is correct in `.env`
- [ ] Public Key is correct in `.env`
- [ ] Template uses: `{{user_name}}`, `{{user_email}}`, `{{message}}`
- [ ] Service is connected to an email provider
- [ ] Template is Active/Enabled

## If Still Not Working

1. Create a new template from scratch
2. Use exact variable names: `user_name`, `user_email`, `message`
3. Make sure the Service has an Email Provider connected
4. Check EmailJS Dashboard > Email Services > Activity for error details
