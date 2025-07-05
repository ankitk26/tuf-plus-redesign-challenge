import { ChevronsDownIcon, TargetIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex gap-8 items-center flex-col border p-8 rounded-lg">
      <div className="flex items-center font-mono gap-2 rounded-full text-xs border px-4 py-2.5">
        <TargetIcon className="size-4" />
        Crafted by Top Engineers
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-semibold">Upskill yourself with just</h1>
        <h1 className="text-5xl font-semibold text-primary">
          ONE SUBSCRIPTION
        </h1>
      </div>
      <p className="text-muted-foreground text-center font-mono text-sm">
        The most trusted platform for engineers to upskill and crack tech
        interviews in the least time
      </p>

      <div className="flex items-center gap-4">
        <Button variant="outline">
          Explore Offerings <ChevronsDownIcon />
        </Button>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
}
