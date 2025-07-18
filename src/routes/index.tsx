import Hero from "@/components/hero";
import Offerings from "@/components/offerings";
import PartnerCourse from "@/components/partner-course";
import PlanComparison from "@/components/plan-comparison";
import Plans from "@/components/plans";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="space-y-32 mb-10">
      <Hero />
      <Offerings />
      <Plans />
      <PlanComparison />
      <PartnerCourse />
    </div>
  );
}
