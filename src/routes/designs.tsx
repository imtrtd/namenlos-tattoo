import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n, type Lang } from "@/lib/i18n";
import { FLASH, WORKS } from "@/lib/catalog";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/designs")({ component: Designs });

function Designs() {
  const { t, lang } = useI18n();
  const [tab, setTab] = useState<"designs" | "portfolio">("designs");

  return (
    <SiteShell>
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10">
        <h1 className="font-display text-5xl uppercase sm:text-7xl">{t("flash.h")}</h1>
        <p className="mt-3 max-w-xl text-muted">{t("flash.lead")}</p>
        <div className="mt-8 flex gap-2" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "designs"}
            onClick={() => setTab("designs")}
            className={cn(
              "h-10 px-4 text-xs font-bold uppercase tracking-[0.14em]",
              tab === "designs" ? "bg-yellow text-ink" : "border border-yellow text-yellow",
            )}
          >
            {t("nav.designs")}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "portfolio"}
            onClick={() => setTab("portfolio")}
            className={cn(
              "h-10 px-4 text-xs font-bold uppercase tracking-[0.14em]",
              tab === "portfolio" ? "bg-yellow text-ink" : "border border-yellow text-yellow",
            )}
          >
            {t("nav.works")}
          </button>
        </div>

        {tab === "designs" ? (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {FLASH.map((item) => {
              const free = item.status === "available";
              return (
                <article key={item.id} className="card">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="media-image aspect-square w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 bg-ink/85 px-2 py-1 text-[0.6rem] uppercase tracking-[0.12em] text-yellow">
                      {t(`status.${item.status}`)}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.14em] text-yellow">
                      {item.style}
                    </p>
                    <h2 className="font-display text-xl uppercase">{item.title}</h2>
                    <p className="mt-1 text-xs text-muted">{item.desc[lang as Lang]}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-display text-lg text-yellow">{item.price}</span>
                      {free ? (
                        <Link
                          to="/book"
                          search={{ design: item.id }}
                          className="bg-yellow px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink no-underline"
                        >
                          {t("flash.book")}
                        </Link>
                      ) : (
                        <span className="text-[0.65rem] uppercase text-muted">
                          {t("flash.unavailable")}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {WORKS.map((w) => (
              <article key={w.id} className="card">
                <img src={w.img} alt={w.title} className="media-image aspect-3/4 w-full object-cover" />
                <div className="p-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.14em] text-yellow">
                    {w.style} · {w.year}
                  </p>
                  <h2 className="font-display text-xl uppercase">{w.title}</h2>
                  <p className="mt-1 text-xs text-muted">
                    {w.desc[lang]} · {w.place[lang]} · {w.size}
                  </p>
                  <div className="mt-3 flex gap-3">
                    <Link
                      to="/book"
                      search={{ ref: w.title }}
                      className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-yellow no-underline"
                    >
                      {t("works.similar")}
                    </Link>
                    <a
                      href={SITE.ig}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.65rem] uppercase tracking-[0.12em] text-muted no-underline hover:text-yellow"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </SiteShell>
  );
}
