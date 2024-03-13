import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { BsThreeDotsVertical, BsPlugFill } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const PostCustomCard = () => {
  return (
    <Card className="grow max-w-[400px] shadow-sm">
      <CardHeader className="flex flex-row justify-start items-center">
        <div className="flex justify-start items-center w-full">
          <Image
            className="rounded mr-4"
            src="/images/samplecard.jpg"
            height={100}
            width={100}
            alt="card"
          />
          <div className="flex flex-col justify-between items-start">
            <CardTitle>Post Title</CardTitle>
            <div className="flex justify-start items-center flex-wrap gap-2 mt-2">
              <Badge className="bg-blue-500 border hover:bg-blue-500 border-blue-500 rounded-sm uppercase cursor-pointer">
                Channel
              </Badge>
              <Badge className="bg-orange-500 hover:bg-orange-500 border border-orange-500 rounded-sm uppercase cursor-pointer">
                Finance
              </Badge>
            </div>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <BsThreeDotsVertical
              size={25}
              className=" hover:text-slate-400 duration-300"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Get Link</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 hover:!text-red-500">
              Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <Separator />
      <CardContent className="grow">
        <div className="flex flex-wrap justify-start items-center mt-4 gap-4">
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
        <p className="my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>
      </CardContent>
      <CardFooter className="flex-col">
        <Link
          href="/"
          className="bg-[#0a3244] hover:text-[#0a3244] text-center hover:bg-transparent border border-[#0a3244] text-white px-5 py-2 rounded-full w-48 font-semibold flex justify-center items-center duration-100"
        >
          <BsPlugFill size={20} />
          Join Community
        </Link>
        <div className="flex justify-end items-center mt-4 w-full">
          <p>
            <span className="font-semibold">Boosted: </span>just now
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCustomCard;
