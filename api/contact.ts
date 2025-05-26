import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message, website } = req.body;

  // Honeypot check (anti-spam)
  if (website) {
    return res.status(200).json({ success: true });
  }

  // Artificial delay to deter bots
  await new Promise(resolve => setTimeout(resolve, 500));

  try {
    await resend.emails.send({
      from: 'DEE Website <noreply@deefiresolutions.com.au>',
      to: 'admin@deefiresolutions.com.au',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
