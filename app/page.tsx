'use client';
import React from "react";
import { Calendar } from "@/components/ui/calendar"
import CalendarGrid from "@/components/calendar-grid";


export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CalendarGrid />
    </div>
  );
}
