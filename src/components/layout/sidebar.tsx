"use client";
import { ChevronRight, ChevronsLeft, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
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
  isMobile?: boolean;
  handleLinkClick?: (link: any) => void;
  isCollapsed?: boolean;
  setIsCollapsed?: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({
  links,
  isMobile = false,
  handleLinkClick,
  isCollapsed,
  setIsCollapsed,
}: SidebarWithSubmenusProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const router = usePathname();
  const handleMenuClick = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  return (
    <aside
      id="sidebar"
      className={`${
        isMobile
          ? "z-21 transition-width duration-75 bg-[hsl(var(--background))]"
          : "fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col transition-width duration-300 border-r border-gray-300 dark:border-gray-800"
      } dark:bg-black dark:border-[hsl(var(--border))] ${
        isCollapsed ? " w-14" : " w-64"
      }`}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-[hsl(var(--border))] bg-[hsl(var(--card))] pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto overflow-hidden">
          <div className="flex-1 bg-[hsl(var(--background))] divide-y divide-[hsl(var(--border))] space-y-1">
            <ul className="space-y-2 pb-2">
              {links.map((link) => (
                <li key={link.href}>
                  <div
                    className={`flex justify-between items-center cursor-pointer hover:bg-[hsl(var(--muted))] px-1.5 py-1 ${
                      link.submenu ? "relative" : ""
                    } ${
                      router.includes(link.href) ? "bg-[hsl(var(--muted))]" : ""
                    } ${isCollapsed ? 'rounded-xl': ''}`}
                    onClick={() => link.submenu && handleMenuClick(link.name)}
                  >
                    <Link
                      href={link.href}
                      className={`text-base capitalize text-[hsl(var(--foreground))] font-normal rounded-lg flex items-center p-[10px]  group ${
                        link.submenu ? "pr-10" : ""
                      }`}
                      onClick={() => {
                        if (handleLinkClick) {
                          handleLinkClick(link);
                        }
                      }}
                    >
                      <link.icon height={20} />
                      <span className={`${isCollapsed ? 'ml-[16px]':'ml-3'}`}>{link.name}</span>
                    </Link>
                    {/* Mostrar flecha de despliegue solo si hay submenu */}
                    {link.submenu && (
                      <ChevronRight
                        className={openSubmenu === link.name ? "rotate-90" : ""}
                      />
                    )}
                  </div>
                  {/* Renderiza el submenu si está abierto */}
                  {link.submenu && openSubmenu === link.name && (
                    <ul className="ml-6 mt-1 space-y-1">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            className={`text-sm text-[hsl(var(--foreground))] 
                              font-normal rounded-lg flex items-center p-2 hover:bg-[hsl(var(--muted))] group ${
                                router.includes(sublink.href)
                                  ? "bg-[hsl(var(--muted))]"
                                  : ""
                              }`}
                            onClick={() => {
                              if (handleLinkClick) {
                                handleLinkClick(sublink);
                              }
                            }}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button
        size="icon"
        variant="outline"
        className={`absolute -right-5 top-1/2 z-50 rounded-full md:inline-flex ${
          isMobile ? "hidden" : ""
        }`}
        onClick={() => {
          if(setIsCollapsed){
            setIsCollapsed((prev) => !prev)
          }
        }}
      >
        <ChevronsLeft
          className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
        />
      </Button>
    </aside>
  );
}

export default Sidebar;
