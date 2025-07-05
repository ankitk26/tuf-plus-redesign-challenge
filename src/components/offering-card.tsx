import { CheckIcon, type LucideProps } from "lucide-react";
import type React from "react";
import { Button } from "./ui/button";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  points: string[];
};

export default function OfferingCard(props: Props) {
  const IconComponent = props.icon;

  return (
    <div className="rounded-lg border p-4 lg:p-6 transition-all duration-200 hover:shadow-lg">
      <div className="flex h-full flex-col space-y-4 lg:space-y-6">
        {/* Header */}
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-md border-border bg-card">
              <IconComponent className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground" />
            </div>
            <h3 className="text-sm lg:text-base font-medium text-card-foreground leading-tight">
              {props.title}
            </h3>
          </div>
          <p className="font-mono text-xs lg:text-sm text-muted-foreground leading-relaxed">
            {props.description}
          </p>
        </div>

        {/* Points */}
        <div className="flex-1 space-y-2 lg:space-y-3">
          {props.points.map((point) => (
            <div key={point} className="flex items-start gap-2 lg:gap-3">
              <div className="mt-0.5 flex h-3 w-3 lg:h-4 lg:w-4 items-center justify-center rounded-full bg-muted flex-shrink-0">
                <CheckIcon className="h-2 w-2 lg:h-2.5 lg:w-2.5 text-muted-foreground" />
              </div>
              <span className="text-xs lg:text-sm text-card-foreground leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button
          variant="secondary"
          className="w-full text-xs lg:text-sm py-2 lg:py-2.5"
        >
          View syllabus
        </Button>
      </div>
    </div>
  );
}
