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
    <div className="rounded-lg border p-6 transition-all duration-200 hover:shadow-lg">
      <div className="flex h-full flex-col space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border-border bg-card">
              <IconComponent className="h-5 w-5 text-muted-foreground" />
            </div>
            <h3 className="text-card-foreground">{props.title}</h3>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            {props.description}
          </p>
        </div>

        {/* Points */}
        <div className="flex-1 space-y-3">
          {props.points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-muted">
                <CheckIcon className="h-2.5 w-2.5 text-muted-foreground" />
              </div>
              <span className="text-sm text-card-foreground">{point}</span>
            </div>
          ))}
        </div>

        <Button variant="secondary" className="w-full">
          View syllabus
        </Button>
      </div>
    </div>
  );
}
