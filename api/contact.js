import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Configure Zoho SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS, // Use app password
    },
  });
console.log('DEBUG: ZOHO_USER set?', !!process.env.ZOHO_USER);
console.log('DEBUG: ZOHO_PASS set?', !!process.env.ZOHO_PASS);

  try {
    // Optional: test connection first
    await transporter.verify();
    // 1. Notify site owner
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      subject: `New Contact Form: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    console.log("Contact form email sent to site owner.");
    
    // 2. Auto-confirmation to visitor
    await transporter.sendMail({
      from: `"Jason Githui AI Consulting" <${process.env.ZOHO_USER}>`,
      to: email,
      subject: "Thanks for contacting Jason Githui 🚀",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <b>Jason Githui AI Consulting</b>. 
        Your message has been received and I’ll get back to you shortly.</p>
        <p>Meanwhile, here’s something useful for you:</p>
        <p>👉 <a href="https://youtu.be/reUZRyXxUs4">How AI Could Empower Any Business</a></p>
        <p>Best regards,<br>AI Consultant</p>
        <p>Jason Githui</p> 
      `,
    });
    console.log("Contact form email sent to visitor.");
    res.status(200).json({ message: "Thanks! Confirmation sent to your email." });
  } catch (error) {
  console.error("Email sending failed:", error);
  return res.status(500).json({ 
    success: false, 
    message: "Error sending message. Please try again later.",
    error: error.message 
  });
}
}
