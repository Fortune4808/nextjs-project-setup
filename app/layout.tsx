import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "../styles/globals.css";
import AOSProvider from "@/components/aos/aosprovider";

const bodyFont = Inter({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const titleFont = Poppins({
    subsets: ['latin'],
    weight: ['600'],
    display: 'swap',
    variable: '--font-title',
});

export const metadata: Metadata = {
    title: {
        default: "My Portfolio | Full-Stack Developer",
        template: "%s | My Portfolio",
    },
    description: "Building modern web experiences with Next.js and TypeScript.",
    openGraph: {
        title: "My Portfolio | Full-Stack Developer",
        description: "Explore my work, skills, and projects.",
        url: "https://myportfolio.com",
        siteName: "My Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "My Portfolio",
        description: "Building modern web experiences with Next.js.",
        creator: "@yourhandle",
        images: ["/og-image.png"],
    },
    // viewport: {
    //     width: "device-width",
    //     initialScale: 1.0,
    //     maximumScale: 1.0,
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${bodyFont.className} ${titleFont.variable} antialiased`}
            >
                <AOSProvider>{children}</AOSProvider>
            </body>
        </html>
    );
}
