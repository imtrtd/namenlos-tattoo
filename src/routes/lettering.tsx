import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lettering")({ component: Lettering });

const FONTS = [
  { id: "Oswald", label: "Oswald" },
  { id: "Russo One", label: "Russo One" },
  { id: "Yanone Kaffeesatz", label: "Yanone" },
  { id: "Cinzel", label: "Cinzel" },
  { id: "UnifrakturMaguntia", label: "Fraktur" },
  { id: "Marck Script", label: "Marck Script" },
  { id: "Permanent Marker", label: "Marker" },
  { id: "Special Elite", label: "Typewriter" },
  { id: "Metal Mania", label: "Metal" },
  { id: "Inter", label: "Inter" },
];

const W = 1200;
const H = 640;

type Bg = "black" | "white" | "wall";

type PaintOpts = {
  text: string;
  font: string;
  size: number;
  track: number;
  color: string;
  bg: Bg;
  stencil: boolean;
  wall: HTMLImageElement | null;
};

function fontShort(font: string, size: number) {
  return `700 ${size}px "${font}", "Oswald", sans-serif`;
}

function applySpacing(ctx: CanvasRenderingContext2D, px: number) {
  const spaced = ctx as CanvasRenderingContext2D & { letterSpacing: string };
  if (typeof spaced.letterSpacing === "string") {
    spaced.letterSpacing = `${px}px`;
  }
}

function paint(canvas: HTMLCanvasElement, opts: PaintOpts) {
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  if (opts.bg === "white") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
  } else if (opts.bg === "wall" && opts.wall) {
    ctx.drawImage(opts.wall, 0, 0, W, H);
    ctx.fillStyle = "rgba(5,5,5,0.45)";
    ctx.fillRect(0, 0, W, H);
  } else {
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, W, H);
  }

  const raw = (opts.text || "NAMENLOS").toUpperCase();
  const lines = raw.split("\n").map((l) => l.trimEnd() || " ");
  const fill = opts.stencil ? "#f5f5f5" : opts.color;
  const tracking = opts.track * (opts.size / 48);
  const lineH = opts.size * 1.15;
  const total = lines.length * lineH;
  let y = H / 2 - total / 2 + lineH / 2;

  ctx.font = fontShort(opts.font, opts.size);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.miterLimit = 2;
  ctx.lineWidth = Math.max(2, opts.size / 22);
  ctx.strokeStyle = fill;
  ctx.fillStyle = fill;
  applySpacing(ctx, tracking);

  for (const line of lines) {
    ctx.strokeText(line, W / 2, y);
    ctx.fillText(line, W / 2, y);
    y += lineH;
  }

  applySpacing(ctx, 0);

  if (opts.stencil) {
    const img = ctx.getImageData(0, 0, W, H);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const l = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      const v = l > 80 ? 255 : 0;
      d[i] = d[i + 1] = d[i + 2] = v;
    }
    ctx.putImageData(img, 0, 0);
    ctx.save();
    ctx.translate(W, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  }
}

