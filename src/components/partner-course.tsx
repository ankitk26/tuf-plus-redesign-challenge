import {
  DownloadIcon,
  FileQuestionIcon,
  KeyIcon,
  MonitorPlayIcon,
  RepeatIcon,
  ScrollTextIcon,
  VideoIcon,
} from "lucide-react";
import AboutCreator from "./about-creator";
import { Button } from "./ui/button";

const courseFeatures = [
  {
    icon: VideoIcon,
    label: "242+ Video Lessons",
  },
  {
    icon: FileQuestionIcon,
    label: "37+ Quizzes",
  },
  {
    icon: DownloadIcon,
    label: "58+ Downloadable Resources",
  },
  {
    icon: MonitorPlayIcon,
    label: "Live Classes",
  },
  {
    icon: ScrollTextIcon,
    label: "Interview Questions",
  },
  {
    icon: RepeatIcon,
    label: "Continuous Updates",
  },
  {
    icon: KeyIcon,
    label: "Lifetime Access",
  },
];

export default function PartnerCourse() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-semibold">Partner's courses</h3>
      <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-xl border shadow-sm bg-card">
        <div className="lg:w-1/2">
          <AboutCreator />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">
              System Design Simplified
            </h2>
            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              A complete video course on high-level and low-level system design.
              We cover topics from routing, load balancing and caching to
              advanced concepts like concurrency and design tradeoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {courseFeatures.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 bg-primary/10 text-primary rounded-md shrink-0">
                  <feature.icon className="size-4" />
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="p-4 md:p-6 space-y-4 border rounded-xl bg-muted/30">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Buy for{" "}
                <span className="text-green-600 font-semibold">60% OFF</span>
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {Intl.NumberFormat("en-IN", {
                    currency: "INR",
                    style: "currency",
                    maximumFractionDigits: 0,
                  }).format(4490)}
                </span>
                <span className="line-through text-lg text-muted-foreground">
                  {Intl.NumberFormat("en-IN", {
                    currency: "INR",
                    style: "currency",
                    maximumFractionDigits: 0,
                  }).format(11180)}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button className="flex-1 sm:flex-none">Buy Now</Button>
              <Button
                variant="outline"
                className="flex-1 sm:flex-none bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
