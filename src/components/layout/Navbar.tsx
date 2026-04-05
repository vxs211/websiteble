"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = ["Home", "Studio", "Services", "Contact", "FAQs"];
const underlineVariants = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" class="ds-navbar-link-box-svg"><path d="M17.0039 33.582C32.2307 33.7406 47.4552 33.7271 62.676 33.7113C67.3044 33.7064 96.546 33.9549 104.728 32.9769C113.615 31.9146 104.516 29.2022 102.022 28.1821C89.9573 23.2459 77.3751 19.9248 65.0451 15.9546C57.8987 13.6536 37.2813 9.3934 44.2314 7.00157C50.9667 4.68363 64.2873 6.71856 70.4249 6.86582C105.866 7.71618 141.306 8.48751 176.75 9.49827C217.874 10.671 258.906 11.9547 300 15.3886" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" class="ds-navbar-link-box-svg"><path d="M5 24.2592C26.233 20.2879 47.7083 16.9968 69.135 13.8421C98.0469 9.5853 128.407 4.02322 158.059 5.14674C172.583 5.69708 187.686 8.66104 201.598 11.9696C207.232 13.3093 215.437 14.9471 220.137 18.3619C224.401 21.4596 220.737 25.6575 217.184 27.6168C208.309 32.5097 197.199 34.281 186.698 34.8486C183.159 35.0399 147.197 36.2657 155.105 26.5837C158.11 22.9053 162.993 20.6229 167.764 18.7924C178.386 14.7164 190.115 12.1115 201.624 10.3984C218.367 7.90626 235.528 7.06127 252.521 7.49276C258.455 7.64343 264.389 7.92791 270.295 8.41825C280.321 9.25056 296 10.8932 305 13.0242" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" class="ds-navbar-link-box-svg"><path d="M5 29.5014C9.61174 24.4515 12.9521 17.9873 20.9532 17.5292C23.7742 17.3676 27.0987 17.7897 29.6575 19.0014C33.2644 20.7093 35.6481 24.0004 39.4178 25.5014C48.3911 29.0744 55.7503 25.7731 63.3048 21.0292C67.9902 18.0869 73.7668 16.1366 79.3721 17.8903C85.1682 19.7036 88.2173 26.2464 94.4121 27.2514C102.584 28.5771 107.023 25.5064 113.276 20.6125C119.927 15.4067 128.83 12.3333 137.249 15.0014C141.418 16.3225 143.116 18.7528 146.581 21.0014C149.621 22.9736 152.78 23.6197 156.284 24.2514C165.142 25.8479 172.315 17.5185 179.144 13.5014C184.459 10.3746 191.785 8.74853 195.868 14.5292C199.252 19.3205 205.597 22.9057 211.621 22.5014C215.553 22.2374 220.183 17.8356 222.979 15.5569C225.4 13.5845 227.457 11.1105 230.742 10.5292C232.718 10.1794 234.784 12.9691 236.164 14.0014C238.543 15.7801 240.717 18.4775 243.356 19.8903C249.488 23.1729 255.706 21.2551 261.079 18.0014C266.571 14.6754 270.439 11.5202 277.146 13.6125C280.725 14.7289 283.221 17.209 286.393 19.0014C292.321 22.3517 298.255 22.5014 305 22.5014" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" class="ds-navbar-link-box-svg"><path d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" class="ds-navbar-link-box-svg"><path d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path></svg>`,
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLButtonElement | null>(null);
  const topLineRef = useRef<HTMLSpanElement | null>(null);
  const bottomLineRef = useRef<HTMLSpanElement | null>(null);
  const nextUnderlineIndexRef = useRef<number | null>(null);

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLElement>("[data-draw-line]"),
    );

    const states = new WeakMap<
      HTMLElement,
      {
        enterTween: gsap.core.Tween | null;
        leaveTween: gsap.core.Tween | null;
        activePath: SVGPathElement | null;
        activeLength: number | null;
      }
    >();

    const getState = (container: HTMLElement) => {
      const existingState = states.get(container);

      if (existingState) {
        return existingState;
      }

      const nextState = {
        enterTween: null,
        leaveTween: null,
        activePath: null,
        activeLength: null,
      };

      states.set(container, nextState);
      return nextState;
    };

    const handleEnter = (event: Event) => {
      const container = event.currentTarget as HTMLElement;
      const state = getState(container);
      const box = container.querySelector<HTMLElement>("[data-draw-line-box]");

      if (!box) {
        return;
      }

      if (state.enterTween?.isActive()) {
        return;
      }

      if (state.leaveTween?.isActive()) {
        state.leaveTween.kill();
      }

      if (nextUnderlineIndexRef.current === null) {
        nextUnderlineIndexRef.current = Math.floor(
          Math.random() * underlineVariants.length,
        );
      }

      box.innerHTML = underlineVariants[nextUnderlineIndexRef.current];

      const svg = box.querySelector<SVGSVGElement>("svg");
      const path = svg?.querySelector<SVGPathElement>("path");

      if (!svg || !path) {
        return;
      }

      svg.setAttribute("class", "ds-navbar-link-box-svg");
      svg.setAttribute("preserveAspectRatio", "none");

      const length = path.getTotalLength();
      state.activePath = path;
      state.activeLength = length;

      gsap.killTweensOf(path);
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      state.enterTween = gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          state.enterTween = null;
        },
      });

      nextUnderlineIndexRef.current =
        (nextUnderlineIndexRef.current + 1) % underlineVariants.length;
    };

    const handleLeave = (event: Event) => {
      const container = event.currentTarget as HTMLElement;
      const state = getState(container);
      const box = container.querySelector<HTMLElement>("[data-draw-line-box]");
      const path = state.activePath;

      if (!box || !path) {
        return;
      }

      const playOut = () => {
        if (state.leaveTween?.isActive()) {
          return;
        }

        state.leaveTween = gsap.to(path, {
          strokeDashoffset: state.activeLength ?? path.getTotalLength(),
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            state.leaveTween = null;
            box.innerHTML = "";
            state.activePath = null;
            state.activeLength = null;
          },
        });
      };

      if (state.enterTween?.isActive()) {
        state.enterTween.eventCallback("onComplete", playOut);
      } else {
        playOut();
      }
    };

    links.forEach((link) => {
      const box = link.querySelector<HTMLElement>("[data-draw-line-box]");

      if (!box) {
        return;
      }

      link.addEventListener("mouseenter", handleEnter);
      link.addEventListener("mouseleave", handleLeave);
      link.addEventListener("focus", handleEnter);
      link.addEventListener("blur", handleLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleEnter);
        link.removeEventListener("mouseleave", handleLeave);
        link.removeEventListener("focus", handleEnter);
        link.removeEventListener("blur", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    const overlay = overlayRef.current;
    const topLine = topLineRef.current;
    const bottomLine = bottomLineRef.current;

    if (!panel || !overlay || !topLine || !bottomLine) {
      return;
    }

    const sideLinks = Array.from(
      panel.querySelectorAll<HTMLElement>(".ds-navbar-side-link"),
    );

    gsap.set([topLine, bottomLine], { transformOrigin: "center" });
    gsap.set(panel, { yPercent: -100, xPercent: 0 });
    gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
    gsap.set(sideLinks, { opacity: 0, y: -10 });

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    gsap.to(panel, {
      yPercent: isOpen ? 0 : -100,
      duration: 0.6,
      ease: "power3.out",
      overwrite: true,
    });
    gsap.to(overlay, {
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
    gsap.to(sideLinks, {
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : -10,
      duration: 0.4,
      ease: "power2.out",
      stagger: isOpen ? 0.05 : 0,
      overwrite: true,
    });
    gsap.to(topLine, {
      y: isOpen ? 6 : 0,
      rotate: isOpen ? 45 : 0,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
    gsap.to(bottomLine, {
      y: isOpen ? -6 : 0,
      rotate: isOpen ? -45 : 0,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });

    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="ds-navbar-wrap">
      <nav className="ds-navbar" aria-label="Primary">
        <div className="ds-navbar-logo">
          <Image
            src="/assets/logo.webp"
            alt="Elementum Logo"
            width={150}
            height={38}
            priority
            style={{ height: "auto" }}
          />
        </div>

        <div className="ds-navbar-menu" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a className="ds-navbar-link" href="#" key={item} data-draw-line>
              <span className="ds-navbar-link-label">{item}</span>
              <div className="ds-navbar-link-box" data-draw-line-box />
            </a>
          ))}
        </div>

        <button
          className="ds-navbar-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span ref={topLineRef} className="ds-navbar-toggle-line" />
          <span ref={bottomLineRef} className="ds-navbar-toggle-line" />
        </button>
      </nav>

      <button
        ref={overlayRef}
        className="ds-navbar-overlay"
        type="button"
        aria-label="Close menu overlay"
        onClick={closeMenu}
      />

      <aside ref={panelRef} className="ds-navbar-side" aria-label="Mobile menu">
        <div className="ds-navbar-side-header">
          <span className="ds-navbar-side-label">Menu</span>
          <button
            className="ds-navbar-side-close"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="ds-navbar-side-links">
          {navItems.map((item) => (
            <a
              className="ds-navbar-side-link ds-navbar-link"
              href="#"
              key={item}
              data-draw-line
              onClick={closeMenu}
            >
              <span className="ds-navbar-link-label">{item}</span>
              <div className="ds-navbar-link-box" data-draw-line-box />
            </a>
          ))}
        </div>
      </aside>
    </header>
  );
}
