import { Link } from "@tanstack/react-router";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { signOut } from "@/lib/auth/client";
import { useI18n } from "@/lib/i18n";

export function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  const { t } = useI18n();

  if (isPending) {
    return <span className="h-8 w-8 shrink-0 bg-yellow/20" aria-hidden />;
  }

  if (!user) {
    return (
      <Link
        to="/login"
        className="hidden px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted no-underline hover:text-yellow sm:inline"
      >
        {t("nav.signIn")}
      </Link>
    );
  }

  const label = user.displayName ?? user.primaryEmail ?? "·";
  return (
    <button
      type="button"
      onClick={() => void signOut()}
      className="max-w-24 truncate px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-yellow hover:text-yellow-hot"
      title={label}
    >
      {label.split(" ")[0]}
    </button>
  );
}
