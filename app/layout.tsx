import Header from "@/components/Header";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
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
      <body className={inter.className} suppressHydrationWarning={true}>
        <SessionWrapper>
          <Header />
        </SessionWrapper>
        {children}
        <Footer />
      </body>
    </html>
  );
}
