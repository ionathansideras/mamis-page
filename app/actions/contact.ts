"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const preferredDate = formData.get("preferredDate") as string;
    const message = formData.get("message") as string;

    try {
        // Create transporter with SMTP credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL, // Your destination email
            subject: "New Contact Form Submission",
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Preferred Date:</strong> ${preferredDate}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return {
            success: true,
            message: "Thank you for your message! We will contact you soon.",
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message:
                "Sorry, there was an error sending your message. Please try again.",
        };
    }
}
