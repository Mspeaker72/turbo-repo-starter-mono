import type { Metadata } from "next";;
import "./globals.css";

export const metadata: Metadata = {
  title: "rapid-starter-ui",
  description: "Quick turbo starter dev tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body`}>
        {children}
      </body>
    </html>
  );
}
