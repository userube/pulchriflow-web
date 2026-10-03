export const marketingNavigation = [
  { href: "/features", label: "Features" },
  { href: "/retail", label: "Retail" },
  { href: "/service-businesses", label: "Services" },
  { href: "/workflow", label: "How it works" },
  { href: "/pricing", label: "Pricing" }
] as const;

export const footerNavigation = {
  product: [
    ...marketingNavigation,
    { href: "/restaurants", label: "Restaurants" },
    { href: "/supermarkets", label: "Supermarkets" },
    { href: "/saved-items", label: "Saved Items" },
    { href: "/customer-hub", label: "Customer Hub" }
  ],
  company: [
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Journal" }
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" }
  ]
} as const;
