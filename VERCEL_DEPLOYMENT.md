# Vercel Deployment Instructions

## What this project uses
- Frontend: Vite + React
- Backend: Vercel serverless function at `api/contact.js`
- Email delivery: Gmail SMTP through Nodemailer

## Before you deploy
1. Make sure the code is in a GitHub repository.
2. Confirm the app builds locally with `npm run build`.
3. Use a Gmail app password for `lrbuilderscorporation@gmail.com`.

## Deploy to Vercel
1. Go to Vercel and click **Add New -> Project**.
2. Import the GitHub repository.
3. Keep the default framework detection.
4. Use these build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy the project.

## Add environment variables in Vercel
Go to **Project Settings -> Environment Variables** and add:
- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `465`
- `SMTP_USER` = `lrbuilderscorporation@gmail.com`
- `SMTP_PASS` = your Gmail app password

## After deploying
1. Open the live site.
2. Fill out the contact form.
3. The inquiry will be sent to `lrbuilderscorporation@gmail.com`.
4. A copy will also go to the sender’s email address.

## If email does not work
- Check that the Gmail app password is correct.
- Confirm the environment variables are saved for Production.
- Make sure the sender email entered in the form is valid.