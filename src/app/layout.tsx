import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abrar — Full-Stack Engineer",
  description: "Crafting modern software with precision, speed, and clean systems design.",
  authors: [{ name: "Abrar" }],
  openGraph: {
    title: "Abrar — Full-Stack Engineer",
    description: "Modern web software, distributed backends, and applied AI tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-black text-[#f5f5f5] antialiased relative selection:bg-white selection:text-black">
        {/* Ambient Top Light Beam */}
        <div className="linear-glow" />
        <div className="fixed inset-0 linear-grid pointer-events-none -z-10" />

        <div className="relative max-w-3xl mx-auto px-6 py-12 sm:py-20">
          {children}
        </div>
      </body>
    </html>
  );
}
