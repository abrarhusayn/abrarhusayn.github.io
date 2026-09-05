import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abrar (@abrarhusayn) — Full-Stack Engineer",
  description: "Crafting modern software with precision, speed, and clean systems design.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  authors: [{ name: "Abrar", url: "https://github.com/abrarhusayn" }],
  openGraph: {
    title: "Abrar (@abrarhusayn) — Full-Stack Engineer",
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
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
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
