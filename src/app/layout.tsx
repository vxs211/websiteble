import type { Metadata } from "next";
import "./globals.css";
import PageRevealLoader from "../components/effects/PageRevealLoader";

export const metadata: Metadata = {
  title: "Websiteble",
  description: "Design system foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PageRevealLoader />
        {children}
      </body>
    </html>
  );
}
