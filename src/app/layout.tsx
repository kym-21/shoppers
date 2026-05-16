
import type { Metadata } from "next";

// @ts-expect-error - Next.js handles global CSS imports.
import "./globals.css";
import Provider from "@/Provider";

export const metadata: Metadata = {
  title: "Shoppers | Your Ultimate Shopping Destination",
  description: "10 mins grocery delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-gradient-to-b from-green-200 to-white">
        
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
