const quickActions = [
  {
    title: "Напоминание себе",
    description: "Запиши одну мысль в заметки — та, что хочет быть услышанной.",
    cta: "Открыть заметки",
    href: "https://keep.google.com/",
  },
  {
    title: "Поделиться теплом",
    description: "Отправь привет другу — простое «как ты?» работает чудеса.",
    cta: "Написать сообщение",
    href: "https://web.telegram.org/",
  },
  {
    title: "Вдохновение на сегодня",
    description:
      "Почитай короткую историю или статью — добавь себе искорку творчества.",
    cta: "Открыть подборку",
    href: "https://theoryandpractice.ru/selections",
  },
];

export function QuickActions() {
  return (
    <div className="glass-panel shadow-soft flex flex-col gap-4 rounded-3xl p-6">
      <header className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          Маленькие шаги
        </span>
        <h3 className="text-lg font-semibold text-foreground">
          То, что можно сделать прямо сейчас
        </h3>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {quickActions.map((action) => (
          <a
            key={action.title}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-3 rounded-2xl border border-transparent bg-white/70 p-4 transition-transform transition-colors hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 dark:bg-white/[0.04]"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-accent">
                {action.title}
              </span>
              <p className="text-sm leading-relaxed text-foreground/80">
                {action.description}
              </p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 group-hover:text-accent">
              {action.cta}
              <span aria-hidden>↗</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
