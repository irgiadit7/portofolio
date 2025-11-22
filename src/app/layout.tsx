import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Irgi Adit Pratama | Fullstack Developer & AI Enthusiast",
    template: "%s | Irgi Adit Pratama",
  },
  description:
    "Portfolio of Irgi Adit Pratama, a Fullstack Developer specializing in Next.js, React Native, AI Integration, and Robotics. Based in Indonesia.",
  keywords: [
    "Irgi Adit Pratama",
    "Fullstack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React Native",
    "AI Engineer",
    "Robotics",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Irgi Adit Pratama", url: "https://github.com/irgiadit7" }],
  creator: "Irgi Adit Pratama",
  publisher: "Irgi Adit Pratama",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portofolio-c8nkbfsxo-irgis-projects-642c06d1.vercel.app"), 
  openGraph: {
    title: "Irgi Adit Pratama | Fullstack Developer",
    description:
      "Explore the portfolio of Irgi Adit Pratama, featuring projects in Web Development, Mobile Apps, and AI solutions.",
    url: "/",
    siteName: "Irgi Adit Pratama Portfolio",
    images: [
      {
        url: "/assets/coding-pov.png",
        width: 1200,
        height: 630,
        alt: "Irgi Adit Pratama Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irgi Adit Pratama | Fullstack Developer",
    description:
      "Fullstack Developer & AI Enthusiast. Check out my latest projects and skills.",
    images: ["/assets/coding-pov.png"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
      <NextTopLoader 
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
      </body>
    </html>
  );
}