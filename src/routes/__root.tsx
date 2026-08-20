import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { I18nProvider } from "@/lib/i18n";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "NAMENLOS Tattoo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "NAMENLOS — Viktoriia. Custom tattoo, fine line, lettering, graphic. Nuremberg / Kyiv. Use the pain as fuel.",
      },
      { name: "theme-color", content: "#050505" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&family=Cinzel:wght@600;700&family=Special+Elite&family=UnifrakturMaguntia&family=Marck+Script&family=Russo+One&family=Yanone+Kaffeesatz:wght@600;700&family=Metal+Mania&family=Permanent+Marker&display=swap",
      },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-ink text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <I18nProvider>
            <Outlet />
            <Toaster
              theme="dark"
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#0a0a0a",
                  border: "1px solid #f5c518",
                  color: "#f5f5f5",
                  borderRadius: 0,
                },
              }}
            />
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
