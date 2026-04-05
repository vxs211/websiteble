export type HeroPerson = {
  id: number;
  className: string;
  src: string;
  sizes: string;
};

export type SectionOffer = {
  left: string;
  title: string;
};

export type TestimonialAvatar = {
  id: number;
  className: string;
  src: string;
  sizes: string;
};

export type FooterColumn = {
  title: string;
  items: string[];
};

export const heroPeople: HeroPerson[] = [
  {
    id: 1,
    className: "ds-hp-1",
    src: "/assets/herosection/pp2.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 180px",
  },
  {
    id: 2,
    className: "ds-hp-2",
    src: "/assets/herosection/pp3.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 200px",
  },
  {
    id: 3,
    className: "ds-hp-3",
    src: "/assets/herosection/pp4.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 180px",
  },
  {
    id: 4,
    className: "ds-hp-4",
    src: "/assets/herosection/pp5.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 180px",
  },
  {
    id: 5,
    className: "ds-hp-5",
    src: "/assets/herosection/pp6.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 200px",
  },
  {
    id: 6,
    className: "ds-hp-6",
    src: "/assets/herosection/pp7.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 210px",
  },
  {
    id: 7,
    className: "ds-hp-7",
    src: "/assets/herosection/pp8.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 180px",
  },
  {
    id: 8,
    className: "ds-hp-8",
    src: "/assets/herosection/pp9.webp",
    sizes: "(max-width: 768px) 140px, (max-width: 1200px) 160px, 180px",
  },
];

export const sectionOffers: SectionOffer[] = [
  {
    left: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    left: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    left: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export const testimonialAvatars: TestimonialAvatar[] = [
  {
    id: 1,
    className: "ds-t-a1",
    src: "/assets/testimonials/Ellipse 263.webp",
    sizes: "100px",
  },
  {
    id: 2,
    className: "ds-t-a2",
    src: "/assets/testimonials/Ellipse 264.webp",
    sizes: "150px",
  },
  {
    id: 3,
    className: "ds-t-a3",
    src: "/assets/testimonials/Ellipse 265.webp",
    sizes: "100px",
  },
  {
    id: 4,
    className: "ds-t-a4",
    src: "/assets/testimonials/Ellipse 266.webp",
    sizes: "200px",
  },
  {
    id: 5,
    className: "ds-t-a5",
    src: "/assets/testimonials/Ellipse 267.webp",
    sizes: "100px",
  },
  {
    id: 6,
    className: "ds-t-a6",
    src: "/assets/testimonials/Ellipse 268.webp",
    sizes: "150px",
  },
  {
    id: 7,
    className: "ds-t-a7",
    src: "/assets/testimonials/Ellipse 269.webp",
    sizes: "120px",
  },
  {
    id: 8,
    className: "ds-t-a8",
    src: "/assets/testimonials/Ellipse 270.webp",
    sizes: "120px",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    items: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    items: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
  },
  {
    title: "Follow Us",
    items: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    title: "Terms & Policies",
    items: [
      "1498w Fulton ste, STE 2D Chcigo, IL 63867.",
      "(123) 456789000",
      "info@elementum.com",
    ],
  },
];
