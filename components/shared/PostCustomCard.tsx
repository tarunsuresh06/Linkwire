import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { BsThreeDotsVertical } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const PostCustomCard = () => {
  return (
    <Card className="grow max-w-[400px] min-h-[400px]">
      <CardHeader className="flex flex-row justify-start items-center">
        <div className="flex justify-start items-center w-full">
          <Image
            className="rounded mr-4"
            src="/images/samplecard.jpg"
            height={80}
            width={80}
            alt="card"
          />
          <div className="flex flex-col justify-between items-start">
            <CardTitle>Post Title</CardTitle>
            <Badge className="bg-[#00C4CC] hover:bg-[#00C4CC] mt-2">
              Catagory
            </Badge>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <BsThreeDotsVertical size={25} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Get Link</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 hover:!text-red-500">Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <Separator />
      <CardContent>
        <p className="my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages.
        </p>
      </CardContent>
      <CardFooter className="flex-col">
        <Link href="/" className="bg-[#0a3244] hover:text-[#0a3244] text-center hover:bg-transparent border border-[#0a3244] text-white px-5 py-2 rounded-full w-48 font-semibold duration-100">Join Community</Link>
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
