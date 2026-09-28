import { useEffect, useState } from "react";

type TgUser = {
  id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
};

type TgWebApp = {
  initData?: string;
  initDataUnsafe?: { user?: TgUser };
  ready: () => void;
  expand: () => void;
  close: () => void;
  setHeaderColor: (c: string) => void;
  setBackgroundColor: (c: string) => void;
};

declare global {
  interface Window {
    Telegram?: { WebApp?: TgWebApp };
  }
}

export function useTelegramWebApp() {
  const [app, setApp] = useState<TgWebApp | null>(null);

  useEffect(() => {
    function boot() {
      const next = window.Telegram?.WebApp;
      if (!next) return;
      next.ready();
      next.expand();
      try {
        next.setHeaderColor("#000000");
        next.setBackgroundColor("#050505");
      } catch {
        // older clients
      }
      document.documentElement.classList.add("tg-mini");
      setApp(next);
    }

    if (window.Telegram?.WebApp) {
      boot();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    script.onload = boot;
    document.head.appendChild(script);
  }, []);

  const user = app?.initDataUnsafe?.user;
  const isMini = Boolean(app?.initData);
  const displayName = [user?.first_name, user?.last_name].filter(Boolean).join(" ");
  const handle = user?.username ? `@${user.username}` : "";

  return { app, isMini, user, displayName, handle, close: () => app?.close() };
}
