"use client"


import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const smallDate = date?.toLocaleDateString("es-Es",{
    weekday: "long",
    day:"2-digit",
    month: "long"
  })

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
      disabled={date=> date.getDay() === 0}
    />
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  <div>
    <h1 className="text-3xl">Información</h1>4
    <div className="border-b"></div>
    <p>{smallDate}</p>
  </div>

    </div>
  )
}
