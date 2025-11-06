"use client";

import { useEffect, useState } from "react";

type LiveClockProps = {
  className?: string;
};

const dayNames = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

export function LiveClock({ className = "" }: LiveClockProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const date = now.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  });

  return (
    <div
      className={`glass-panel shadow-soft flex flex-col rounded-3xl p-6 text-sm text-foreground/90 ${className}`}
    >
      <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
        Сейчас
      </span>
      <strong className="text-3xl font-semibold text-foreground">{time}</strong>
      <span className="text-sm text-foreground/70">
        {date}, {dayNames[now.getDay()]}
      </span>
    </div>
  );
}
