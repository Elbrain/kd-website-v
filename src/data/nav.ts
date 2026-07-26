export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNav: NavItem[] = [
  { label: "The Gym", href: "/gym/" },
  {
    // Label reads "Services" (client's menu); URL/dropdown unchanged.
    label: "Services",
    href: "/personal-training/",
    children: [
      { label: "1 to 1 Training", href: "/1-to-1-training/" },
      { label: "Couples Training", href: "/couples-training/" },
      { label: "Sport Rehabilitation", href: "/sport-rehabilitation/" },
      { label: "Fitness for 50+", href: "/fitness-for-50/" },
      { label: "Perimenopause Training", href: "/perimenopause-training/" },
    ],
  },
  { label: "Packages", href: "/pricing-plans/" },
  { label: "Rooms to Rent", href: "/rooms-to-rent/" },
  { label: "About", href: "/about-us/" },
  // Label reads "Academy" (client's menu); the /blog/ route is unchanged.
  { label: "Academy", href: "/blog/" },
];

export const footerNav = {
  training: [
    { label: "Personal Training", href: "/personal-training/" },
    { label: "1 to 1 Training", href: "/1-to-1-training/" },
    { label: "Couples Training", href: "/couples-training/" },
    { label: "Sport Rehabilitation", href: "/sport-rehabilitation/" },
    { label: "Fitness for 50+", href: "/fitness-for-50/" },
    { label: "Perimenopause Training", href: "/perimenopause-training/" },
    { label: "Pricing", href: "/pricing-plans/" },
    { label: "Results & Reviews", href: "/results/" },
  ],
  building: [
    { label: "The Gym", href: "/gym/" },
    { label: "Rooms to Rent", href: "/rooms-to-rent/" },
    { label: "Treatment Rooms", href: "/rooms-to-rent/treatment-rooms/" },
    { label: "Office Rooms", href: "/rooms-to-rent/office-rooms/" },
    { label: "Studio Hire for PTs", href: "/gym-rent/" },
    { label: "Find Us", href: "/location/" },
  ],
  company: [
    { label: "About", href: "/about-us/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/contact-us/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Use", href: "/terms/" },
    { label: "Cookie Policy", href: "/cookie-policy/" },
  ],
};
