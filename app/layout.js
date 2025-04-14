import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopper",
  description: "E-commerce Application",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
         <StoreProvider>
          <Navbar />
          {children}
          <Footer />
          </StoreProvider>
        </body>
    </html>
  );
}
