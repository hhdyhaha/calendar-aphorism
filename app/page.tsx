'use client';
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar"


export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    // <div className="container mx-auto p-6">
    //   <h1 className="text-3xl font-bold text-center mb-6">欢迎来到 MySite</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>功能 1</CardTitle>
    //       </CardHeader>
    //       <CardContent>这里是一些介绍。</CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>功能 2</CardTitle>
    //       </CardHeader>
    //       <CardContent>这里是一些介绍。</CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>功能 3</CardTitle>
    //       </CardHeader>
    //       <CardContent>这里是一些介绍。</CardContent>
    //     </Card>
    //   </div>
    // </div>
    <div className="w-screen h-screen flex items-center justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
