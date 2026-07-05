# LR Builders Corporation

Corporate construction website for LR Builders Corporation, built with Vite, React, Tailwind CSS, and a Vercel serverless contact form.

## Features

- Multi-section corporate landing page
- Project portfolio with search and category filtering
- Contact form at the bottom of the landing page
- Quote submissions sent to `lrbuilderscorporation@gmail.com`
- Copy of each inquiry sent to the sender

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React icons
- Nodemailer for email delivery through Vercel serverless functions

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

## Contact Form Email Setup

The form submits to the Vercel API route at `api/contact.js`.

Set these environment variables in Vercel:

- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `465`
- `SMTP_USER` = `lrbuilderscorporation@gmail.com`
- `SMTP_PASS` = your Gmail app password

## Vercel Deployment

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use these build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add the SMTP environment variables in Vercel.
5. Deploy.

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for a more detailed deployment guide.
