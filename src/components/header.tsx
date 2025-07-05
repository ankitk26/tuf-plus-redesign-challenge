import {
  BookIcon,
  ChevronDownIcon,
  CodeIcon,
  ComputerIcon,
  MenuIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";
import HeaderResourceItem from "./header-resource-item";
import { useTheme } from "./theme-provider";
import { ThemeToggler } from "./theme-toggler";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center py-4 px-4 lg:py-8 lg:px-16 justify-between z-40 top-0 sticky bg-background/40 backdrop-blur-sm border-b">
      {/* Logo */}
      <div className="flex items-center gap-2 lg:gap-3">
        <img
          src={
            theme === "dark"
              ? "https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png"
              : "https://takeuforward.org/static/media/TufPlusDark.2f9770f2ccd35b40c4c5.png"
          }
          alt="tuf-logo"
          className="w-12 lg:w-20"
        />
        <h1 className="font-mono text-sm lg:text-base">takeUforward</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4">
        <Button>Plus dashboard</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              Resources
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
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
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="user" />
          <AvatarFallback className="text-xs">AK</AvatarFallback>
        </Avatar>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center gap-2">
        <ThemeToggler />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {/* User Profile */}
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="user" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium text-sm">User Name</div>
                  <div className="text-xs text-muted-foreground">
                    user@example.com
                  </div>
                </div>
              </div>

              {/* Dashboard Button */}
              <Button
                className="w-full justify-start"
                onClick={() => setIsOpen(false)}
              >
                Plus dashboard
              </Button>

              {/* Resources Section */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-muted-foreground px-2">
                  Resources
                </h3>
                <div className="space-y-1">
                  <HeaderResourceItem
                    icon={CodeIcon}
                    title="Striver's DSA Sheet"
                    subtitle="Complete DSA for interviews"
                    onClick={() => setIsOpen(false)}
                  />
                  <HeaderResourceItem
                    icon={BookIcon}
                    title="System Design Sheet"
                    subtitle="Design better systems"
                    onClick={() => setIsOpen(false)}
                  />
                  <HeaderResourceItem
                    icon={ComputerIcon}
                    title="Core Subjects"
                    subtitle="Build strong fundamentals"
                    onClick={() => setIsOpen(false)}
                  />
                  <HeaderResourceItem
                    icon={UsersIcon}
                    title="Interview Experiences"
                    subtitle="Learn from others' journeys"
                    isNew
                    onClick={() => setIsOpen(false)}
                  />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
