    # EmailJS Setup - Step by Step

## EXACT Steps to Fix 422 Error

### Step 1: Go to EmailJS Dashboard

https://dashboard.emailjs.com/

### Step 2: Go to Email Templates

Click **Email Templates** → Find your template → Click **Edit**

### Step 3: Template Settings

- **Template Name**: Can be anything (e.g., "Portfolio Contact")
- **To Email**: `{{to_email}}` (use the variable, NOT hardcoded)

### Step 4: Email Content

In the template editor, use EXACTLY these variables:

```
Subject: New Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

⚠️ Make sure you:

1. Set **To Email** field to: `{{to_email}}`
2. Use `{{}}` brackets around variable names
3. Use exact names: `to_email`, `user_name`, `user_email`, `message`

### Step 5: Save Template

Click **Save**

### Step 6: Copy Template ID

- Go back to **Email Templates** list
- Copy the **ID** from your template (e.g., `template_t3tvhis`)
- Update `.env` file with this ID

### Step 7: Verify Service

1. Click **Email Services** on the left
2. Make sure your service is **Connected** (should show checkmark)
3. Copy the **Service ID** (e.g., `service_ysjvawn`)
4. Update `.env` file with this ID

### Step 8: Test

1. Rebuild: `npm run build`
2. Run: `npm run preview`
3. Fill form and click Send
4. Check for success message

## If Still Getting 422

Try this alternative approach:

1. Create a NEW template from scratch
2. Name it: "Portfolio Contact Form"
3. To Email: Leave BLANK for now, just type your email: `ahmedalsirmuabrak@hotmail.com`
4. Subject: `New Portfolio Message from {{user_name}}`
5. Content:

```
From: {{user_email}}
Name: {{user_name}}

Message:
{{message}}
```

6. Save and test

## Debug Checklist

- [ ] Template uses: `{{to_email}}`, `{{user_name}}`, `{{user_email}}`, `{{message}}`
- [ ] Service is Connected
- [ ] Credentials in `.env` are copied correctly
- [ ] No typos in variable names (exact match with code sending them)
