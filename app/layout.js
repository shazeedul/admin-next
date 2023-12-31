import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProviders } from "./Redux/provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by Syed Shazeedul Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>{children}</ReduxProviders>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
