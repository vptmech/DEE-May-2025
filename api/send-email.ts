import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, mobile, company, suburb, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'DEE Website <noreply@deefiresolutions.com.au>',
      to: 'admin@deefiresolutions.com.au',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Suburb:</strong> ${suburb}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ error: 'Email sending failed' });
  }
}