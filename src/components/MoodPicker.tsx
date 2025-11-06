"use client";

import { useMemo, useState } from "react";

const moodOptions = [
  {
    id: "focus",
    label: "Нужен фокус",
    hint: "Сделай три глубоких вдоха, запиши одну цель на ближайшие 30 минут и начни с самого простого шага.",
  },
  {
    id: "energy",
    label: "Хочу энергии",
    hint: "Включи любимый трек, потянись и выпей стакан воды — мозг скажет спасибо.",
  },
  {
    id: "learn",
    label: "Хочу узнать новое",
    hint: "Открой закладку с заметкой, добавь туда одно наблюдение за сегодня и отправь себе в Telegram.",
  },
  {
    id: "pause",
    label: "Нужна пауза",
    hint: "Отложи телефон, посмотри в окно и заметь три вещи, которые тебя радуют прямо сейчас.",
  },
];

export function MoodPicker() {
  const [activeMood, setActiveMood] = useState(moodOptions[0]);
  const buttons = useMemo(
    () =>
      moodOptions.map((mood) => ({
        id: mood.id,
        label: mood.label,
      })),
    [],
  );

  return (
    <div className="glass-panel shadow-soft flex flex-col gap-5 rounded-3xl p-6">
      <header className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          Настроение
        </span>
        <h3 className="text-lg font-semibold text-foreground">
          Выбери то, что чувствуется правильным{" "}
          <span aria-hidden className="inline-block text-accent">
            →
          </span>
        </h3>
      </header>

      <div className="flex flex-wrap gap-2">
        {buttons.map((mood) => {
          const isActive = activeMood.id === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() =>
                setActiveMood(
                  moodOptions.find((item) => item.id === mood.id) ??
                    moodOptions[0],
                )
              }
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${isActive ? "border-transparent bg-accent text-white shadow-lg shadow-accent/30" : "border-foreground/10 bg-white/70 text-foreground/80 hover:bg-foreground/5"}`}
            >
              {mood.label}
            </button>
          );
        })}
      </div>

      <p className="rounded-2xl border border-foreground/5 bg-foreground/[0.04] p-4 text-sm leading-relaxed text-foreground/80 dark:bg-white/[0.03] dark:text-foreground/90">
        {activeMood.hint}
      </p>
    </div>
  );
}
