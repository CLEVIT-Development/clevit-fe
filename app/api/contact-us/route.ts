import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactUsData {
  interestedServices: string;
  fullName: string;
  email: string;
  message: string;
  country: string;
  phone: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse FormData
    const formData = await request.formData();

    // Extract JSON data
    const dataString = formData.get("data") as string;

    if (!dataString) {
      return NextResponse.json({ error: "Missing data field" }, { status: 400 });
    }

    let contactData: ContactUsData;

    try {
      contactData = JSON.parse(dataString);
    } catch {
      return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 });
    }

    // Validate required fields
    if (!contactData.email || !contactData.fullName || !contactData.message) {
      return NextResponse.json(
        { error: "Missing required fields: email, fullName, or message" },
        { status: 400 }
      );
    }

    // Extract file if present
    const file = formData.get("file") as File | null;

    // Initialize SMTP transporter

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      console.error("Missing SMTP configuration");

      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Get IP address from request
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ipAddress = forwardedFor?.split(",")[0] || realIp || "Unknown";

    // Prepare email content with all data (including IP address)
    const emailHtml = `
      <html>
        <body>
          <h2>New Contact Form Submission</h2>
          <p><strong>Full Name:</strong> ${contactData.fullName}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Country:</strong> ${contactData.country || "N/A"}</p>
          <p><strong>Phone:</strong> ${contactData.phone || "N/A"}</p>
          <p><strong>Interested Services:</strong> ${contactData.interestedServices || "N/A"}</p>
          <p><strong>IP Address:</strong> ${ipAddress}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        </body>
      </html>
    `;

    // Prepare attachments if file exists

    const attachments: Array<{
      filename: string;
      content: string;
      encoding: string;
      contentType: string;
    }> = [];

    if (file && file.size > 0) {
      const fileBuffer = await file.arrayBuffer();
      const fileBase64 = Buffer.from(fileBuffer).toString("base64");

      attachments.push({
        filename: file.name,
        content: fileBase64,
        encoding: "base64",
        contentType: file.type || "application/octet-stream",
      });
    }

    // Send email using SMTP to all admin emails

    await transporter.sendMail({
      from: smtpFrom,
      to: process.env.ADMIN_EMAIL,
      subject: "CLEVIT ContactUs",
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ message: "Mail has been successfully sent!!!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending contact email:", error);

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
