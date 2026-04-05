import Image from "next/image";
import { heroPeople } from "../../data/home-content";

export default function HeroSection() {
  return (
    <main className="ds-hero" aria-label="Hero section">
      <div className="ds-hero-ribbons" aria-hidden="true">
        <Image
          src="/assets/herosection/skincolorribbin.webp"
          alt=""
          width={70}
          height={252}
          className="ds-hero-ribbon-skin"
          style={{ height: "auto", width: "auto" }}
        />
        <Image
          src="/assets/herosection/blackribbgin.webp"
          alt=""
          width={70}
          height={252}
          className="ds-hero-ribbon-black"
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      <section className="ds-hero-title-wrap">
        <span className="ds-hero-purple-semi" aria-hidden="true" />
        <h1 className="ds-hero-title js-hero-title-reveal">
          <span className="ds-hero-title-mask">
            <span className="ds-hero-title-line">
              The{" "}
              <span className="ds-hero-thinkers">
                thinkers
                <Image
                  src="/assets/herosection/yellowmarkerunderline.webp"
                  alt=""
                  width={250}
                  height={13}
                  className="ds-hero-thinkers-under"
                  style={{ height: "auto", width: "auto" }}
                />
              </span>{" "}
              and doers were{" "}
              <span className="ds-hero-changing">
                changing
                <span className="ds-hero-changing-pill" aria-hidden="true" />
              </span>
            </span>
          </span>
          <span className="ds-hero-title-mask">
            <span className="ds-hero-title-line">
              the{" "}
              <span className="ds-hero-status">
                status
                <span className="ds-hero-status-pill" aria-hidden="true" />
              </span>{" "}
              Quo with
            </span>
          </span>
        </h1>
      </section>

      <p className="ds-hero-para">
        We are a team of strategists, designers communicators, and leaders.
        Together, we belive that progress only hghappens when you refuse to play
        things safe.
      </p>

      <section className="ds-hero-people" aria-label="Team">
        {heroPeople.map((person) => (
          <div
            className={`ds-hero-person-wrap ${person.className}`}
            key={person.id}
          >
            <div className="ds-hero-person">
              <Image
                src={person.src}
                alt="Team member"
                fill
                sizes={person.sizes}
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
