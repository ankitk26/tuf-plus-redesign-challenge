import {
  CalendarIcon,
  CheckIcon,
  MoveRightIcon,
  TagIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  name: string;
  description: string;
  validity?: string;
  regularPrice?: number;
  discountedPrice?: number;
  discountCode?: string;
  discountPercent?: number;
  isPopular?: boolean;
  features: {
    feature: string;
    included: boolean;
  }[];
};

export default function PlanCard(props: Props) {
  // Format price to INR
  const formatPrice = (price: number) => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Calculate final price after discount
  const calculateFinalPrice = () => {
    if (!props.discountedPrice || !props.discountPercent) return null;
    const finalPrice =
      props.discountedPrice -
      (props.discountedPrice * props.discountPercent) / 100;
    return formatPrice(finalPrice);
  };

  const finalPrice = calculateFinalPrice();

  return (
    <div
      className={`relative flex flex-col space-y-6 p-6 border rounded-lg transition-all duration-200 hover:shadow-lg ${
        props.isPopular ? "border-primary shadow-md" : ""
      }`}
    >
      {props.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-mono font-medium">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl font-medium text-card-foreground">
          {props.name}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {props.description}
        </p>
      </div>

      {/* Pricing */}
      {props.regularPrice && props.discountedPrice && (
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-card-foreground">
                {formatPrice(props.discountedPrice)}
              </span>
              <span className="text-sm font-mono text-muted-foreground line-through">
                {formatPrice(props.regularPrice)}
              </span>
            </div>
          </div>

          {/* Discount Code Section */}
          {props.discountCode && props.discountPercent && finalPrice && (
            <div className="space-y-2 p-3 bg-card rounded-lg border border-dashed">
              <div className="flex items-center gap-2">
                <TagIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-card-foreground">
                  Apply discount code
                </span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-background px-2 py-1 rounded text-xs font-mono text-primary border">
                  {props.discountCode}
                </code>
                <span className="text-xs font-mono text-muted-foreground">
                  {props.discountPercent}% off
                </span>
              </div>
              <div className="pt-1 border-t border-border">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-card-foreground">
                    Final price:
                  </span>
                  <span className="text-lg font-bold font-mono text-primary">
                    {finalPrice}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Validity */}
      {props.validity && (
        <div className="flex items-center gap-2 text-sm">
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-muted-foreground">
            Validity:{" "}
            <span className="text-card-foreground capitalize font-medium">
              {props.validity}
            </span>
          </span>
        </div>
      )}

      {/* Features */}
      <div className="flex-1 space-y-4">
        <h4 className="text-sm font-medium text-card-foreground">
          What's included
        </h4>
        <div className="space-y-3">
          {props.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0">
                {feature.included ? (
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
                    <CheckIcon className="h-2.5 w-2.5 text-primary" />
                  </div>
                ) : (
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-muted">
                    <XIcon className="h-2.5 w-2.5 text-muted-foreground" />
                  </div>
                )}
              </div>
              <span className="text-sm text-card-foreground leading-relaxed">
                {feature.feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        {props.validity ? (
          <Button
            variant={props.isPopular ? "default" : "outline"}
            className="w-full justify-center gap-2"
          >
            Buy now
            <MoveRightIcon className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full justify-center gap-2 bg-transparent"
          >
            Contact us
            <UserIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
