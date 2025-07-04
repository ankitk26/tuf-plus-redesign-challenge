import { type LucideProps } from "lucide-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";

type Props = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  subtitle: string;
  isNew?: boolean;
};

export default function HeaderResourceItem(props: Props) {
  const IconComponent = props.icon; // Renaming for clarity

  return (
    <DropdownMenuItem className="flex items-center gap-4 py-3">
      {/* Now you can render it as a component */}
      <IconComponent className="stroke-primary" />
      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{props.title}</h3>
          {props.isNew && <Badge>New</Badge>}
        </div>
        <small className="text-muted-foreground">{props.subtitle}</small>
      </div>
    </DropdownMenuItem>
  );
}
