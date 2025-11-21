import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

export default {
  sendWelcomeEmail: async (email, username) => {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome to FitLife",
      html: `
        <h2>Hello ${username},</h2>
        <p>Your fitness journey starts now!</p>
      `
    });
  }
};