import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

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
    <html lang="en" className="dark scroll-smooth w-full">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className="min-h-screen w-full bg-black text-[#f5f5f5] antialiased relative selection:bg-white selection:text-black">
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YT1SC9NEFL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YT1SC9NEFL');
          `}
        </Script>

        {/* Ambient Top Light Beam */}
        <div className="linear-glow" />
        <div className="fixed inset-0 linear-grid pointer-events-none -z-10" />

        <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-16 box-border">
          {children}
        </div>
      </body>
    </html>
  );
}
