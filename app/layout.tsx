import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Container from "@/components/ui/container";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Roboto({ subsets: ["cyrillic"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Fabrify Store",
  description: "Next generation ecommerce shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Container>
          <ToastProvider/>
          <ModalProvider/>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
