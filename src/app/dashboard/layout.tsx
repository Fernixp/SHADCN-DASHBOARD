import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import ModeToggle from "./theme/page";
import DrawerDemo from "./drawer/page";

const links = [
  { name: "accordion", href: "accordion" },
  { name: "alert", href: "alert" },
  { name: "button", href: "button" },
  { name: "alert dialog", href: "alert-dialog" },
  { name: "dialog", href: "dialog" },
  { name: "badge", href: "badge" },
  { name: "calendar", href: "calendar" },
  { name: "avatar", href: "avatar" },
  { name: "card ", href: "card " },
  { name: "carousel ", href: "carousel " },
  { name: "checkbox ", href: "checkbox " },
  { name: "command ", href: "command " },
  { name: "combobox", href: "combobox" },
  { name: "context menu", href: "context-menu" },
  { name: "Menu Bar", href: "menu-bar" },
  { name: "Input OTP", href: "input-otp" },
  { name: "Progress Bar", href: "progress" },
  { name: "sheet", href: "sheet" },
  { name: "skeleton", href: "skeleton" },
  { name: "slider", href: "slider" },
  { name: "sonner", href: "sonner" },
  { name: "Toast", href: "toast" },
  { name: "tabs", href: "tabs" },
  { name: "data table", href: "data-table" },
  { name: "theme", href: "theme" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <DrawerDemo links={links} />
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
                <span className="self-center whitespace-nowrap ml-2 dark:text-white">
                  {" "}
                  Shadcn/ui
                </span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              {/* Theme*/}
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
      <div className="flex overflow-hidden bg-white dark:bg-black pt-16">
        <aside
          id="sidebar"
          className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 dark:bg-black dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 borderR border-gray-200 dark:border-gray-700 bg-white dark:bg-black pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-700 space-y-1">
                <ul className="space-y-2 pb-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base capitalize text-gray-900 dark:text-gray-200 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <span className="ml-3">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-200 dark:bg-gray-950 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="w-full min-h-[calc(100vh-230px)]">
                <div className="bg-gray-50 dark:bg-black shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-white dark:bg-black md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
            <ul className="flex items-center flex-wrap mb-6 md:mb-0">
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Shadcn/ui™
              </a>
              . All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
