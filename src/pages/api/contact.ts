import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  try {
    await sgMail.send({
      to: process.env.SENDGRID_RECIPIENT || '',
      from: process.env.SENDGRID_SENDER || '',
      subject: `Name: ${name} Email: ${email}`,
      text: `Message:\n${message}`,
    });

    res.status(202).send({ success: true, error: null });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error;

    console.error(errorMessage);

    res.status(500).send({ success: false, error: errorMessage });
  }
};

export default contact;
