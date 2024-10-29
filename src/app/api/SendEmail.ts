import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

  const { name, email, message } = req.body;

  const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER, // Environment variable for the email address
      pass: process.env.EMAIL_PASS, // Environment variable for the email password
    },
  };

  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'Bradkivell@gmail.com',
    subject: 'New message from contact form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error('Error sending email:', errorMessage);

    res.status(500).json({ success: false, message: 'Error sending email', error: errorMessage });
  }
};
