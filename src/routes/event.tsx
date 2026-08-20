import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/event")({ component: EventPage });

function EventPage() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <main className="mx-auto w-full max-w-xl flex-1 px-5 py-12">
        <Link
          to="/"
          className="text-xs font-bold uppercase tracking-[0.14em] text-yellow no-underline"
        >
          ← {t("nav.site")}
        </Link>
        <article className="mt-6 border-2 border-yellow/40 bg-ink/85 p-6">
          <span className="inline-block bg-yellow px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink">
            {t("event.kicker")}
          </span>
          <h1 className="mt-4 font-display text-4xl uppercase">
            {t("event.h")} · {t("event.sub")}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-yellow">
            {t("event.when")} · {t("event.where")}
          </p>
          <p className="mt-4 leading-relaxed text-muted">{t("event.page.lead")}</p>

          <h2 className="mt-8 font-display text-sm uppercase tracking-[0.16em] text-yellow">
            {t("event.expect")}
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>{t("event.e1")}</li>
            <li>{t("event.e2")}</li>
            <li>{t("event.e3")}</li>
          </ul>

          <h2 className="mt-6 font-display text-sm uppercase tracking-[0.16em] text-yellow">
            {t("event.clients")}
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>{t("event.c1")}</li>
            <li>{t("event.c2")}</li>
          </ul>

          <h2 className="mt-6 font-display text-sm uppercase tracking-[0.16em] text-yellow">
            {t("event.artists")}
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>{t("event.a1")}</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book"
              search={{ event: "blackout-yard" }}
              className="inline-flex h-11 items-center bg-yellow px-4 text-xs font-bold uppercase tracking-[0.14em] text-ink no-underline"
            >
              {t("event.book")}
            </Link>
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
