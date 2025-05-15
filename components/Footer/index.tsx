"use client";
import moment from "moment";

export default function Footer() {
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
