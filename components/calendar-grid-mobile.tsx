import React, { useState, useEffect } from 'react';

const CalendarGrid: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  
  useEffect(() => {
    generateCalendarDays();
  }, [currentDate]);
  
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // 获取当月第一天
    const firstDayOfMonth = new Date(year, month, 1);
    // 获取当月最后一天
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // 获取当月第一天是星期几
    const firstDayWeekday = firstDayOfMonth.getDay();
    
    // 获取上个月的部分日期
    const daysFromPrevMonth = firstDayWeekday;
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    const days: Date[] = [];
    
    // 添加上个月的日期
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthLastDay - i));
    }
    
    // 添加当月的日期
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    // 添加下个月的日期，补满6行日历
    const totalDaysNeeded = 42; // 6行 x 7天
    const remainingDays = totalDaysNeeded - days.length;
    
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    setDaysInMonth(days);
  };
  
  const changeMonth = (delta: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentDate(newDate);
  };
  
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };
  
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };

  return (
    <div>
      {/* 当前日期 */}
      {currentDate.toLocaleDateString()}
    </div>
  );
};

export default CalendarGrid;