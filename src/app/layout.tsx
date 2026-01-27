import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Fateha Hossain Anushka | Portfolio",
  description:
    "CSE undergraduate (4th year) exploring ML/AI, data science, and web development. Projects, leadership, and contact."
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
