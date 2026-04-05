import Image from "next/image";
import { sectionOffers } from "../../data/home-content";

export default function SectionTwo() {
  return (
    <section className="ds-section2" aria-label="Section 2">
      <div className="ds-s2-row">
        <div className="ds-s2-heading-block">
          <h2 className="ds-s2-heading ds-s2-heading--tomorrow">
            <span className="ds-s2-underline">
              Tomorrow
              <Image
                src="/assets/herosection/yellowmarkerunderline.webp"
                alt=""
                width={260}
                height={14}
                style={{ height: "auto", width: "auto" }}
              />
            </span>{" "}
            should
            <br />
            be better than <span className="ds-s2-highlight">today</span>
          </h2>
          <span className="ds-s2-tomorrow-circle" aria-hidden="true" />
          <p className="ds-s2-para">
            We are a team of strategists, designers communicators, researchers.
            Togeither, we belive that progress only happens when you refuse to
            play things safe.
          </p>
          <div className="ds-s2-readmore-wrap">
            <a className="ds-s2-readmore" href="#">
              Read more
            </a>
          </div>
        </div>

        <div className="ds-s2-image-wrap">
          <div className="ds-s2-big-vector--section1" aria-hidden="true">
            <Image
              src="/assets/section 2/big vector.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 1440px"
              className="ds-s2-big-vector-img"
            />
          </div>
          <div className="ds-s2-red-square" />
          <div className="ds-s2-image-circle">
            <Image
              src="/assets/section 2/image 348.webp"
              alt="Collaborative work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="ds-s2-row ds-s2-row--progress">
        <div className="ds-s2-image-wrap">
          <Image
            src="/assets/section 2/orange triangle.webp"
            alt=""
            width={200}
            height={200}
            className="ds-s2-triangle ds-s2-triangle--top"
            style={{ height: "auto", width: "auto" }}
          />
          <div className="ds-s2-image-circle">
            <Image
              src="/assets/section 2/image 348 (1).webp"
              alt="Action and progress"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <Image
            src="/assets/section 2/orange triangle.webp"
            alt=""
            width={200}
            height={200}
            className="ds-s2-triangle ds-s2-triangle--bottom"
            style={{ height: "auto", width: "auto" }}
          />
        </div>

        <div>
          <h2 className="ds-s2-heading">
            <span className="ds-s2-highlight ds-s2-highlight--green">See</span>{" "}
            how we can
            <br />
            help you{" "}
            <span className="ds-s2-underline">
              progress
              <Image
                src="/assets/herosection/yellowmarkerunderline.webp"
                alt=""
                width={260}
                height={14}
                style={{ height: "auto", width: "auto" }}
              />
            </span>
          </h2>
          <p className="ds-s2-para">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <div className="ds-s2-readmore-wrap">
            <a className="ds-s2-readmore" href="#">
              Read more
            </a>
          </div>
        </div>
      </div>

      <div className="ds-s2-offer">
        <h2 className="ds-s2-heading ds-s2-heading--vector">
          <span className="ds-s2-heading-text">
            What we <span className="ds-s2-highlight">can</span>
            <br />
            <span className="ds-s2-underline">
              offer
              <Image
                src="/assets/herosection/yellowmarkerunderline.webp"
                alt=""
                width={225}
                height={14}
                style={{ height: "auto", width: "auto" }}
              />
            </span>{" "}
            you!
          </span>
          <Image
            src="/assets/section 2/whatwecandovector.webp"
            alt=""
            width={1728}
            height={837}
            className="ds-s2-offer-vector"
            aria-hidden="true"
            style={{ height: "auto", width: "auto" }}
          />
        </h2>

        <div className="ds-s2-offer-list">
          {sectionOffers.map((offer) => (
            <div className="ds-s2-offer-row" key={offer.title}>
              <p className="ds-s2-offer-left">{offer.left}</p>
              <div className="ds-s2-offer-title-wrap">
                <p className="ds-s2-offer-title">{offer.title}</p>
                <span
                  className="ds-s2-offer-arrow"
                  style={{ cursor: "pointer" }}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
