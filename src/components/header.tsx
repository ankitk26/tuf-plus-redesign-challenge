import {
  BookIcon,
  ChevronDownIcon,
  CodeIcon,
  ComputerIcon,
  UsersIcon,
} from "lucide-react";
import HeaderResourceItem from "./header-resource-item";
import { ThemeToggler } from "./theme-toggler";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  return (
    <header className="flex items-center p-8 justify-between z-40 top-0 sticky bg-background/40 backdrop-blur-sm">
      <h1 className="font-mono">takeUforward</h1>
      <div className="flex items-center gap-4">
        <Button>Plus dashboard</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              Resources
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <HeaderResourceItem
              icon={CodeIcon}
              title="Striver's DSA Sheet"
              subtitle="Complete DSA for interviews"
            />
            <HeaderResourceItem
              icon={BookIcon}
              title="System Design Sheet"
              subtitle="Design better systems"
            />
            <HeaderResourceItem
              icon={ComputerIcon}
              title="Core Subjects"
              subtitle="Build strong fundamentals"
            />
            <HeaderResourceItem
              icon={UsersIcon}
              title="Interview Experiences"
              subtitle="Learn from others' journeys"
              isNew
            />
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggler />
        <Avatar>
          <AvatarImage src="" alt="tuf" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
