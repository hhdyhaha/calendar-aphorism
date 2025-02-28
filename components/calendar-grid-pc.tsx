import React, { useState, useEffect, useCallback } from 'react';

const CalendarGrid: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  
  const generateCalendarDays = useCallback(() => {
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
  }, [currentDate]);

  useEffect(() => {
    generateCalendarDays();
  }, [currentDate,generateCalendarDays]);
  

  
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
    <div className="w-full h-full m-0 p-4 font-sans flex flex-col box-border bg-white overflow-hidden">
      {/* 顶部日期显示 */}
      {/* <div className="flex items-center mb-4 text-gray-700">
        <span className="text-lg font-medium">
          <i className="far fa-calendar-alt mr-2"></i> 
          {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月{currentDate.getDate()}日
        </span>
      </div> */}
      
      {/* 月份导航和标题 */}
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => changeMonth(-1)}
          className="px-4 py-2 bg-gray-100 text-gray-700 border-none rounded cursor-pointer text-sm font-medium hover:bg-gray-200"
        >
          上个月
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
        </h2>
        <button 
          onClick={() => changeMonth(1)}
          className="px-4 py-2 bg-gray-100 text-gray-700 border-none rounded cursor-pointer text-sm font-medium hover:bg-gray-200"
        >
          下个月
        </button>
      </div>
      
      {/* 日历主体 */}
      <div className="flex-1 flex flex-col border border-gray-200 rounded overflow-hidden">
        {/* 星期标题行 */}
        <div className="grid grid-cols-7 bg-white text-gray-700 font-medium border-b border-gray-200">
          {weekdays.map((day, index) => (
            <div key={index} className="py-3 text-center">
              {day}
            </div>
          ))}
        </div>
        
        {/* 日期网格 */}
        <div className="grid grid-cols-7 flex-1 gap-[1px] bg-gray-100">
          {daysInMonth.map((date, index) => (
            <div 
              key={index} 
              className={`
                p-2 h-[100px] relative bg-white
                ${isToday(date) ? 'bg-blue-50' : ''}
                ${!isCurrentMonth(date) ? 'bg-gray-50' : ''}
                ${hoveredDate && date.getTime() === hoveredDate.getTime() ? 'bg-blue-50' : ''}
                transition-colors duration-200 ease-in-out
              `}
              onMouseEnter={() => setHoveredDate(date)}
              onMouseLeave={() => setHoveredDate(null)}
            >
              <span 
                className={`
                  inline-block text-center
                  ${isToday(date) ? 'text-blue-500 font-medium' : !isCurrentMonth(date) ? 'text-gray-400' : 'text-gray-700'}
                `}
              >
                {date.getDate()}
              </span>
              
              {/* 这里可以添加事件或其他内容 */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;