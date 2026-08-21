import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n } from "@/lib/i18n";
import { getLegal, type LegalId } from "@/lib/legal";

const LINKS: { id: LegalId; to: "/terms" | "/privacy" | "/aftercare" | "/hygiene"; key: string }[] =
  [
    { id: "terms", to: "/terms", key: "footer.terms" },
    { id: "privacy", to: "/privacy", key: "footer.privacy" },
    { id: "hygiene", to: "/hygiene", key: "footer.hygiene" },
    { id: "aftercare", to: "/aftercare", key: "footer.aftercare" },
  ];

export function LegalPage({ id }: { id: LegalId }) {
  const { lang, t } = useI18n();
  const page = getLegal(id, lang);
  return (
    <SiteShell>
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-12">
        <article className="panel p-6 sm:p-8">
          <h1 className="font-display text-4xl uppercase">{page.title}</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
            {t("legal.updated")}
          </p>
          <div className="legal-body mt-6 space-y-6 text-sm leading-relaxed text-muted">
            {page.sections.map((s) => (
              <section key={s.h}>
                <h2 className="mb-2 font-display text-lg uppercase tracking-wide text-yellow">
                  {s.h}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: s.html }} />
              </section>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted">{t("legal.disc")}</p>
          <nav className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.12em]">
            {LINKS.map((l) => (
              <Link
                key={l.id}
                to={l.to}
                className={l.id === id ? "text-yellow" : "text-muted no-underline hover:text-yellow"}
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
        </article>
      </main>
    </SiteShell>
  );
}
