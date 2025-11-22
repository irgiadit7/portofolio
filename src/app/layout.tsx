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
    default: "Irgi Adit Pratama | Software Engineer & AI-Driven Product Innovation",
    template: "%s | Irgi Adit Pratama",
  },
  description:
    "Portfolio of Irgi Adit Pratama, a Software Engineer focused on AI-Driven Product Innovation. Building scalable, intelligent solutions with Next.js, React Native, and Robotics.",
     keywords: [
    "Irgi Adit Pratama",
    "Software Engineer",
    "AI-Driven Product Innovation",
    "Product Engineer",
    "AI Engineer",
    "Fullstack Developer",
    "Next.js",
    "React Native",
    "Robotics",
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
  metadataBase: new URL("https://portofolio-irgi.vercel.app/"), 
  openGraph: {
   title: "Irgi Adit Pratama | Software Engineer & AI-Driven Product Innovation",
    description:
      "Explore the portfolio of Irgi Adit Pratama, featuring engineering solutions in Web, Mobile, and AI-Driven Product Innovation.",
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
    title: "Irgi Adit Pratama | Software Engineer & AI-Driven Product Innovation",
    description:
      "Software Engineer focused on AI-Driven Product Innovation and scalable systems.",
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
