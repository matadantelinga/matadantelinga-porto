import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SessionWrapper from "@/components/SessionWrapper";
import Basecontent from "@/components/basecontent";
import { Inter } from "next/font/google";
import "./globals.scss";
import ModalWrapper from "@/components/Shared/ModalWrapper";
import { MobileNav } from "@/components/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matadantelinga",
  description: "Your brand playmates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionWrapper>
        <Head>
          <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
          <Link rel="preconnect" href="https://fonts.gstatic.com"></Link>
          <link rel="icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <Link
            href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></Link>
        </Head>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          {children}

          <MobileNav />
          <Basecontent>
            <Footer />
            <ModalWrapper />
            <ToastContainer />
          </Basecontent>
        </body>
      </SessionWrapper>
    </html>
  );
}
