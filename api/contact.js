import nodemailer from 'nodemailer';

const companyEmail = 'lrbuilderscorporation@gmail.com';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST']);
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, message } = request.body || {};

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return response.status(500).json({
      error: 'Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in Vercel.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `New Quote Request from ${name}`;
  const text = [
    'You have received a new quote inquiry from the website.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Project Type: ${projectType || 'General Inquiry'}`,
    '',
    'Message:',
    message,
    '',
    `Received At: ${new Date().toISOString()}`,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h2 style="margin:0 0 16px">New Quote Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType || 'General Inquiry')}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space:pre-wrap;border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#f8fafc">${escapeHtml(message)}</div>
      <p style="margin-top:16px;color:#64748b;font-size:12px">Received At: ${new Date().toISOString()}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `LR Builders Corporation <${smtpUser}>`,
      to: companyEmail,
      cc: email,
      replyTo: email,
      subject,
      text,
      html,
    });

    return response.status(200).json({
      ok: true,
      message: 'Quote request sent to the company email.',
    });
  } catch (error) {
    return response.status(500).json({
      error: 'Email could not be sent. Check your SMTP credentials and Gmail app password.',
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}