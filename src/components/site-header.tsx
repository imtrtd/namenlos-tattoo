import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LANGS, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { AuthSlot } from "@/components/auth-slot";

const NAV = [
  { to: "/", key: "nav.site", match: "/" },
  { to: "/designs", key: "nav.designs", match: "/designs" },
  { to: "/lettering", key: "lettering.h", match: "/lettering" },
  { to: "/event", key: "nav.events", match: "/event" },
] as const;

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-yellow/25">
      <div className="tape-stripes h-1.5 w-full" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2 sm:px-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <nav className="header-fade hidden min-w-0 items-center justify-start gap-1 lg:flex">
          {NAV.map((item) => {
            const on =
              item.match === "/"
                ? pathname === "/"
                : pathname.startsWith(item.match);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] no-underline transition-colors",
                  on ? "text-yellow" : "text-fg/75 hover:text-yellow",
                )}
                aria-current={on ? "page" : undefined}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/"
          className="group mark-lock flex min-w-0 flex-col items-start no-underline lg:items-center"
          title="NAMENLOS TATTOO VIKTORIIA"
        >
          <span className="mark-title font-display font-semibold leading-none text-fg group-hover:text-yellow">
            NAMENLOS TATTOO
          </span>
          <span className="mark-rule mt-1.5 mb-1 block h-px w-full bg-yellow/70" aria-hidden />
          <span className="mark-name font-display leading-none text-yellow">
            VIKTORIIA
          </span>
        </Link>

        <div className="header-fade-late ml-auto flex shrink-0 items-center justify-end gap-1 lg:ml-0">
          <div
            className="hidden items-center md:flex"
            role="group"
            aria-label="Language"
          >
            {LANGS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLang(l.id)}
                className={cn(
                  "px-1.5 py-2 text-[0.65rem] font-bold tracking-[0.08em]",
                  lang === l.id ? "text-yellow" : "text-muted hover:text-fg",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
          <AuthSlot />
          <Link
            to="/book"
            className="inline-flex h-9 items-center bg-yellow px-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink no-underline hover:bg-yellow-hot"
          >
            {t("nav.book")}
          </Link>
          <button
            type="button"
            className="grid size-9 place-items-center border border-yellow/50 text-yellow lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-yellow/20 bg-ink px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {[
              ...NAV,
              { to: "/book", key: "nav.book", match: "/book" },
              { to: "/labs", key: "nav.labs", match: "/labs" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-bold uppercase tracking-[0.14em] text-fg no-underline"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-3">
            {LANGS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLang(l.id)}
                className={cn(
                  "py-2 text-xs font-bold",
                  lang === l.id ? "text-yellow" : "text-muted",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
