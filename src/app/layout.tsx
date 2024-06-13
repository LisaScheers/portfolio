import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { CSPostHogProvider } from "@/components/PosthogProvider";

export const metadata = {
  title: "Lisa's Portfolio",
  description: "Lisa's Portfolio",
  openGraph: {
    title: "Lisa's Portfolio",
    description: "Lisa's Portfolio",
    type: "website",
    locale: "en_US",
    url: "https://sheers.tech/",
    siteName: "Lisa's Portfolio",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    images: [{ url: "/og-image.png" }],
    site: "@LisaSheers",
    title: "Lisa's Portfolio",
    description: "Lisa's Portfolio",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CSPostHogProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>{children}</body>
      </html>
    </CSPostHogProvider>
  );
}
