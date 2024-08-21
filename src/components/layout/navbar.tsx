import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ModeToggle from "@/components/layout/theme-icon";
import SidebarMobile from "@/components/layout/sidebar-mobile";
import { LucideIcon } from "lucide-react";
interface SubmenuProps {
    name: string;
    href: string;
  }
interface SidebarWithSubmenusProps {
    links: {
      name: string;
      href: string;
      icon: LucideIcon;
      submenu?: Array<SubmenuProps>;
    }[];
  }
export default function Navbar({links}:SidebarWithSubmenusProps ) {
  return (
    <>
      <nav className="bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start">
              <SidebarMobile links={links} />
              <a
                href="#"
                className="text-xl font-bold flex items-center lg:ml-2.5"
              >
                {/* Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-6 w-6"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                </svg>
                <span className="self-center whitespace-nowrap ml-2 text-[hsl(var(--foreground))]">
                  {" "}
                  Shadcn/ui
                </span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              {/* Theme */}
              <ModeToggle />
              {/* User Avatar */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>FP</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
