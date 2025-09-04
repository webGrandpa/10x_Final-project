// src/components/GrowingDivider.jsx
import React, { useEffect, useState } from "react";

// If you're using Next.js 13+ (App Router), add this line:
// "use client";

export default function GrowingDivider({
  /** Scroll distance (in px) over which the divider reaches max width */
  maxScroll = 1000,
  /** Max width as a % of viewport width (0..1) */
  maxWidthPct = 0.8,
  /** Extra classes for spacing/layout (e.g., "my-16") */
  className = "",
}) {
  const [dividerWidth, setDividerWidth] = useState(0);

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxWidth = window.innerWidth * maxWidthPct;
      const width = (Math.min(scrollY, maxScroll) / maxScroll) * maxWidth;
      setDividerWidth(width);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(compute);
        ticking = true;
      }
    };

    // initialize once
    compute();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
    };
  }, [maxScroll, maxWidthPct]);

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div
        className="h-1 bg-[#1B365D] rounded-3xl"
        style={{ width: Math.round(dividerWidth) }}
        aria-hidden
      />
    </div>
  );
}