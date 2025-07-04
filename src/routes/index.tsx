import Hero from "@/components/hero";
import Offerings from "@/components/offerings";
import Plans from "@/components/plans";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="space-y-20 mb-10">
      <Hero />
      <Offerings />
      <Plans />
    </div>
  );
}
