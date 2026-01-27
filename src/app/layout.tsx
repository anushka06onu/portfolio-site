import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Fateha Hossain Anushka | Portfolio",
  description:
    "Portfolio of a CSE undergraduate exploring ML/AI, data science, and web development."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
