"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageRevealLoader() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const progress = progressRef.current;

    if (!overlay || !progress) {
      return;
    }

    const finishReveal = () => {
      document.body.dataset.pageRevealComplete = "true";
      window.dispatchEvent(new Event("page-reveal-complete"));
    };

    document.body.style.overflow = "hidden";

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .set(progress, { scaleX: 0, transformOrigin: "left center" })
      .to(progress, {
        scaleX: 1,
        duration: 2.2,
        ease: "power1.inOut",
      })
      .to({}, { duration: 0.25 })
      .add(() => {
        finishReveal();
      })
      .to(
        overlay,
        {
          yPercent: -100,
          duration: 1.45,
          ease: "power4.inOut",
          onComplete: () => {
            document.body.style.overflow = "";
            setIsDone(true);
          },
        },
        "<-0.05",
      );

    return () => {
      timeline.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (isDone) {
    return null;
  }

  return (
    <div ref={overlayRef} className="ds-page-loader" aria-hidden="true">
      <div className="ds-page-loader-inner">
        <Image
          src="/assets/logo.webp"
          alt=""
          width={150}
          height={38}
          className="ds-page-loader-logo"
          priority
          style={{ height: "auto" }}
        />

        <div
          className="ds-page-loader-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span ref={progressRef} className="ds-page-loader-progress" />
        </div>
      </div>
    </div>
  );
}
