export const runtime = 'nodejs'
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataToSubmit = await req.json();
    const { name, email, phone, subject, message } = dataToSubmit;
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #009688;">📬 New Contact Us Message</h2>
        <p>You have received a new message via the Contact Us form. Here are the details:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;">👤 Name</td><td style="padding: 8px; border: 1px solid #ddd;">${
            name || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">📧 Email</td><td style="padding: 8px; border: 1px solid #ddd;">${
            email || "-"
          }</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">📞 Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${
              phone || "-"
            }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">ℹ️ Subject</td><td style="padding: 8px; border: 1px solid #ddd;">${
            subject || "-"
          }</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">✏️ Message</td><td style="padding: 8px; border: 1px solid #ddd;">${
              message || "-"
            }</td></tr>
        </table>
        </div>
    `;

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: subject || "🌍 New Contact Us Request",
      html,
    });

    // console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
