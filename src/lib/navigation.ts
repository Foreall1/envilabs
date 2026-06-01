export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/toepassingen", label: "Toepassingen" },
  { href: "/trainingen", label: "Trainingen" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Aanbod",
    items: [
      { href: "/toepassingen", label: "Digitale toepassingen" },
      { href: "/trainingen", label: "Trainingen & opleiding" },
    ],
  },
  {
    title: "Bedrijf",
    items: [
      { href: "/over-ons", label: "Over ons" },
      { href: "/contact", label: "Neem contact op" },
    ],
  },
  {
    title: "Juridisch",
    items: [
      { href: "/privacy", label: "Privacy" },
      { href: "/verwerkersovereenkomst", label: "Verwerkersovereenkomst" },
      { href: "/toegankelijkheid", label: "Toegankelijkheid" },
    ],
  },
];
