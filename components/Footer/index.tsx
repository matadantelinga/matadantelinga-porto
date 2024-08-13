"use client";
import { getGeneralInfo } from "@/lib/services/generalServices";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AskPrice } from "../AskPrice/AskPrice";
import { iGeneralInfo } from "@/lib/interfaces/igeneral";
import { LoaderSpinner } from "../Shared/LoaderSpinner";

export default function Footer() {
  const pathName = useSelectedLayoutSegment();

  const query = useQuery({
    queryKey: ["qGeneralInfo"],
    queryFn: getGeneralInfo,
  });

  if (query.isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const dataContent: iGeneralInfo = query?.data?.data.data.attributes;

  return (
    <>
      {pathName !== "author" && pathName !== "user" ? <AskPrice /> : null}
      <footer className="relative">
        <div className="bg-c-gray w-full min-h-150px px-5 pb-8 py-14">
          <div className="wrapper flex flex-wrap justify-between gap-5 [&_h4]:font-semibold  [&_h4]:mb-5">
            <div className="footer-column">
              <Link className="mb-3 block" href="/">
                <Image
                  src="/images/logo.png"
                  width={50}
                  height={50}
                  alt="image"
                />
              </Link>
              <div className="flex flex-col gap-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataContent.information,
                  }}
                ></div>
                <p>{dataContent.whatsapp}</p>
              </div>
              <div
                className="flex gap-2 mt-5 
                            [&_a]:bg-c-black2 [&_a]:rounded-full [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:text-white [&_a]:p-2
                            "
              >
                <Link href={dataContent.instagram} target="_blank">
                  <FaInstagram />
                </Link>
                <Link
                  href={`https://api.whatsapp.com/send?phone=${dataContent.whatsapp}&text=Halo%20Planet%20Dekor%2C%20saya%20ingin%20menanyakan%20beberapa%20hal%20terkait%20projek%20desain.`}
                  target="_blank"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
            <div className="footer-column">
              <h4>Links</h4>
              <ul className="[&_a]:block [&_a]:py-1">
                <li>
                  <Link href={dataContent.tokopedia} target="_blank">
                    Tokopedia
                  </Link>
                </li>
                <li>
                  <Link href={dataContent.shopee} target="_blank">
                    Shopee
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Planet Dekor</h4>
              <ul className="[&_a]:block [&_a]:py-1">
                <li>
                  <Link href="/location">Area Jangkauan</Link>
                </li>
                <li>
                  <Link href="/ask-price">Tanya Harga</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Kebijakan Privasi</Link>
                </li>
                <li>
                  <Link href="/terms-condition">Syarat & Ketentuan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#E2E2E2] py-3">
          <div className="wrapper">
            &copy; {moment().format("YYYY")} Planet Dekor
          </div>
        </div>
      </footer>
    </>
  );
}
