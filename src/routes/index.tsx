import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n, type Lang } from "@/lib/i18n";
import { FLASH, WORKS } from "@/lib/catalog";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useI18n();
  const previewFlash = FLASH.slice(0, 6);
  const previewWorks = WORKS.slice(0, 6);

  return (
    <SiteShell>
      <main>
        <section className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">{t("hero.kicker")}</p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-[0.88] tracking-wide text-fg sm:text-7xl lg:text-8xl">
              {t("hero.title1")}
              <br />
              <em className="not-italic text-yellow">{t("hero.title2")}</em>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t("hero.lead")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">
                {t("hero.book")}
              </Link>
              <Link to="/designs" className="btn btn-outline">
                {t("flash.all")}
              </Link>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-yellow">
              {t("status.open")}
            </p>
          </div>
          <div className="relative max-w-md justify-self-end lg:max-w-none">
            <div className="tape-stripes absolute -left-3 top-8 hidden h-[calc(100%-4rem)] w-3 sm:block" />
            <img
              src="/images/author.jpg"
              alt="Viktoriia — NAMENLOS"
              className="portrait-image w-full object-cover"
            />
            <p className="mt-3 text-right text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              {t("about.stamp")}
            </p>
          </div>
        </section>

        <section className="band">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
            {[t("badge.loc"), t("badge.since"), t("badge.from")].map((b) => (
              <span
                key={b}
                className="font-display text-sm uppercase tracking-[0.2em] text-yellow"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl uppercase tracking-wide">{t("about.h")}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{t("about.p2")}</p>
          </div>
          <Link
            to="/event"
            className="event-feature panel relative flex min-h-96 flex-col justify-between overflow-hidden p-6 no-underline"
          >
            <div className="relative z-10 max-w-sm">
              <span className="inline-block bg-yellow px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink">
                {t("event.kicker")}
              </span>
              <h3 className="mt-4 font-display text-4xl uppercase text-fg">
                {t("event.h")}
              </h3>
              <p className="font-display text-xl uppercase text-yellow">{t("event.sub")}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-yellow">
                {t("event.when")} · {t("event.where")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{t("event.lead")}</p>
            </div>
            <span className="relative z-10 mt-6 text-xs font-bold uppercase tracking-[0.16em] text-yellow">
              {t("event.more")} →
            </span>
          </Link>
        </section>

        <section id="works" className="mx-auto max-w-6xl px-5 py-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-5xl uppercase">{t("works.h")}</h2>
              <p className="mt-2 text-sm text-muted">{t("works.lead")}</p>
            </div>
            <Link
              to="/designs"
              className="text-xs font-bold uppercase tracking-[0.16em] text-yellow no-underline"
            >
              {t("flash.all")} →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {previewWorks.map((w) => (
              <article key={w.id} className="card group">
                <img
                  src={w.img}
                  alt={w.title}
                  className="media-image aspect-3/4 w-full object-cover"
                />
                <div className="p-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-yellow">
                    {w.style}
                  </p>
                  <h3 className="font-display text-xl uppercase">{w.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="styles" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-5xl uppercase">{t("styles.h")}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["styles.s1t", "styles.s1d"],
              ["styles.s2t", "styles.s2d"],
              ["styles.s3t", "styles.s3d"],
            ].map(([ht, hd]) => (
              <article key={ht} className="card p-5">
                <span className="mb-2 block h-px w-8 bg-yellow/70" aria-hidden />
                <h3 className="font-display text-2xl uppercase">{t(ht)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(hd)}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">{t("styles.note")}</p>
          <Link to="/lettering" className="btn btn-outline mt-4">
            {t("styles.lab")}
          </Link>
        </section>

        <section id="flash" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-display text-5xl uppercase">{t("flash.h")}</h2>
              <p className="mt-2 text-sm text-muted">{t("flash.lead")}</p>
            </div>
            <Link
              to="/designs"
              className="text-xs font-bold uppercase tracking-[0.16em] text-yellow no-underline"
            >
              {t("flash.all")} →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {previewFlash.map((item) => (
              <FlashCard key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="font-display text-5xl uppercase">{t("process.h")}</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <article key={n} className="card p-5">
                <span className="font-display text-xs tracking-[0.16em] text-yellow">
                  0{n}
                </span>
                <h3 className="mt-2 font-display text-2xl uppercase">
                  {t(`process.s${n}t`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(`process.s${n}d`)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="band px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-5xl uppercase">{t("contact.h")}</h2>
            <p className="mt-3 max-w-xl text-muted">{t("contact.lead")}</p>
            <p className="mt-2 text-sm text-muted">{t("contact.intro")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">
                {t("hero.book")}
              </Link>
              <Link to="/book" search={{ type: "org" }} className="btn btn-outline">
                {t("contact.org")}
              </Link>
              <a
                href={SITE.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Telegram
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function FlashCard({
  item,
  lang,
}: {
  item: (typeof FLASH)[number];
  lang: Lang;
}) {
  const { t } = useI18n();
  const free = item.status === "available";
  return (
    <article className="card group">
      <div className="relative overflow-hidden">
        <img src={item.img} alt={item.title} className="media-image aspect-square w-full object-cover" />
        <span className="absolute left-2 top-2 bg-ink/85 px-2 py-1 text-[0.6rem] uppercase tracking-[0.12em] text-yellow">
          {t(`status.${item.status}`)}
        </span>
      </div>
      <div className="p-3">
        <p className="text-[0.65rem] uppercase tracking-[0.14em] text-yellow">{item.style}</p>
        <h3 className="font-display text-lg uppercase">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted">{item.desc[lang]}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-lg text-yellow">{item.price}</span>
          {free ? (
            <Link
              to="/book"
              search={{ design: item.id }}
              className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-yellow no-underline"
            >
              {t("flash.book")}
            </Link>
          ) : (
            <span className="text-[0.65rem] uppercase text-muted">{t("flash.unavailable")}</span>
          )}
        </div>
      </div>
    </article>
  );
}
