import type { Metadata } from "next";
import "./globals.css";


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
        
        {children}
      </body>
    </html>
  );
}
