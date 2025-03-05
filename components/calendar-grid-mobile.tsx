"use client"
import React, { useState, useEffect } from 'react';

// 农历数据和节气数据会比较复杂，这里简化处理
const lunarInfo: Record<string, string> = {
  '2025-3-5': '二月初六',
  '2025-3-6': '二月初七',
  '2025-3-7': '二月初八',
  // 更多日期...
};

const solarTerms: Record<string, string> = {
  '2025-3-5': '惊蛰',
  '2025-3-21': '春分',
  // 更多节气...
};

// 格言数组
const quotes = [
  "如果回忆会发出声响，那么今天的蜻蜓振翅和雨前惊雷都归你",
  "最困难的时刻，也是离成功最近的时刻",
  "态度决定高度，习惯成就人生",
  "宁可慢一点，也不要停下脚步",
  "简单的事情重复做，你就是专家",
  "生活不会辜负每一份努力和坚持",
  "只有行动才能把梦想变成现实",
  "把热爱的事做到极致，就是成功",
  "风雨之后，必见彩虹",
  "种下梦想的种子，收获希望的果实"
];

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
const weekDaysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CalendarGrid: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [randomQuote, setRandomQuote] = useState("");
  
  useEffect(() => {
    // 随机选择一句格言
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  
  // 获取日期的农历信息
  const getLunarDate = (date: Date): string => {
    const dateKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return lunarInfo[dateKey] || '二月初六'; // 默认值，实际应使用农历计算库
  };
  
  // 获取日期的节气信息
  const getSolarTerm = (date: Date): string => {
    const dateKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return solarTerms[dateKey] || '惊蛰'; // 默认值，实际应使用节气计算库
  };
  
  // 格式化完整日期
  const formatFullDate = (date: Date): string => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <div className="calendar-modern-container h-[90vh] w-full flex flex-col p-4">
      {/* 日历显示框 - 占用更多空间 */}
      <div className="calendar-card border border-blue-200 rounded-lg overflow-hidden bg-white flex-1 flex flex-col">
        {/* 顶部日期显示 */}
        <div className="text-center p-4 border-b border-blue-100 text-blue-500">
          <div className="text-lg font-medium">{formatFullDate(currentDate)}</div>
        </div>
        
        {/* 日期信息区域 */}
        <div className="flex justify-between items-center px-6 py-4 text-blue-500 border-b border-blue-100">
          <div className="text-left text-lg">{getLunarDate(currentDate)}</div>
          <div className="text-center">
            <div className="text-lg">星期{weekDays[currentDate.getDay()]}</div>
            <div>{weekDaysEn[currentDate.getDay()]}</div>
          </div>
          <div className="text-right text-lg">{getSolarTerm(currentDate)}</div>
        </div>
        
        {/* 日期数字大显示 - 使用flex-1让它占据剩余空间 */}
        <div className="py-8 text-center flex-1 flex items-center justify-center">
          <div className="day-number text-[160px] font-bold text-blue-500 leading-none">
            {currentDate.getDate()}
          </div>
        </div>
        
        {/* 月份显示 */}
        <div className="text-center pb-4 text-blue-500">
          <div className="text-2xl">{monthsEn[currentDate.getMonth()]}</div>
          <div className="text-xl">{months[currentDate.getMonth()]}</div>
        </div>
        
        {/* 格言 */}
        <div className="p-4 text-center border-t border-blue-100">
          <p className="text-blue-500 px-4">{randomQuote}</p>
        </div>
      </div>
      
      {/* 日期选择器按钮 */}
      <div className="py-4 flex justify-center bg-white border-t border-blue-100">
        <div className="flex">
          <button 
            className="px-5 py-3 bg-blue-100 text-blue-500 rounded-lg hover:bg-blue-200 transition-colors text-lg"
            onClick={() => {
              const prevDay = new Date(currentDate);
              prevDay.setDate(prevDay.getDate() - 1);
              setCurrentDate(prevDay);
            }}
          >
            前一天
          </button>
          
          <button 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg mx-4"
            onClick={() => {
              const today = new Date();
              setCurrentDate(today);
            }}
          >
            返回今天
          </button>
          
          <button 
            className="px-5 py-3 bg-blue-100 text-blue-500 rounded-lg hover:bg-blue-200 transition-colors text-lg"
            onClick={() => {
              const nextDay = new Date(currentDate);
              nextDay.setDate(nextDay.getDate() + 1);
              setCurrentDate(nextDay);
            }}
          >
            后一天
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;