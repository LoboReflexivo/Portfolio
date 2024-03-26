import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dario",
  description: "Dario's web portfolios",
};

export default function RootLayout({ children }) {
  const body = "body";
  return (
    <html lang="en" className="container">
      <link rel="icon" href="/favicon_wolf.ico" />
      <body className={`${inter.className} ${body}`}>{children}</body>
    </html>
  );
}
