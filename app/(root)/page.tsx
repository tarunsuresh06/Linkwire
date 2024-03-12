import PostCustomCard from "@/components/shared/PostCustomCard";
import Image from "next/image";
import Link from "next/link";

import { FaSearch, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="wrapper w-full min-h-screen flex justify-center items-center">
        <div className="min-h-full md:w-1/2 w-full flex flex-col justify-center items-center z-10">
          <h1 className="text-6xl font-bold mb-8">
            We Helps to Discover New Community across the globe.
          </h1>
          <Link
            href="/signin"
            className="bg-[#00C4CC] hover:bg-[#0a3244] hover:text-white flex justify-center items-center text-[#0A1A44] px-6 py-4 w-56 text-center text-xl self-start rounded-full font-semibold duration-300"
          >
            <FaSearch size={20} className="mr-2 mt-1" />
            Discover
          </Link>
        </div>
        <div className="w-1/2 md:flex justify-center items-center hidden">
          <Image
            src="/images/iphone.png"
            alt="iphone"
            width={300}
            height={200}
          />
        </div>
        <Image
          className="absolute bottom-0 right-10 rotate-12 blur-md md:hidden"
          src="/images/iphone.png"
          alt="iphone"
          width={300}
          height={200}
        />
      </section>
      <section className="w-full min-h-screen bg-white">
        <div className="wrapper w-full min-h-screen">
          <h1 className="text-[#0A1A44] text-center text-4xl font-semibold uppercase my-4">
            Recently Boosted Posts
          </h1>
          <div className="w-full flex justify-center items-center flex-wrap gap-4 my-4">
            <PostCustomCard />
            <PostCustomCard />
            <PostCustomCard />
            <PostCustomCard />
            <PostCustomCard />
            <PostCustomCard />
          </div>
          <div className="flex justify-center items-center w-full my-8">
            <Link
              href="/"
              className="bg-[#0a3244] hover:text-[#0a3244] text-center 
            hover:bg-transparent border border-[#0a3244] text-white px-5 
            py-3 rounded-lg font-semibold duration-100 flex justify-center items-center"
            >
              <FaGlobe size={20} className="mr-4" />
              Discover More Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
