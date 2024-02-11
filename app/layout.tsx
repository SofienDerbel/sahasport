import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";


export const metadata: Metadata = {
  title: "SahaSport",
  description: "SahaSport reservation aalina wil grinta aalik",
};

const font = Nunito({
  subsets: ["latin"]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider></ToasterProvider>
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}</body>
    </html>
  );
}
