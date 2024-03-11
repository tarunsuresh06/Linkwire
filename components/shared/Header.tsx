"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { GiHamburgerMenu } from "react-icons/gi";

import { headerLinks } from "@/constants";

const CustomLink = ({ href, title, className = "" }: any) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${className} relative group font-medium text-lg`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 
          ${path === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="w-full bg-cyan-950/50 z-50">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold">
          Linkwire.
        </Link>
        <nav className="hidden md:block">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/search" title="Search" className="mx-4" />
          <CustomLink href="/posts" title="Posts" className="ml-4" />
        </nav>
        <div className="flex justify-center items-center">
          <Link
            href="/signin"
            className="bg-white hover:bg-[#0a3244] hover:text-white text-[#0A1A44] px-5 py-2 rounded-lg hidden md:inline-block font-semibold duration-100"
          >
            Sign In
          </Link>
          <Sheet>
            <SheetTrigger className="md:hidden hover:scale-110 duration-100">
              <GiHamburgerMenu size={30} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-2xl text-left">
                  Linkwire.
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col justify-center items-start text-primary mt-4">
                {headerLinks.map((link) => (
                  <Link
                    key={link.route}
                    href={link.route}
                    className="w-full hover:bg-gray-100 my-1 text-lg p-2 rounded-md duration-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Separator />
              <div className="mt-4 w-full border border-solid">
                <Link
                  href="/signin"
                  className="bg-blue-400 hover:bg-blue-500 text-white rounded py-2 px-4 block text-center font-medium"
                >
                  Sign In
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
