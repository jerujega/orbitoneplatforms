"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
        return { error: "Mailing service is not configured yet. Please add BREVO_API_KEY to your .env file." };
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!message || !name || !phone) {
        return { error: "Please provide your name, phone number, and a message." };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "a47710001@smtp-brevo.com",
                pass: apiKey, // Brevo SMTP password is the API key in most cases for v3
            },
        });

        const mailOptions = {
            from: "OrbitOne Contact Form <admin@orbitoneplatforms.com>",
            to: "admin@orbitoneplatforms.com",
            subject: `New Contact Request from ${name}`,
            html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);

        return { success: true, data: info };
    } catch (err: unknown) {
        console.error("Failed to send email:", err);
        return { error: "Failed to send the email. Please check your SMTP configuration." };
    }
}
