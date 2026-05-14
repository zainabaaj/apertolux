import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@eviez.com.tr",
      cc: "zainabaaj@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `
New Contact Form Submission

Name / Company : ${name}
Email          : ${email}
Phone          : ${phone || "Not provided"}
Message        :

${message}

Sent at: ${new Date().toLocaleString("tr-TR")}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}