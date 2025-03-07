"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
  import { useEffect, useState } from "react"

// 格言数组
const quotes = [
  "今天做的选择将决定明天的成就。",
  "成功不是偶然，而是习惯的积累。",
  "知识就是力量，学习永无止境。",
  "人生没有彩排，每一天都是现场直播。",
  "不要等待机会，而要创造机会。",
  "态度决定高度，习惯成就人生。",
  "宁可慢一点，也不要停下脚步。",
  "坚持做自己，但记得变得更好。",
  "最困难的时刻，也是离成功最近的时刻。",
  "简单的事情重复做，你就是专家。"
]

export function AppSidebar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [randomQuote, setRandomQuote] = useState("");
  
  useEffect(() => {
    // 更新当前日期
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // 每分钟更新一次
    
    // 随机选择一句格言
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    
    return () => clearInterval(timer);
  }, []);
  
  // 格式化日期
  const formattedDate = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  }).format(currentDate);
  
  return (
    <div className="hidden md:block">
      <Sidebar>
        <SidebarHeader className="border-b px-4 py-3">
          <div className="text-xl font-bold text-blue-500">我的日历</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="space-y-3 px-4 py-3">
            <div className="date-display p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="text-lg font-bold text-blue-500">{formattedDate}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentDate.toLocaleTimeString('zh-CN', {hour: '2-digit', minute: '2-digit'})}
              </div>
            </div>
            
            <div className="quote-display p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-sm italic text-blue-600">&quot;{randomQuote}&quot;</p>
            </div>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <div className="text-xs text-center text-gray-500">
            每一天都是新的开始
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
}
  