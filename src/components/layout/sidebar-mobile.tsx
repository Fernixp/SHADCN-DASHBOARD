"use client";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import Sidebar from "@/components/layout/sidebar";
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

export default function SidebarMobile({
  links,
}: SidebarWithSubmenusProps) {
  // Estado para controlar la visibilidad del Drawer
  const [open, setOpen] = useState(false);

  // Maneja el cierre del Drawer
  const handleLinkClick = (link: any) => {

    if (!link.submenu) {
      setOpen(false);
    }
  };
 
  return (
    <div>
      <Drawer direction="left" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant={"outline"}
            id="toggleSidebarMobile"
            aria-expanded="true"
            aria-controls="sidebar"
            className="lg:hidden mr-2 text-[hsl(var(--foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] dark:hover:text-[hsl(var(--foreground))] cursor-pointer p-2 hover:bg-[hsl(var(--secondary))] dark:hover:bg-[hsl(var(--muted))] focus:bg-[hsl(var(--secondary))] dark:focus:bg-[hsl(var(--muted))] focus:ring-2 focus:ring-[hsl(var(--secondary))] dark:focus:ring-[hsl(var(--muted))] rounded"
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg
              id="toggleSidebarMobileHamburger"
              className={open ? "hidden" : "w-6 h-6"}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              id="toggleSidebarMobileClose"
              className={open ? "w-6 h-6" : "hidden"}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent
          className="dark:bg-[hsl(var(--background))] flex flex-col rounded-t-[10px] h-full w-[240px] mt-24 fixed bottom-0 right-0 overflow-y-auto"
        >
          <DrawerTitle className="font-medium text-center bg-transparent">
            Administrador
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Menú principal
          </DrawerDescription>
          <Sidebar links={links} isMobile handleLinkClick={handleLinkClick} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
