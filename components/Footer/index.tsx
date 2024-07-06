import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Ask from "./Ask";

export default function Footer() {
  return (
    <div className="relative">
      <Ask />
      <div className="bg-c-gray w-full min-h-150px px-5 pb-8 py-14">
        <div className="wrapper flex justify-between gap-5 [&_h4]:font-semibold  [&_h4]:mb-5">
          <div>
            <Link className="mb-3 block" href="/">
              <Image
                src="/images/logo.png"
                width={50}
                height={50}
                alt="image"
              />
            </Link>
            <div className="flex flex-col gap-3">
              <p>Senin - Jumat</p>
              <p>09.00-18.00</p>
              <p>(021) 1234567890</p>
            </div>
            <div
              className="flex gap-2 mt-5 
                            [&_a]:bg-c-black2 [&_a]:rounded-full [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:text-white [&_a]:p-2
                            "
            >
              <Link href="/">
                <FaFacebookF />
              </Link>
              <Link href="/">
                <FaXTwitter />
              </Link>
              <Link href="/">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div>
            <h4>Portofolio</h4>
            <ul className="[&_a]:block [&_a]:py-1">
              <li>
                <Link href="/">Link</Link>
              </li>
              <li>
                <Link href="/">Link</Link>
              </li>
              <li>
                <Link href="/">Link</Link>
              </li>
              <li>
                <Link href="/">Link</Link>
              </li>
              <li>
                <Link href="/">Link</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Planet Dekor</h4>
            <ul className="[&_a]:block [&_a]:py-1">
              <li>
                <Link href="/">Area Jangkauan</Link>
              </li>
              <li>
                <Link href="/">Tanya Harga</Link>
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
    </div>
  );
}
