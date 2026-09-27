import { useEffect, type ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.querySelector(".site-shell");
    if (!root) return;
    const paint = () => root.classList.add("is-walled");
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(paint, { timeout: 450 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(paint, 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="site-shell flex min-h-dvh flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col">{children}</div>
      <SiteFooter />
    </div>
  );
}
