import Image from "next/image";
import Link from "next/link";

import { BsThreeDotsVertical, BsPlugFill } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";

export default function page() {
  return (
    <section className="w-full min-h-screen bg-slate-50 pt-24">
      <div className="wrapper text-black flex flex-col justify-start items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Image
            src="/images/samplecard.jpg"
            className="rounded-lg"
            width={200}
            height={200}
            alt="card"
          />
          <div>
            <h1 className="text-4xl font-semibold mb-4">Post Title</h1>
            <h1 className="mb-4">
              Type:{" "}
              <Badge className="bg-blue-500/30 border hover:bg-blue-500/30 border-blue-500 text-blue-800 rounded-sm uppercase cursor-pointer">
                Channel
              </Badge>
            </h1>
            <h1>
              Catagory:{" "}
              <Badge className="bg-orange-500/30 hover:bg-orange-500/30 border border-orange-500 text-orange-800 rounded-sm uppercase cursor-pointer">
                Finance
              </Badge>
            </h1>
          </div>
          
        </div>
        <div className="max-w-[600px] my-5">
        <h1 className="font-semibold text-lg mb-2">Tags</h1>
            <div className="flex flex-wrap justify-start items-center mb-8 gap-4">
              <Badge className="border border-cyan-900 bg-transparent hover:bg-transparent text-[#0A1A44] rounded-md">
                Tag-1
              </Badge>
              <Badge className="border border-cyan-900 bg-transparent hover:bg-transparent text-[#0A1A44] rounded-md">
                Tag-2
              </Badge>
              <Badge className="border border-cyan-900 bg-transparent hover:bg-transparent text-[#0A1A44] rounded-md">
                Tag-3
              </Badge>
              <Badge className="border border-cyan-900 bg-transparent hover:bg-transparent text-[#0A1A44] rounded-md">
                Tag-4
              </Badge>
              <Badge className="border border-cyan-900 bg-transparent hover:bg-transparent text-[#0A1A44] rounded-md">
                Tag-5
              </Badge>
            </div>
            <h1 className="font-semibold text-lg mb-2">Description</h1>
            <span className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
      </div>
      <Link
        className="fixed w-full bottom-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 text-2xl flex justify-center items-center gap-2  z-[1] font-medium"
        href="#"
      >
        <BsPlugFill size={20} />
        Join this Group
      </Link>
    </section>
  );
}
