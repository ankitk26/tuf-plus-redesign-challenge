import { ChevronsDownIcon, TargetIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex gap-6 lg:gap-8 items-center flex-col border p-6 lg:p-8 rounded-lg">
      {/* Badge */}
      <div className="flex items-center font-mono gap-2 rounded-full text-xs lg:text-sm border px-3 py-2 lg:px-4 lg:py-2.5">
        <TargetIcon className="size-3 lg:size-4" />
        <span className="whitespace-nowrap">Crafted by Top Engineers</span>
      </div>

      {/* Main Heading */}
      <div className="flex flex-col gap-2 lg:gap-3 items-center text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
          Upskill yourself with just
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary leading-tight">
          ONE SUBSCRIPTION
        </h1>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-center font-mono text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed px-4">
        The most trusted platform for engineers to upskill and crack tech
        interviews in the least time
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
        <Button
          variant="outline"
          className="w-full sm:w-auto gap-2 text-sm lg:text-base bg-transparent"
        >
          Explore Offerings
          <ChevronsDownIcon className="h-4 w-4" />
        </Button>
        <Button className="w-full sm:w-auto text-sm lg:text-base">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
