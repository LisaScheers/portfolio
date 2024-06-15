import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { CSPostHogProvider } from "@/components/PosthogProvider";

export const metadata = {
  title: "Lisa's Portfolio",
  description: "Lisa's Portfolio",
  metadataBase: new URL("https://sheers.tech/"),
  openGraph: {
    title: "Lisa's Portfolio",
    description: "Welcome to Lisa's Portfolio!",
    type: "website",
    locale: "en_US",
    url: "https://sheers.tech/",
    siteName: "Lisa Sheers",
    images: [{ url: "/profile.png" }],
  },
  twitter: {
    images: [{ url: "/profile.png" }],
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
    <html lang="en" className={`${GeistSans.variable}`}>
      <CSPostHogProvider>
        <body className="dark:dark">{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
