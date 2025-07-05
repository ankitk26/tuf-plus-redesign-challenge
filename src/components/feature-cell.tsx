import { CheckIcon, XIcon } from "lucide-react";

export default function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
          <CheckIcon className="h-3 w-3 text-primary" />
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted">
          <XIcon className="h-3 w-3 text-muted-foreground" />
        </div>
      </div>
    );
  }

  return (
    <span className="font-mono text-sm text-card-foreground">{value}</span>
  );
}
