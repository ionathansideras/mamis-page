"use server";

import nodemailer from "nodemailer";
import { buildContactEmailHtml } from "@/buildContactEmailHtml";

// --- Utility functions ---
function sanitizeInput(input: string | null): string {
    if (!input) return "";
    return input
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/[<>'"&]/g, (match) => {
            const escapeMap: { [key: string]: string } = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "&": "&amp;",
            };
            return escapeMap[match] || match;
        })
        .trim();
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
    const cleanPhone = phone.replace(/\D/g, "");
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
}

// --- Server action ---
export async function submitContactForm(formData: FormData) {
    try {
        const rawEmail = formData.get("email") as string;
        const rawPhone = formData.get("phone") as string;
        const rawFirstName = formData.get("firstName") as string;
        const rawLastName = formData.get("lastName") as string;
        const rawPreferredDate = formData.get("preferredDate") as string;
        const rawMessage = formData.get("message") as string;

        if (!rawEmail?.trim())
            return { success: false, message: "Būtinas el." };
        if (!rawPhone?.trim())
            return {
                success: false,
                message: "Būtina nurodyti telefono numerį.",
            };

        const firstName = sanitizeInput(rawFirstName);
        const lastName = sanitizeInput(rawLastName);
        const email = sanitizeInput(rawEmail);
        const phone = sanitizeInput(rawPhone);
        const preferredDate = sanitizeInput(rawPreferredDate);
        const rawMessageSanitized = sanitizeInput(rawMessage);

        const message =
            rawMessageSanitized.length > 500
                ? rawMessageSanitized.substring(0, 500)
                : rawMessageSanitized;

        if (!validateEmail(email))
            return {
                success: false,
                message: "Įveskite galiojantį el. pašto adresą.",
            };
        if (!validatePhone(phone))
            return {
                success: false,
                message: "Įveskite galiojantį telefono numerį.",
            };
        if (firstName.length > 50)
            return {
                success: false,
                message: "Vardas turi būti trumpesnis nei 50 simbolių.",
            };
        if (lastName.length > 50)
            return {
                success: false,
                message: "Pavardė turi būti trumpesnė nei 50 simbolių.",
            };

        // --- Configure Nodemailer ---
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.GOOGLE_APP_KEY,
            },
        });

        // --- Send the actual email ---
        await transporter.sendMail({
            from: `"Svetainės kontaktai" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: "📩 Nauja žinutė iš kontaktų formos 🎉",
            html: buildContactEmailHtml({
                firstName,
                lastName,
                email,
                phone,
                preferredDate,
                message,
            }),
        });

        return {
            success: true,
            message: "Dėkojame už jūsų žinutę! Netrukus su jumis susisieksime.",
        };
    } catch (error) {
        console.error("Error sending contact form email:", error);
        return {
            success: false,
            message:
                "Siunčiant jūsų žinutę kilo problemų. Bandykite dar kartą vėliau.",
        };
    }
}
