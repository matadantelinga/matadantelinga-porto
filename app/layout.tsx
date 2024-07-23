import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.scss";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Planet Dekor",
  description: "Interior & Design Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          {children}
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
