import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/labs")({ component: Labs });

function Labs() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow">
          {t("labs.kicker")}
        </p>
        <h1 className="mt-2 font-display text-6xl uppercase sm:text-8xl">
          {t("labs.h")}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted">{t("labs.lead")}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            to="/lettering"
            className="flex min-h-52 flex-col justify-between border border-yellow/35 bg-ink/75 p-6 no-underline transition-transform hover:-translate-y-0.5 hover:border-yellow"
          >
            <div>
              <h2 className="font-display text-4xl uppercase text-fg">
                {t("labs.lettering")}
              </h2>
              <p className="mt-3 text-sm text-muted">{t("labs.letteringd")}</p>
            </div>
            <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-yellow">
              {t("labs.open")}
            </span>
          </Link>
          <div className="flex min-h-52 flex-col justify-between border border-yellow/20 bg-ink/50 p-6 opacity-70">
            <div>
              <h2 className="font-display text-4xl uppercase text-fg">
                {t("labs.sketch")}
              </h2>
              <p className="mt-3 text-sm text-muted">{t("labs.sketchd")}</p>
            </div>
            <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-yellow">
              {t("labs.soon")}
            </span>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
