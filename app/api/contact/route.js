import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shcatirupati@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'shcatirupati@gmail.com',
      subject: 'New Enquiry from SHCA Website',
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(JSON.stringify({ error: "Email failed to send" }), { status: 500 });
  }
}
