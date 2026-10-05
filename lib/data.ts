// Sample product UI data for the landing page mockups. Swap for real copy before launch.

export const channels = ["In person", "WhatsApp", "Instagram", "Payment links", "Online store"];

export const hourlySales: [counter: number, online: number][] = [
  [20, 8], [34, 14], [48, 20], [40, 28], [30, 22], [56, 30],
  [62, 36], [44, 40], [36, 46], [50, 38], [28, 30], [18, 16],
];

export const activity = [
  { init: "QS", tint: "#D5F0E8", title: "Quick Sale", via: "Counter · Cash", amt: "₦12,500", status: "Paid", color: "#106B5F" },
  { init: "CK", tint: "#E5F3EF", title: "Chioma K.", via: "Checkout link · Transfer", amt: "₦56,000", status: "Paid", color: "#106B5F" },
  { init: "BA", tint: "#E5F3EF", title: "Order #1042", via: "Storefront · Card", amt: "₦31,200", status: "Packing", color: "#285BBA" },
  { init: "EN", tint: "#EEF4F0", title: "Emeka N.", via: "Checkout link", amt: "₦18,000", status: "Awaiting", color: "#D79B26" },
];

export const products = [
  { name: "Black tote", price: "₦28,000", bg: "#06241F", ink: "#65716D", tag: "Low stock" },
  { name: "Linen set", price: "₦31,200", bg: "#CFE6E0", ink: "#5FA597" },
  { name: "Sage clutch", price: "₦19,500", bg: "#B7DDD3", ink: "#3F8878", tag: "New" },
  { name: "Clay bucket", price: "₦24,000", bg: "#9FD0C5", ink: "#4F9C8E" },
  { name: "Ivory mini", price: "₦16,800", bg: "#EEF4F0", ink: "#8FB5AD" },
  { name: "Forest shopper", price: "₦26,500", bg: "#106B5F", ink: "#A6DDD0" },
];

export const ledger = [
  { who: "Walk-in customer", ch: "Quick Sale", bg: "rgba(250, 249, 245,0.12)", fg: "#FAF9F5", amt: "₦12,500" },
  { who: "Chioma K.", ch: "Checkout link", bg: "#7FD8C6", fg: "#09221D", amt: "₦56,000" },
  { who: "Bola A.", ch: "Storefront", bg: "#2A8576", fg: "#FFFFFF", amt: "₦31,200" },
  { who: "Tolu O.", ch: "Quick Sale", bg: "rgba(250, 249, 245,0.12)", fg: "#FAF9F5", amt: "₦8,400" },
];

export const week: [height: number, label: string][] = [
  [38, "M"], [52, "T"], [44, "W"], [60, "T"], [72, "F"], [100, "S"], [48, "S"],
];

export const updates = [
  { tag: "New", title: "Ask Sabi about your best customers" },
  { tag: "Improved", title: "Share receipts the moment a Quick Sale completes" },
  { tag: "New", title: "Checkout links with quantities and delivery options" },
  { tag: "Improved", title: "Storefront orders now arrive with customer details" },
];

export const articles = [
  { cat: "Payments", title: "Getting paid before you deliver, without the awkward chat", read: "6 min read", bg: "#09221D", ring: "rgba(127, 216, 198,0.3)", fg: "#7FD8C6", mark: "₦" },
  { cat: "Customer follow-up", title: "Turning one-time buyers into regulars", read: "5 min read", bg: "#7FD8C6", ring: "rgba(9, 34, 29,0.25)", fg: "#09221D", mark: "↺" },
  { cat: "Storefronts", title: "What to put on your storefront first", read: "4 min read", bg: "#CFE6E0", ring: "rgba(9, 34, 29,0.18)", fg: "#106B5F", mark: "◐" },
];
