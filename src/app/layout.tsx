import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const font = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Pastelería American Roller - Pastelería americana en pamplona",
  description: "AMERICAN ROLLER PASTELERIA 🇺🇸 🍩| Pastelería americana casera 🍪| Próxima apertura en Pamplona",
  keywords: ["AMERICAN ROLLER PASTELERIA", "Pasteleria", "Casera", "Pastelería Casera", "Pablona"],
  icons: [{ href: "./favicon.ico", url: "./icon.ico" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
