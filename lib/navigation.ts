export type NavLink = { href: string; label: string; description?: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const solutionLinks: NavLink[] = [
  { href: "/retail", label: "Retail", description: "Catalogue, storefront and payments" },
  { href: "/service-businesses", label: "Services", description: "Selling time and skill, not stock" },
  { href: "/restaurants", label: "Restaurants", description: "Menus, counter and online orders" },
  { href: "/supermarkets", label: "Supermarkets", description: "Aisles, baskets and delivery" }
];

export const primaryNavigation: NavItem[] = [
  { href: "/features", label: "Features" },
  { label: "Solutions", children: solutionLinks },
  { href: "/workflow", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/setup", label: "Setup service" },
  { href: "/blog", label: "Journal" }
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/quick-sale", label: "Quick Sale" },
      { href: "/checkout-links", label: "Checkout links" },
      { href: "/online-store", label: "Online store" },
      { href: "/invoices", label: "Invoices" },
      { href: "/receipts", label: "Receipts" },
      { href: "/pricing", label: "Pricing" }
    ]
  },
  { title: "Solutions", links: solutionLinks.map(({ href, label }) => ({ href, label })) },
  {
    title: "Resources",
    links: [
      { href: "/workflow", label: "How it works" },
      { href: "/blog", label: "Journal" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/refund", label: "Refund policy" }
    ]
  }
];

/** Query parameters carried from the marketing site into the merchant app on sign-up links. */
export const preservedParams = "utm_source,utm_medium,utm_campaign,utm_content,utm_term,ref,promo";

export function isActive(pathname: string, item: NavItem) {
  if ("children" in item) return item.children.some((child) => pathname.startsWith(child.href));
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
