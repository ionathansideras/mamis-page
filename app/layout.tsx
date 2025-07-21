import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Irinos masažo terapija - Physical Therapy | Contact Expert PT Care in Healthville",
    description:
        "Contact Irinos masažo terapija, DPT for expert physical therapy services. Specializing in orthopedic rehabilitation, sports injuries, chronic pain management, and post-surgical recovery in Healthville.",
    keywords:
        "physical therapy, physical therapist, orthopedic rehabilitation, sports injury, chronic pain, post-surgical recovery, manual therapy, Healthville, Irinos masažo terapija",
    authors: [{ name: "Irinos masažo terapija" }],
    creator: "Irinos masažo terapija Physical Therapy",
    publisher: "Irinos masažo terapija Physical Therapy",
    robots: "index, follow",
    openGraph: {
        title: "Irinos masažo terapija - Physical Therapy | Expert PT Care",
        description:
            "Expert physical therapy services specializing in orthopedic rehabilitation, sports injuries, and chronic pain management.",
        url: "https://sarahmitchellpt.com",
        siteName: "Irinos masažo terapija Physical Therapy",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Irinos masažo terapija - Physical Therapy",
        description:
            "Expert physical therapy services specializing in orthopedic rehabilitation and sports injuries.",
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#f43f5e",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://sarahmitchellpt.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MedicalBusiness",
                            name: "Irinos masažo terapija Physical Therapy",
                            description:
                                "Expert physical therapy services specializing in orthopedic rehabilitation, sports injuries, and chronic pain management.",
                            url: "https://sarahmitchellpt.com",
                            telephone: "(555) 123-4567",
                            email: "info@sarahmitchellpt.com",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "123 Wellness Drive, Suite 200",
                                addressLocality: "Healthville",
                                addressRegion: "ST",
                                postalCode: "12345",
                                addressCountry: "US",
                            },
                            openingHours: [
                                "Mo-Fr 08:00-18:00",
                                "Sa 09:00-14:00",
                            ],
                            priceRange: "$100-$150",
                            medicalSpecialty: "Physical Therapy",
                            founder: {
                                "@type": "Person",
                                name: "Irinos masažo terapija",
                                jobTitle: "Doctor of Physical Therapy",
                                description:
                                    "Licensed physical therapist with over 12 years of experience specializing in orthopedic rehabilitation and sports injuries.",
                            },
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Physical Therapy Services",
                                itemListElement: [
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Initial Evaluation",
                                            description:
                                                "Comprehensive assessment and personalized treatment plan",
                                        },
                                        price: "150",
                                        priceCurrency: "USD",
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Manual Therapy",
                                            description:
                                                "Joint mobilization and soft tissue massage",
                                        },
                                        price: "120",
                                        priceCurrency: "USD",
                                    },
                                ],
                            },
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
