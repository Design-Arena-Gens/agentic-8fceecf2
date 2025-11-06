import { LiveClock } from "@/components/LiveClock";
import { MoodPicker } from "@/components/MoodPicker";
import { QuickActions } from "@/components/QuickActions";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 sm:px-8 lg:px-12">
        <section className="glass-panel shadow-soft relative flex flex-col gap-10 overflow-hidden rounded-[36px] border border-white/20 p-10 md:p-16">
          <div className="absolute inset-y-0 left-[55%] hidden w-2/5 bg-[radial-gradient(circle_at_center,var(--accent-soft)_0,transparent_65%)] md:block" />
          <div className="flex flex-col gap-6 md:max-w-xl">
            <span className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              привет!
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Добро пожаловать в твоё цифровое приветствие
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80">
              Здесь можно вдохнуть, улыбнуться и выбрать себе маленькое действие
              для хорошего дня. Я подготовил несколько подсказок — выбирай то,
              что откликается прямо сейчас.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#вдохновение"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Найти вдохновение
              </a>
              <a
                href="#мелочи"
                className="rounded-full border border-foreground/10 px-6 py-3 text-sm font-medium text-foreground/80 transition hover:border-accent/40 hover:text-accent"
              >
                Маленькие шаги
              </a>
            </div>
          </div>
          <div className="grid gap-6 md:absolute md:bottom-[-60px] md:right-10 md:w-72">
            <LiveClock />
          </div>
        </section>

        <section
          id="вдохновение"
          className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <article className="glass-panel shadow-soft flex flex-col gap-6 rounded-[32px] p-8">
            <header className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                Вдохновение
              </span>
              <h2 className="text-2xl font-semibold text-foreground">
                Несколько идей, чтобы день стал ярче
              </h2>
            </header>
            <ul className="grid gap-4 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-3 rounded-3xl border border-foreground/5 bg-white/70 p-4 dark:bg-white/[0.04]">
                <span className="text-lg">🌅</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Начни с благодарности
                  </h3>
                  Запиши одну вещь, за которую благодарен прямо сейчас. Это
                  задаёт мягкий тон всему дню.
                </div>
              </li>
              <li className="flex gap-3 rounded-3xl border border-foreground/5 bg-white/70 p-4 dark:bg-white/[0.04]">
                <span className="text-lg">🎧</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Собери плейлист настроение
                  </h3>
                  Найди три композиции, которые давно хотел вспомнить, и добавь
                  их в новую подборку &laquo;Сегодня&raquo;.
                </div>
              </li>
              <li className="flex gap-3 rounded-3xl border border-foreground/5 bg-white/70 p-4 dark:bg-white/[0.04]">
                <span className="text-lg">📚</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Читай чуть-чуть
                  </h3>
                  Открой любимую книгу и прочитай всего одну страницу. Иногда
                  достаточно именно этого, чтобы включиться.
                </div>
              </li>
            </ul>
          </article>
          <MoodPicker />
        </section>

        <section id="мелочи">
          <QuickActions />
        </section>

        <footer className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl border border-transparent bg-white/70 p-6 text-center text-sm text-foreground/60 dark:bg-white/[0.04]">
          <p>
            Эта страница создана, чтобы сказать тебе простое &laquo;привет&raquo;
            и напомнить: остановись, вдохни и поблагодари себя за заботу.
          </p>
          <span className="text-xs uppercase tracking-[0.3em]">
            с заботой · агент 8fceecf2
          </span>
        </footer>
      </main>
    </div>
  );
}
