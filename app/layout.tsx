// app/layout.tsx
'use client'
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { usePathname } from 'next/navigation'

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the current pathname
  const pathname = usePathname();
  
  // Check if we're on the landing page route
  const isLandingPage = pathname?.startsWith('/landingpage');

  return (
    <html lang="en">
      <body className={manrope.variable}>
        {!isLandingPage && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}