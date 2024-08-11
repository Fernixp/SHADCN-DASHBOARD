"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SidebarWithSubmenusProps {
  links: { name: string; href: string }[];
}

import dynamic from "next/dynamic";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent } from "@/components/ui/dialog";

export default function SidebarWithSubmenus({
  links,
}: SidebarWithSubmenusProps) {
  // Estado para controlar la visibilidad del Drawer
  const [open, setOpen] = React.useState(false);

  // Maneja el cierre del Drawer
  const handleLinkClick = () => {
    setOpen(false);
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
        <DrawerContent className="dark:bg-[hsl(var(--background))] flex flex-col rounded-t-[10px] h-full w-[240px] mt-24 fixed bottom-0 right-0 overflow-y-auto">
          <DrawerTitle className="font-medium mb-4 text-center bg-transparent">
            Menu Principal
          </DrawerTitle>
          <div
            id="sidebar-mobile"
            className="z-21 transition-width duration-75 bg-[hsl(var(--background))] dark:border-[hsl(var(--border))]"
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-[hsl(var(--border))] bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))] pt-0 ">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))] divide-y divide-[hsl(var(--border))] space-y-1">
                  <ul className="space-y-2 pb-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-base capitalize text-[hsl(var(--foreground))] dark:text-[hsl(var(--card-foreground))] font-normal rounded-lg flex items-center p-2 hover:bg-[hsl(var(--card))] dark:hover:bg-[hsl(var(--muted))] group"
                          onClick={handleLinkClick} // Cierra el Drawer al hacer clic
                        >
                          <span className="ml-3">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
