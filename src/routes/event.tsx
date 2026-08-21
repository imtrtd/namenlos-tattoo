import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

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
        <article className="event-poster mt-6 overflow-hidden border-2 border-yellow/40 bg-ink/85 p-6 sm:p-10">
          <span className="inline-block bg-yellow px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink">
            {t("event.kicker")}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[0.86] sm:text-7xl">
            {t("event.h")}
          </h1>
          <p className="mt-3 font-display text-2xl uppercase text-fg sm:text-3xl">{t("event.sub")}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-yellow">
            {t("event.when")} · {t("event.where")}
          </p>
          <p className="mt-4 leading-relaxed text-muted">{t("event.page.lead")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center border-2 border-yellow px-4 text-xs font-bold uppercase tracking-[0.14em] text-yellow no-underline"
            >
              Telegram
            </a>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
