import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Provider from "@/components/provider";

const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "N8N",
  description: "N8N",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/logo.png" />
      <body className={`antialiased ${sora.className} font-sora`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
