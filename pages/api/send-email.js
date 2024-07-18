import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Nodemailer transporter installation
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail username
        pass: process.env.GMAIL_PASS, // Your Gmail application password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Yeni İletişim Formu Mesajı: ${name}`,
      text: `Ad: ${name}\nEmail: ${email}\nTelefon: ${phone}\nMesaj: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'E-posta gönderilemedi' });
    }
  } else {
    res.status(405).json({ message: 'Yalnızca POST isteği kabul edilir' });
  }
}
