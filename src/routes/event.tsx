import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { EVENTS, KINKY_IG, KINKY_WEB, NAMENLOS_IG } from "@/lib/events";

export const Route = createFileRoute("/event")({ component: EventPage });

function EventPage() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12">
        <Link
          to="/"
          className="text-xs font-bold uppercase tracking-[0.14em] text-yellow no-underline"
        >
          ← {t("nav.site")}
        </Link>
        <article className="event-poster panel mt-6 overflow-hidden p-6 sm:p-10">
          <span className="inline-block bg-yellow px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink">
            {t("event.kicker")}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[0.86] sm:text-7xl">
            {t("event.h")}
          </h1>
          <p className="mt-3 font-display text-2xl uppercase text-fg sm:text-3xl">{t("event.sub")}</p>
          <p className="mt-4 leading-relaxed text-muted">{t("event.page.lead")}</p>

          <ul className="mt-8 space-y-4">
            {EVENTS.map((ev) => (
              <li key={ev.id} className="border-t border-yellow/25 pt-4">
                <p className="font-display text-2xl uppercase tracking-[0.08em] text-fg sm:text-3xl">
                  {ev.line}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-yellow">
                  {ev.venue} · {ev.address}
                </p>
                <a
                  href={ev.tickets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-bold uppercase tracking-[0.14em] text-yellow no-underline"
                >
                  Tickets →
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={KINKY_IG}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              @kinky_on_tour
            </a>
            <a
              href={NAMENLOS_IG}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              @namenlos_tattoo
            </a>
            <a
              href={KINKY_WEB}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              kinky-on.com
            </a>
            <a
              href={SITE.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Telegram
            </a>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
