"use client";

import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className={`text-center py-4 mt-10 transition-colors ${resolvedTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
}
