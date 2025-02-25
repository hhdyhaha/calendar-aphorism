"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useEffect, useState } from "react";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setCurrentDate(`${year}年${month}月${day}日`);
  }, []);

  return (
    <nav className={`px-6 py-4 shadow-md transition-colors ${resolvedTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <SidebarTrigger />
          {currentDate}
        </Link>

        {/* PC 端导航 */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* <Link href="/about" className="hover:text-blue-600">关于</Link>
          <Link href="/services" className="hover:text-blue-600">服务</Link>
          <Link href="/contact" className="hover:text-blue-600">联系</Link> */}
          <ModeToggle />
        </div>

        {/* 移动端菜单 */}
        <div className="md:hidden flex items-center gap-2">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/about">关于</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services">服务</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact">联系</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu> */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
