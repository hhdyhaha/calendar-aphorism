"use client";

import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`text-center py-4 mt-10 transition-colors ${theme === "dark" || theme === "system" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}>
      <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
}
