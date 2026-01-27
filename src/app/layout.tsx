import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata = {
  title: "Fateha Hossain Anushka | Portfolio",
  description:
    "CSE undergraduate (4th year) exploring ML/AI, data science, and web development. Projects, leadership, and contact."
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} bg-neutral-50 text-neutral-900 font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
