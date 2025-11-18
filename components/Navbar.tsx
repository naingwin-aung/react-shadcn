"use client";

import { Check, LogOut, Moon, Settings, Sidebar, Sun, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="p-4 flex items-center justify-between lg:me-2">
      {/* LEFT */}
      <SidebarTrigger />
      {/* <Button variant="outline" onClick={toggleSidebar}>Custom Button</Button> */}
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* <Link href="/">Dashboard</Link> */}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={10}>
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="flex items-center justify-between"
            >
              Light
              {theme === "light" && (
                <Check strokeWidth={3} className="ml-auto h-4 w-4" />
              )}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="flex items-center justify-between"
            >
              Dark
              {theme === "dark" && <Check strokeWidth={3} className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => setTheme("system")}
              className="flex items-center justify-between"
            >
              System
              {theme === "system" && (
                <Check strokeWidth={3} className="ml-auto h-4 w-4" />
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer select-none focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={10} className="w-37">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
