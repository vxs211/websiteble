"use client";

import Image from "next/image";
import { useState } from "react";
import { footerColumns } from "../../data/home-content";

export default function FooterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    setIsSubmitting(true);
    try {
      // Add your subscription logic here
      console.log("Subscribing");
      alert("Successfully subscribed!");
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="ds-footer" aria-label="Footer">
      <div className="ds-footer-topline" aria-hidden="true" />

      <section className="ds-footer-cta">
        <Image
          src="/assets/footer/footer arrow.webp"
          alt=""
          aria-hidden="true"
          width={118}
          height={118}
          className="ds-footer-arrow"
          style={{ height: "auto", width: "auto" }}
        />
        <Image
          src="/assets/footer/footer arrow.webp"
          alt=""
          aria-hidden="true"
          width={118}
          height={118}
          className="ds-footer-arrow ds-footer-arrow--two"
          style={{ height: "auto", width: "auto" }}
        />

        <h2 className="ds-footer-heading">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="ds-footer-subheading">
          To make your stay special and even more memorable
        </p>
        <button
          className="ds-footer-btn"
          type="button"
          onClick={handleSubscribe}
          disabled={isSubmitting}
          style={{ cursor: "pointer" }}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe Now"}
        </button>
      </section>

      <div className="ds-footer-divider" />

      <section className="ds-footer-links">
        {footerColumns.map((column) => (
          <div key={`${column.title}-${column.items[0]}`}>
            <h3 className="ds-footer-col-title">{column.title}</h3>
            <ul className="ds-footer-list">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p className="ds-footer-copy">©2023 Elementum. All rights reserved</p>
    </footer>
  );
}
