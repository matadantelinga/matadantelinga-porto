"use client";
import moment from "moment";

export default function Footer() {
  return (
    <>
      <footer className="relative">
        <div className="bg-[#E2E2E2] py-6">
          <div className="wrapper">
            &copy; {moment().format("YYYY")} matadantelinga, made with ❤️ and a
            cup of ☕
          </div>
        </div>
      </footer>
    </>
  );
}
