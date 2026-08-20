import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { SiteShell } from "@/components/site-shell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow">
          NAMENLOS
        </p>
        <h1 className="mt-2 font-display text-5xl uppercase">{t("login.h")}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t("login.lead")}</p>
        <div className="mt-8 flex flex-col gap-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="h-12 border-2 border-yellow bg-transparent text-xs font-bold uppercase tracking-[0.16em] text-yellow hover:bg-yellow hover:text-ink"
              >
                {p.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-muted">Sign-in is disabled.</p>
          )}
        </div>
        <Link
          to="/"
          className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-muted no-underline hover:text-yellow"
        >
          ← {t("login.back")}
        </Link>
      </main>
    </SiteShell>
  );
}
