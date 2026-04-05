import Image from "next/image";
import { testimonialAvatars } from "../../data/home-content";

export default function TestimonialsSection() {
  return (
    <section className="ds-testimonials" aria-label="Testimonials">
      <h2 className="ds-t-heading">
        <span className="ds-t-highlight">What</span> our customer
        <br />
        says{" "}
        <span className="ds-s2-underline">
          About Us
          <Image
            src="/assets/herosection/yellowmarkerunderline.webp"
            alt=""
            width={250}
            height={14}
            style={{ height: "auto" }}
          />
        </span>
      </h2>

      <div className="ds-t-avatars" aria-hidden="true">
        {testimonialAvatars.map((avatar) => (
          <div className={`ds-t-avatar ${avatar.className}`} key={avatar.id}>
            <Image src={avatar.src} alt="" fill sizes={avatar.sizes} />
          </div>
        ))}
      </div>

      <article className="ds-t-quote-box">
        <Image
          src="/assets/comma.webp"
          alt=""
          width={48}
          height={36}
          className="ds-t-quote-mark ds-t-quote-mark--open"
          style={{ width: "auto" }}
        />
        <p className="ds-t-quote-text">
          Elementum delivered the site with in the timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that the company hasn`t used, which have also proved to
          be easy to use and reliable
        </p>
        <Image
          src="/assets/comma.webp"
          alt=""
          width={48}
          height={36}
          className="ds-t-quote-mark ds-t-quote-mark--close"
          style={{ width: "auto" }}
        />
      </article>
    </section>
  );
}
