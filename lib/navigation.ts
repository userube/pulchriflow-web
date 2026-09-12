export const marketingNavigation = [
  { href: "/features", label: "Features" },
  { href: "/workflow", label: "How it works" },
  { href: "/pricing", label: "Pricing" }
] as const;

export const footerNavigation = {
  product: marketingNavigation,
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
