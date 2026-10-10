export const SETUP_FEE = Number(process.env.NEXT_PUBLIC_SETUP_FEE || 10000);

export const SETUP_SUPPORT_EMAIL = "support@pulchriflow.com";

export function naira(amount: number) {
  return `₦${Math.round(amount).toLocaleString("en-NG")}`;
}

export const setupIncluded = [
  "We collect your business information",
  "We upload your products",
  "We configure your storefront and branding",
  "We set up WhatsApp ordering",
  "We help you get started",
];

/** Values the setup request API accepts for businessType. */
export const businessTypes: { value: string; label: string }[] = [
  { value: "FASHION", label: "Fashion and clothing" },
  { value: "BEAUTY", label: "Beauty and skincare" },
  { value: "PERFUME", label: "Perfume and fragrance" },
  { value: "FOOD", label: "Food and drinks" },
  { value: "RESTAURANT", label: "Restaurant" },
  { value: "SUPERMARKET", label: "Supermarket and groceries" },
  { value: "SERVICES", label: "Services" },
  { value: "TRAVEL", label: "Travel" },
  { value: "OTHER", label: "Something else" },
];

export type SetupRequest = {
  fullName: string;
  businessName: string;
  email: string;
  whatsappPhone: string;
  businessType: string;
  preferredSlug: string;
  hasProductPhotos: boolean;
  notes: string;
  packageCode: string;
};
