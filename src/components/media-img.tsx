import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "loading"> & {
  src: string;
  alt: string;
  /** LCP / above-the-fold only. Everything else waits for viewport. */
  priority?: boolean;
};

/**
 * Below-fold images have no `src` during SSR so the framework cannot
 * emit <link rel="preload"> for them. They fade in once near viewport.
 */
export function MediaImg({
  src,
  alt,
  priority = false,
  className,
  width,
  height,
  sizes,
  ...rest
}: Props) {
  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        decoding="async"
        fetchPriority="high"
        className={className}
        {...rest}
      />
    );
  }

  return (
    <LazyImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      {...rest}
    />
  );
}

function LazyImg({
  src,
  alt,
  className,
  width,
  height,
  sizes,
  ...rest
}: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const activate = () => setActive(true);
    if (!("IntersectionObserver" in window)) {
      activate();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          activate();
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={active ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      onLoad={() => setShown(true)}
      className={cn("media-lazy", shown && "is-ready", className)}
      {...rest}
    />
  );
}
