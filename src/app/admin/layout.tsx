"use client";

import {
  ChartColumnStacked,
  Component,
  FileText,
  Home,
  Settings,
  Tag,
  User,
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Loading from "@/components/custom/loading";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const links = [
  { name: "dashboard", href: "home", icon: Home },
  { name: "usuarios", href: "usuarios", icon: User },
  { name: "posts", href: "posts", icon: FileText },
  { name: "tags", href: "tags", icon: Tag },
  { name: "categorias", href: "categorias", icon: ChartColumnStacked },
  {
    name: "componentes",
    href: "#",
    icon: Component,
    submenu: [
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
      { name: "form", href: "form" },
      { name: "date picker", href: "date-picker" },
    ],
  },
  { name: "theme", href: "theme", icon: Settings },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data, isError, isLoading } = useAuth();

  useEffect(() => {
    if ( data) {
      router.push("/admin");
    } else if ( isError) {
      router.push("/login");
    }
    
  }, [data, isError, isLoading, router]);
  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(null);

  useEffect(() => {
    // Este código solo se ejecuta en el cliente
    const savedState = localStorage.getItem("isCollapsed");
    if (savedState !== null) {
      setIsCollapsed(JSON.parse(savedState));
    } else {
      setIsCollapsed(false); // Estado por defecto si no existe en localStorage
    }
  }, []);

  useEffect(() => {
    // Guardar el estado en localStorage cuando cambie, pero solo si no es null
    if (isCollapsed !== null) {
      localStorage.setItem("isCollapsed", JSON.stringify(isCollapsed));
    }
  }, [isCollapsed]);

  if (isCollapsed === null) {
    // Puedes mostrar un loader o devolver null hasta que el estado se establezca
    return null;
  }

  return (
    <>
      {data ? (
        <>
         <Navbar links={links}/>
          <div className="flex bg-[hsl(var(--background))] pt-16 ">
            <Sidebar
              links={links}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div
              id="main-content"
              className={`h-full w-full bg-[hsl(var(--background))] relative overflow-y-auto overflow-hidden
            ${isCollapsed ? "lg:ml-14" : "lg:ml-56"}`}
            >
              <main>
                <div className="pt-6 px-4">
                  <div className="w-full min-h-[calc(100vh-230px)]">
                    <div className="bg-[hsl(var(--card))] shadow rounded-lg p-4 sm:p-6 xl:p-8">
                      {children}
                    </div>
                  </div>
                </div>
              </main>
              <Footer/>
            </div>
          </div>
        </>
      ) : <Loading/>
    }
    </>
  );
}