function Lettering() {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("NAMENLOS");
  const [font, setFont] = useState("Oswald");
  const [size, setSize] = useState(160);
  const [track, setTrack] = useState(2);
  const [color, setColor] = useState("#f5c518");
  const [bg, setBg] = useState<Bg>("black");
  const [stencil, setStencil] = useState(false);
  const [wall, setWall] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => setWall(img);
    img.src = "/images/wall_punk.jpg";
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const opts: PaintOpts = { text, font, size, track, color, bg, stencil, wall };
    let cancelled = false;

    const draw = () => {
      if (cancelled || !canvasRef.current) return;
      paint(canvasRef.current, opts);
    };

    draw();
    const raf = requestAnimationFrame(draw);

    void (async () => {
      try {
        await document.fonts.load(fontShort(font, size));
        await document.fonts.ready;
      } catch {
        /* keep fallback paint */
      }
      draw();
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [text, font, size, track, color, bg, stencil, wall]);

  function download(kind: "png" | "stencil") {
    const out = document.createElement("canvas");
    out.width = W;
    out.height = H;
    paint(out, {
      text,
      font,
      size,
      track,
      color,
      bg: kind === "stencil" ? "black" : bg,
      stencil: kind === "stencil" ? true : stencil,
      wall,
    });
    const a = document.createElement("a");
    a.href = out.toDataURL("image/png");
    a.download =
      kind === "stencil" ? "namenlos-stencil.png" : "namenlos-lettering.png";
    a.click();
  }

  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6 md:flex-row md:items-start">
        <section className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">
            {t("lettering.preview")}
          </p>
          <h1 className="font-display text-3xl uppercase sm:text-4xl">
            {t("lettering.h")}
          </h1>
          <div className="mt-4 border-2 border-yellow bg-ink">
            <div className="tape-stripes h-1.5 w-full" aria-hidden />
            <canvas
              ref={canvasRef}
              width={W}
              height={H}
              className="block h-auto w-full bg-ink"
            />
          </div>
          <p className="mt-2 text-xs text-muted">{t("lettering.hint")}</p>
        </section>

        <aside className="w-full shrink-0 md:sticky md:top-20 md:w-80">
          <div className="border border-yellow/30 bg-ink/90 p-4">
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow">
                {t("lettering.text")}
              </span>
              <textarea
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t("lettering.ph")}
                className="mt-1 w-full border border-yellow/30 bg-panel px-3 py-2 font-display text-lg uppercase text-fg outline-none focus:border-yellow"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow">
                {t("lettering.font")}
              </span>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="mt-1 h-11 w-full border border-yellow/30 bg-panel px-2 text-fg"
              >
                {FONTS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow">
                {t("lettering.size")} {size}
              </span>
              <input
                type="range"
                min={48}
                max={220}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="mt-1 w-full accent-yellow"
              />
            </label>

            <label className="mt-3 block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow">
                {t("lettering.track")} {track}
              </span>
              <input
                type="range"
                min={-4}
                max={24}
                value={track}
                onChange={(e) => setTrack(Number(e.target.value))}
                className="mt-1 w-full accent-yellow"
              />
            </label>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow">
                {t("lettering.color")}
              </span>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-9 w-14 cursor-pointer border border-yellow bg-transparent"
              />
            </div>

            <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow">
              {t("lettering.bg")}
            </p>
            <div className="mt-2 flex gap-2">
              {(["black", "white", "wall"] as const).map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBg(b)}
                  className={cn(
                    "h-11 flex-1 text-[0.6rem] font-bold uppercase tracking-[0.1em]",
                    bg === b
                      ? "bg-yellow text-ink"
                      : "border border-yellow/40 text-fg",
                  )}
                >
                  {b}
                </button>
              ))}
            </div>

            <label className="mt-4 flex min-h-11 items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                className="size-4 accent-yellow"
                checked={stencil}
                onChange={(e) => setStencil(e.target.checked)}
              />
              {t("lettering.stencil")}
            </label>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => download("png")}
                className="h-11 border-2 border-yellow text-xs font-bold uppercase tracking-[0.12em] text-yellow"
              >
                {t("lettering.png")}
              </button>
              <button
                type="button"
                onClick={() => download("stencil")}
                className="h-11 bg-yellow text-xs font-bold uppercase tracking-[0.12em] text-ink"
              >
                {t("lettering.stencil")}
              </button>
            </div>

            <p className="mt-5 text-sm text-muted">{t("lettering.bridge")}</p>
            <Link
              to="/book"
              className="mt-2 inline-flex h-11 w-full items-center justify-center bg-yellow text-xs font-bold uppercase tracking-[0.14em] text-ink no-underline"
            >
              {t("nav.book")}
            </Link>
          </div>
        </aside>
      </main>
    </SiteShell>
  );
}
