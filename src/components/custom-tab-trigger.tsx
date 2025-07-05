import { cn } from "@/lib/utils";

export default function CustomTabTrigger(props: {
  value: string;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}) {
  const isActive = props.value === props.currentTab;

  return (
    <button
      className={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-4 py-4 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:outline-1",

        isActive && [
          "bg-background shadow-sm",
          "dark:text-foreground dark:border-input dark:bg-input/30",
        ],

        // Non-active state styles
        !isActive && ["text-foreground dark:text-muted-foreground"]
      )}
      onClick={() => props.setCurrentTab(props.value)}
    >
      {props.label}
    </button>
  );
}
