import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

function missingEnv() {
  return requiredEnv.filter((k) => !process.env[k]);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = (body?.name ?? "").trim();
    const email = (body?.email ?? "").trim();
    const message = (body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please use a valid email." }, { status: 400 });
    }

    const missing = missingEnv();
    if (missing.length) {
      return NextResponse.json(
        {
          ok: false,
          error: `Email service isn’t configured right now. Please email me directly at ${process.env.CONTACT_TO || process.env.SMTP_USER || "fatehahossainanushka@gmail.com"}.`
        },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const to = process.env.CONTACT_TO || process.env.SMTP_USER as string;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New message from ${name} via portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please try again in a moment." },
      { status: 500 }
    );
  }
}
