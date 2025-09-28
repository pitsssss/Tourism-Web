// app/api/contact/route.ts
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// دالة للتحقق من صحة البريد الإلكتروني
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// دالة للتحقق من طول النص
function isValidLength(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. التحقق من وجود الجسم كاملاً
    if (!body || typeof body !== 'object') {
      return Response.json({ error: 'Invalid request format' }, { status: 400 });
    }

    const { name, email, subject, message } = body;

    // 2. التحقق من الحقول المطلوبة
    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    // 3. التحقق من أن القيم نصوص
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      return Response.json({ error: 'All fields must be text' }, { status: 400 });
    }

    // 4. التحقق من طول الحقول
    if (!isValidLength(name.trim(), 2, 50)) {
      return Response.json({ error: 'Name must be between 2 and 50 characters' }, { status: 400 });
    }

    if (!isValidLength(subject.trim(), 5, 100)) {
      return Response.json({ error: 'Subject must be between 5 and 100 characters' }, { status: 400 });
    }

    if (!isValidLength(message.trim(), 10, 2000)) {
      return Response.json({ error: 'Message must be between 10 and 2000 characters' }, { status: 400 });
    }

    // 5. التحقق من صحة البريد الإلكتروني
    if (!isValidEmail(email.trim())) {
      return Response.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // 6. منع محتوى ضار (XSS بسيط)
    const dangerousPatterns = /<script|javascript:|on\w+=/i;
    if (
      dangerousPatterns.test(name) ||
      dangerousPatterns.test(subject) ||
      dangerousPatterns.test(message)
    ) {
      return Response.json({ error: 'Invalid characters detected' }, { status: 400 });
    }

    // 7. إعداد ناقل البريد
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'petertoss2004@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 8. إرسال البريد
    await transporter.sendMail({
      from: `"${name.trim()}" <${email.trim()}>`,
      to: 'petertoss2004@gmail.com',
      replyTo: email.trim(),
      subject: `Contact Form: ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <h2>New Message from Expore Syria Contact Form</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
        <p><strong>Subject:</strong> ${subject.trim()}</p>
        <div style="margin-top: 16px;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; margin-top: 8px;">${message.trim()}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}