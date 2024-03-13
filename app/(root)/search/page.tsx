import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PostCustomCard from "@/components/shared/PostCustomCard";

export default function Page() {
  return (
    <section className="w-full min-h-screen">
      <div className="wrapper flex flex-col  justify-start items-center">
        <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
          <Input type="text" placeholder="Whats on your mind" />
          <Button type="submit">Subscribe</Button>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-4 my-4">
          <PostCustomCard />
          <PostCustomCard />
          <PostCustomCard />
        </div>
      </div>
    </section>
  );
}
