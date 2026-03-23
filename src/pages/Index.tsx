import Icon from "@/components/ui/icon";

const TEACHER_PHOTO =
  "https://cdn.poehali.dev/projects/e15f0213-82cd-4584-83ee-ca3d1f3538de/files/5e834607-6931-47b6-80fb-55c342e53726.jpg";

const levels = [
  {
    code: "A1–A2",
    label: "Beginner",
    desc: "Нуль или почти нуль? Строим фундамент: базовая грамматика, первые диалоги, уверенность в простых ситуациях.",
    duration: "3–4 месяца",
  },
  {
    code: "B1",
    label: "Elementary",
    desc: "Понимаете отдельные фразы — пора говорить связно. Учимся описывать события, планы и свои мысли.",
    duration: "4–5 месяцев",
  },
  {
    code: "B2",
    label: "Intermediate",
    desc: "Уже говорите, но застреваете? Убираем языковой барьер, работаем над беглостью и лексикой.",
    duration: "5–6 месяцев",
  },
  {
    code: "C1",
    label: "Upper-Intermediate",
    desc: "Серьёзный уровень: деловое общение, академический язык, работа с оригинальными текстами.",
    duration: "6+ месяцев",
  },
  {
    code: "C2",
    label: "Advanced",
    desc: "Шлифуем до блеска. Нюансы произношения, идиоматика, стиль. Уровень носителя — достижимая цель.",
    duration: "Индивидуально",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-golos">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border">
        <span className="font-cormorant text-xl font-medium tracking-wide">
          Anna Morris
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            Обо мне
          </a>
          <a href="#levels" className="hover:text-foreground transition-colors">
            Уровни
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background text-sm rounded-full hover:opacity-80 transition-opacity"
          >
            Записаться
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center w-full py-20">
          <div>
            <p className="animate-fade-up delay-100 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Учитель английского языка
            </p>
            <h1 className="animate-fade-up delay-200 font-cormorant text-6xl md:text-7xl font-light leading-[1.05] mb-8">
              Английский,
              <br />
              <em className="italic">который остаётся</em>
            </h1>
            <p className="animate-fade-up delay-300 text-muted-foreground text-lg leading-relaxed max-w-md mb-10">
              Персональные уроки для тех, кто хочет говорить — а не просто знать правила. Онлайн, без шаблонов.
            </p>
            <div className="animate-fade-up delay-500 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
              >
                Пробный урок
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#levels"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Посмотреть уровни
              </a>
            </div>

            <div className="animate-fade-up delay-700 flex items-center gap-8 mt-14 pt-10 border-t border-border">
              {[
                { num: "8+", label: "лет опыта" },
                { num: "200+", label: "учеников" },
                { num: "94%", label: "достигают цели" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-cormorant text-3xl font-medium">{s.num}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in delay-300 relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img
                src={TEACHER_PHOTO}
                alt="Анна Моррис — учитель английского"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl px-6 py-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Star" size={14} className="text-amber-500" />
                <span className="font-medium">5.0</span>
                <span className="text-muted-foreground">· 180 отзывов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Обо мне
              </p>
              <h2 className="font-cormorant text-5xl font-light leading-tight">
                Кто я такая
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Меня зовут Анна. Я преподаю английский язык уже более восьми лет — работала со школьниками, студентами, предпринимателями и теми, кто просто хотел наконец заговорить.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Получила образование в МГЛУ, прошла стажировку в Лондоне. Сертификат CELTA даёт мне методическую базу, но главное — я умею слышать каждого ученика и двигаться в его темпе.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Мой подход: минимум скуки, максимум практики. Уроки строятся вокруг ваших целей — путешествия, карьера, переезд или просто удовольствие от языка.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: "GraduationCap", text: "МГЛУ, диплом с отличием" },
                  { icon: "Award", text: "Сертификат CELTA" },
                  { icon: "Globe", text: "Стажировка в Лондоне" },
                  { icon: "Laptop", text: "Уроки онлайн по всему миру" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 p-4 bg-secondary rounded-xl"
                  >
                    <Icon
                      name={item.icon}
                      size={18}
                      className="mt-0.5 shrink-0 text-foreground"
                    />
                    <span className="text-sm leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section id="levels" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Программы
              </p>
              <h2 className="font-cormorant text-5xl font-light leading-tight">
                Уровни обучения
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Каждая программа — отдельный маршрут. Определим ваш уровень на первом уроке бесплатно.
            </p>
          </div>

          <div className="space-y-3">
            {levels.map((level, i) => (
              <div
                key={level.code}
                className="group flex flex-col md:flex-row md:items-center gap-6 px-8 py-7 bg-background hover:bg-secondary transition-colors duration-200 border border-border rounded-2xl"
              >
                <div className="flex items-center gap-5 md:w-52 shrink-0">
                  <span className="font-cormorant text-4xl font-light text-muted-foreground group-hover:text-foreground transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-medium text-sm">{level.label}</div>
                    <div className="text-xs text-muted-foreground">{level.code}</div>
                  </div>
                </div>

                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                  {level.desc}
                </p>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Срок</div>
                    <div className="text-sm font-medium">{level.duration}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-foreground/5 group-hover:bg-foreground flex items-center justify-center transition-colors">
                    <Icon
                      name="ArrowRight"
                      size={14}
                      className="text-foreground group-hover:text-background transition-colors"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-foreground text-background rounded-3xl px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-3">
                Готовы начать?
              </h2>
              <p className="text-background/70 text-lg">
                Первый пробный урок — бесплатно и без обязательств.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-background text-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Записаться на урок
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-background/30 text-background rounded-full hover:border-background/60 transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-cormorant text-lg font-medium text-foreground">
            Anna Morris
          </span>
          <span>Онлайн-уроки английского языка · 2026</span>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-foreground transition-colors">
              Обо мне
            </a>
            <a href="#levels" className="hover:text-foreground transition-colors">
              Уровни
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
