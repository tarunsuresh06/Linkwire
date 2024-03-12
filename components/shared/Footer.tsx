"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const CustomLink = ({ href, title, className = "" }: any) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${className} relative group font-normal text-lg`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 
            ${path === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="min-h-[200px] w-full py-10">
      <div className="wrapper flex justify-between items-center">
        <div className="w-1/2">
          <Link href="/" className="text-4xl font-bold text-white">
            Linkwire.
          </Link>
          <p className="mt-4">&copy; {new Date().getFullYear()} Linkwire.</p>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-start md:flex-row md:justify-start flex-wrap">
            <CustomLink href="/about" className="m-2" title="About" />
            <CustomLink href="/about" className="m-2" title="Privacy Policy" />
            <CustomLink href="/about" className="m-2" title="Support Chat" />
            <CustomLink href="/about" className="m-2" title="Guide Lines" />
          </div>
          <div className="flex justify-start items-center m-2 gap-4">
            <Link href="/instagram">
              <FaInstagram size={25} className="hover:scale-125 duration-300" />
            </Link>
            <Link href="/twitter">
              <BsTwitterX size={25} className="hover:scale-125 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
