'use client';
import React from "react";
import { Calendar } from "@/components/ui/calendar"
import CalendarGridPC from "@/components/calendar-grid-pc";


export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-full h-full flex items-center justify-center">
      <CalendarGridPC />
    </div>
  );
}
