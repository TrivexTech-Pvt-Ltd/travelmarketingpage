import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { dataToSubmit } = await req.json();
    const {
      destination,
      date,
      firstName,
      lastName,
      email,
      phone,
      country,
      adults,
      children,
      infants,
      message,
    } = dataToSubmit;

    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #009688;">🌍 New Travel Inquiry</h2>
        <p>Someone just submitted the travel form. Here are the details:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;">🗺️ Destination</td><td style="padding: 8px; border: 1px solid #ddd;">${
            destination || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">📅 Departure Date</td><td style="padding: 8px; border: 1px solid #ddd;">${
            date || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">👤 First Name</td><td style="padding: 8px; border: 1px solid #ddd;">${
            firstName || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">👤 Last Name</td><td style="padding: 8px; border: 1px solid #ddd;">${
            lastName || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">📧 Email</td><td style="padding: 8px; border: 1px solid #ddd;">${
            email || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">📞 Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${
            phone || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">🌎 Country</td><td style="padding: 8px; border: 1px solid #ddd;">${
            country || "-"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">🧍 Adults</td><td style="padding: 8px; border: 1px solid #ddd;">${
            adults || "0"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">👦 Children</td><td style="padding: 8px; border: 1px solid #ddd;">${
            children || "0"
          }</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;">👶 Infants</td><td style="padding: 8px; border: 1px solid #ddd;">${
            infants || "0"
          }</td></tr>
        </table>

        ${
          message
            ? `<div style="margin-top: 20px;">
                <h4 style="color: #009688;">💬 Special Request</h4>
                <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
                  ${message}
                </p>
              </div>`
            : ""
        }

        <p style="margin-top: 20px; color: #777;">Sent automatically from your travel inquiry form ✈️</p>
      </div>
    `;

    console.log(process.env.EMAIL_TO);
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: process.env.EMAIL_SUBJECT || "🌍 New Travel Inquiry Received",
      html,
    });

    console.log("Email sent successfully:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
