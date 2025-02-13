"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className={`px-6 py-4 shadow-md transition-colors ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MySite
        </Link>

        {/* PC 端导航 */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/about" className="hover:text-blue-600">关于</Link>
          <Link href="/services" className="hover:text-blue-600">服务</Link>
          <Link href="/contact" className="hover:text-blue-600">联系</Link>
          <ModeToggle />
        </div>

        {/* 移动端菜单 */}
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
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
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
