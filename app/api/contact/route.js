import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shcatirupati@gmail.com',
        pass: process.env.EMAIL_PASS, // use Gmail App Password
      },
    });

    const mailOptions = {
      from: email,
      to: 'shcatirupati@gmail.com',
      subject: 'New Enquiry from SHCA Website',
      text: `
New enquiry received:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email send error:', err);
    return new Response(JSON.stringify({ error: 'Email failed to send' }), {
      status: 500,
    });
  }
}
