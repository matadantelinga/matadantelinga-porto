import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SessionWrapper from "@/components/SessionWrapper";
import Basecontent from "@/components/basecontent";
import { Inter } from "next/font/google";
import "./globals.scss";

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
          <Basecontent>
            <Footer />
          </Basecontent>
        </body>
      </SessionWrapper>
    </html>
  );
}
