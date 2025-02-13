"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // 获取当前主题

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
          {/* 主题切换按钮 */}
          <ModeToggle />
        </div>



        {/* 移动端菜单按钮 */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className={`md:hidden mt-2 space-y-2 p-4 transition-colors ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
          <Link href="/about" className="block hover:text-blue-600">关于</Link>
          <Link href="/services" className="block hover:text-blue-600">服务</Link>
          <Link href="/contact" className="block hover:text-blue-600">联系</Link>
        </div>
      )}
    </nav>
  );
}
