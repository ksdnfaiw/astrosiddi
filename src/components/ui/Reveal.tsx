"use client";

import React, { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in milliseconds before the transition starts. */
  delay?: number;
  direction?: Direction;
}

/**
 * Lightweight scroll-reveal (IntersectionObserver + CSS transition), replacing framer-motion's
 * whileInView. Use it only for content BELOW the fold - above-the-fold content must render immediately
 * so it can be the Largest Contentful Paint.
 */
export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible"); // very old browsers: just show it
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
