'use client'
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import CalendarGridPC from "@/components/calendar-grid-pc";
import CalendarGridMobile from "@/components/calendar-grid-mobile";

export default function Home() {
  const [isMobileView, setIsMobileView] = useState<boolean>(isMobile); // 初始判断

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // 根据窗口宽度更新状态
    };

    window.addEventListener("resize", handleResize); // 添加事件监听器
    return () => {
      window.removeEventListener("resize", handleResize); // 清理事件监听器
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {isMobileView ? <CalendarGridMobile /> : <CalendarGridPC />}
    </div>
  );
}