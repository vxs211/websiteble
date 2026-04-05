"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    // Manually trigger ScrollTrigger refresh on Lenis scroll to keep things in sync
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const textTargets = gsap.utils.toArray<HTMLElement>(
      ".ds-hero-para, .ds-s2-heading, .ds-s2-para, .ds-s2-readmore, .ds-s2-offer-left, .ds-s2-offer-title, .ds-t-heading, .ds-t-quote-text, .ds-footer-heading, .ds-footer-subheading, .ds-footer-btn, .ds-footer-col-title, .ds-footer-list li",
    );

    const triggers: ScrollTrigger[] = [];

    const heroTitleLines = gsap.utils.toArray<HTMLElement>(
      ".js-hero-title-reveal .ds-hero-title-line",
    );

    let heroRevealPlayed = false;
    let heroRevealDelayTween: gsap.core.Tween | null = null;

    const playHeroReveal = () => {
      if (heroRevealPlayed || heroTitleLines.length === 0) {
        return;
      }

      heroRevealPlayed = true;

      heroRevealDelayTween = gsap.delayedCall(0.5, () => {
        gsap.set(heroTitleLines, {
          yPercent: 120,
          opacity: 0,
        });

        gsap.timeline().to(heroTitleLines, {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.24,
          clearProps: "transform,opacity",
        });
      });
    };

    const handlePageRevealComplete = () => {
      playHeroReveal();
    };

    if (document.body.dataset.pageRevealComplete === "true") {
      playHeroReveal();
    } else {
      window.addEventListener("page-reveal-complete", handlePageRevealComplete);
    }

    textTargets.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 28 });

      const tween = gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      gsap.ticker.remove(updateLenis);
      heroRevealDelayTween?.kill();
      window.removeEventListener(
        "page-reveal-complete",
        handlePageRevealComplete,
      );
      lenis.destroy();
    };
  }, []);

  return null;
}
