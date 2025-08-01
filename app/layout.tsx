import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Irinos masažo terapija – Atsipalaiduok su profesionaliu masažu",
    description:
        "Masažo terapija Vainotiškiuose (Kėdainių r., Jaunimo g. 7) – profesionalūs klasikiniai, atpalaiduojantys ir anticeliulitiniai masažai gerinančiai savijautai.",
    keywords:
        "Irinos masažo terapija, masažas Kaunas, masažas Kėdainiai, masažas Kauno raj., atpalaiduojantis masažas, anticeliulitinis masažas, nugaros masažas, kaklo masažas, Vainotiškiai, masažo paslaugos",
    authors: [{ name: "Irinos masažo terapija" }],
    creator: "Irinos masažo terapija",
    publisher: "Irinos masažo terapija",
    robots: "index, follow",
    openGraph: {
        title: "Irinos masažo terapija – Atsipalaiduok su profesionaliu masažu",
        description:
            "Masažo terapija Vainotiškiuose (Kėdainių r., Jaunimo g. 7) – profesionalūs klasikiniai, atpalaiduojantys ir anticeliulitiniai masažai gerinančiai savijautai.",
        url: "https://irinos-masazo-terapija.vercel.app/",
        siteName: "Irinos masažo terapija",
        type: "website",
        locale: "lt_LT",
        // jei turite OG paveikslėlį, pridėkite:
        images: [
            {
                url: "https://irinos-masazo-terapija.vercel.app/logo.webp",
                alt: "Irinos masažo terapija – Atsipalaiduok su profesionaliu masažu",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Irinos masažo terapija – Atsipalaiduok su profesionaliu masažu",
        description:
            "Masažo terapija Vainotiškiuose (Kėdainių r., Jaunimo g. 7) – profesionalūs klasikiniai, atpalaiduojantys ir anticeliulitiniai masažai gerinančiai savijautai.",
        // jei turite Twitter paveikslėlį, pridėkite:
        images: "https://irinos-masazo-terapija.vercel.app/logo.webp",
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
                <meta
                    name="google-site-verification"
                    content="0yW0VsGTutrgR99zdG5iLdKm0uggv2YgpfCJAr-K1mo"
                />
                <link
                    rel="canonical"
                    href="https://irinos-masazo-terapija.vercel.app/"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HealthAndBeautyBusiness",
                            name: "Irinos masažo terapija",
                            description:
                                "Masažo terapija Vainotiškiuose (Kėdainių r., Jaunimo g. 7) – profesionalūs klasikiniai, atpalaiduojantys ir anticeliulitiniai masažai gerinančiai savijautai.",
                            url: "https://irinos-masazo-terapija.vercel.app/",
                            telephone: "+37069987387",
                            email: "irinaul@gmail.com",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Jaunimo g. 7",
                                addressLocality: "Vainotiškių k., Kėdainių r.",
                                addressCountry: "LT",
                            },
                            areaServed: [
                                {
                                    "@type": "City",
                                    name: "Kaunas",
                                },
                                {
                                    "@type": "City",
                                    name: "Kėdainiai",
                                },
                                {
                                    "@type": "Place",
                                    name: "Vainotiškiai",
                                },
                            ],
                            priceRange: "€",
                            image: "https://irinos-masazo-terapija.vercel.app/logo.webp",
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Masažų katalogas",
                                itemListElement: [
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Klasikinis nugaros masažas",
                                            description:
                                                "30 minučių klasikinio masažo nugarai",
                                        },
                                        price: "15",
                                        priceCurrency: "EUR",
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Kaklo ir pečių masažas",
                                            description:
                                                "30 minučių kaklo ir pečių masažo atpalaidavimui",
                                        },
                                        price: "15",
                                        priceCurrency: "EUR",
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Klasikinis viso kūno masažas",
                                            description:
                                                "90 minučių klasikinio viso kūno masažo",
                                        },
                                        price: "30",
                                        priceCurrency: "EUR",
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Atpalaiduojantis viso kūno masažas",
                                            description:
                                                "90 minučių atpalaiduojančio viso kūno masažo",
                                        },
                                        price: "30",
                                        priceCurrency: "EUR",
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Anticeliulitinis masažas",
                                            description:
                                                "30 minučių anticeliulitinio masažo kūno linijų gerinimui",
                                        },
                                        price: "20",
                                        priceCurrency: "EUR",
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Kojų masažas",
                                            description:
                                                "40 minučių kojų masažo",
                                        },
                                        price: "20",
                                        priceCurrency: "EUR",
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
