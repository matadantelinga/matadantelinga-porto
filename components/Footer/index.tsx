"use client";
import { iGeneralInfo } from "@/lib/interfaces/igeneral";
import { getGeneralInfo } from "@/lib/services/generalServices";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
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
      <footer className="relative">
        <div className="bg-c-blue w-full min-h-150px px-5 pb-8 py-14">
          <div className="wrapper flex flex-wrap justify-between gap-5 [&_h4]:font-semibold  [&_h4]:mb-5"></div>
        </div>
        <div className="bg-[#E2E2E2] py-3">
          <div className="wrapper">
            &copy; {moment().format("YYYY")} matadantelinga
          </div>
        </div>
      </footer>
    </>
  );
}
