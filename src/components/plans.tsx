import PlanCard from "./plan-card";

const DISCOUNT_CODE = "REDESIGN";
const DISCOUNT_PERCENT = 25;

export default function Plans() {
  return (
    <section>
      <h3 className="text-2xl font-medium">
        <span className="text-primary font-mono">Affordable</span> plans for
        everyone
      </h3>
      <p className="text-muted-foreground text-sm font-mono">
        Choose the best fit for you
      </p>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
        <PlanCard
          name="Sprint plan"
          description="Perfect for beginners starting their coding journey"
          validity="12 months"
          regularPrice={8999}
          discountedPrice={6599}
          discountCode={DISCOUNT_CODE}
          discountPercent={DISCOUNT_PERCENT}
          features={[
            { feature: "All features", included: true },
            { feature: "Only DSA, Core & Aptitude", included: true },
            { feature: "AI Doubt Support", included: false },
            { feature: "Biweekly Sessions", included: false },
            { feature: "Code Review", included: false },
          ]}
        />
        <PlanCard
          name="Pinnacle plan"
          description="Go all in — with expert support & lifetime access."
          validity="lifetime"
          regularPrice={11999}
          discountedPrice={8999}
          discountCode={DISCOUNT_CODE}
          discountPercent={DISCOUNT_PERCENT}
          isPopular={true}
          features={[
            { feature: "All features", included: true },
            { feature: "DSA, Core, Design & Aptitude", included: true },
            { feature: "AI Doubt Support", included: true },
            { feature: "Biweekly Sessions", included: true },
            { feature: "Code Review", included: true },
          ]}
        />
        <PlanCard
          name="Enterprise plan"
          description="Perfect for a group of people (minimum 30) who are looking for an extra discount."
          features={[
            { feature: "All features of Pinnacle", included: true },
            { feature: "Performance Dashboard", included: true },
            { feature: "Centralized Billing & Licensing", included: true },
            { feature: "Custom Curriculum", included: true },
            { feature: "Exclusive Webinars & Industry Events", included: true },
            { feature: "Batch Enrollment & Role Access", included: true },
          ]}
        />
      </div>
    </section>
  );
}
