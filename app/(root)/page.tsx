import PostCustomCard from "@/components/shared/PostCustomCard";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="wrapper w-full min-h-screen flex flex-col justify-center items-start md:flex-row md:items-center text-white">
        <div className="min-h-full w-full flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold mb-8">
            We Helps to Discover New Community across the globe.
          </h1>
          <Link
            href="#recentlyBoosted"
            className="bg-[#0a3244] hover:bg-transparent border border-[#0a3244] flex justify-center items-center hover:text-[#0A1A44] px-6 py-4 w-56 text-center text-xl self-start rounded-full font-semibold duration-300"
          >
            <FaSearch size={20} className="mr-2 mt-1" />
            Discover
          </Link>
        </div>
        <div className="w-full">
          <Image src="/images/hero.svg" alt="iphone" width={500} height={200} />
        </div>
      </section>
      <section id="recentlyBoosted" className="w-full min-h-screen bg-white">
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
