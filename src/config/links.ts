export type SiteLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: SiteLink[] = [
  { href: "/photo-gallery", label: "Fotogalerie" },
  { href: "/photos-from-trips", label: "Fotky z výletů" },
  { href: "/our-horses", label: "Naši koně" },
  { href: "/about-us", label: "O nás" },
  { href: "/about-our-homestead", label: "O našem statku" },
  { href: "/contact", label: "Kontakt" },
];