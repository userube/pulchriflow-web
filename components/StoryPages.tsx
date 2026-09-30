import Link from "next/link";
import { ArrowRight, Check, CircleCheck, CreditCard, FileText, Link2, ShoppingBag, Store, Users } from "lucide-react";
import { appLink } from "../lib/config";
import type { PlanPrice } from "../lib/pricing";
import { formatPrice, formatStandardPrice } from "../lib/pricing";
import Footer from "./Footer";
import Header from "./Header";

const cta = <a className="proof-button proof-button-primary" href={appLink("/register")}>Start Free <ArrowRight size={17} /></a>;

function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="product-hero story-page-hero"><div className="marketing-container"><p className="proof-eyebrow"><span /> {eyebrow}</p><h1>{title}</h1><p>{copy}</p>{cta}</div></section>;
}

export function FeaturesStoryPage() {
  const rows = [[ShoppingBag, "Sell at the counter", "Record a quick sale when the customer is in front of you."], [Link2, "Checkout Links", "Create a payment link when a buyer is ready in a conversation."], [Store, "Online Store", "Give customers a place to browse and order when they want to self-serve."], [FileText, "Invoices and receipts", "Create an invoice for an agreed sale, record payment, and keep the receipt with it."], [Users, "Wholesale price requests", "For quantity-based selling, let buyers ask for a price and review the request in PulchriFlow."], [CreditCard, "Business records", "Orders, payments, customers, and products stay connected after the sale."]];
  return <div className="proof-page story-page"><Header /><main><PageHero eyebrow="THE COMMERCE SYSTEM" title="More ways to sell. One place to run it." copy="PulchriFlow is not another channel to manage. It is the business layer beneath the places your customers already buy from." /><section className="feature-story-list"><div className="marketing-container">{rows.map(([Icon, title, copy], index) => <article key={title as string}><span>0{index + 1}</span><Icon size={25} /><div><h2>{title as string}</h2><p>{copy as string}</p></div><Link href={index === 0 ? "/quick-sale" : index === 1 ? "/checkout-links" : index === 2 ? "/online-store" : index === 3 ? "/invoices" : index === 4 ? "/features#wholesale" : "/receipts"}><ArrowRight size={18} /></Link></article>)}</div></section><section id="wholesale" className="product-benefits"><div className="marketing-container"><div><p className="proof-eyebrow"><span /> WHOLESALE</p><h2>Let buyers ask for your price.</h2></div><ul>{["Products can support minimum order quantities", "Buyers can submit a price request", "Merchants can review wholesale requests in PulchriFlow"].map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul></div></section><section className="story-final"><div className="marketing-container"><p className="proof-eyebrow"><span /> PULCHRIFLOW</p><h2>The work behind a sale should not be a second job.</h2>{cta}</div></section></main><Footer /></div>;
}

export function WorkflowStoryPage() {
  const steps = [["A buyer is ready", "A customer finds you at the counter, in a conversation, or through your store."], ["Choose the right sale flow", "Use Quick Sale, a checkout link, or a storefront order without changing how you run the business."], ["Keep the payment clear", "Record payment, send an invoice when needed, and keep the receipt with the transaction."], ["See what happened", "Orders, customers, and the day’s activity return to one business record."]];
  return <div className="proof-page story-page"><Header /><main><PageHero eyebrow="HOW IT WORKS" title="Every sale starts somewhere. The business stays together." copy="PulchriFlow follows the way modern small businesses actually sell, then brings the detail back into a clear operating view." /><section className="workflow-story"><div className="marketing-container">{steps.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{copy}</p></div>{index < steps.length - 1 && <ArrowRight size={20} />}</article>)}</div></section><section className="product-benefits"><div className="marketing-container"><div><p className="proof-eyebrow"><span /> WHAT STAYS CONNECTED</p><h2>The order, the payment, and the next action.</h2></div><ul>{["Counter sales and online orders", "Payments, invoices, and receipts", "Customers and their order history"].map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul></div></section><section className="story-final"><div className="marketing-container"><p className="proof-eyebrow"><span /> GET STARTED</p><h2>Bring the flow back to your business.</h2>{cta}</div></section></main><Footer /></div>;
}

export function PricingStoryPage({ prices }: { prices: PlanPrice[] }) {
  const free = prices.find((price) => price.plan.includes("FREE"));
  const pro = prices.find((price) => price.plan.includes("MONTHLY")) ?? prices[0];
  const quarterly = prices.find((price) => price.plan.includes("QUARTERLY"));
  const yearly = prices.find((price) => price.plan.includes("YEARLY"));
  const proPrice = pro ? formatPrice(pro) : "₦3,000";
  const proRegularPrice = formatStandardPrice(pro);
  const proBenefits = [
    "Unlimited orders",
    "Everything in Free",
    "Customer management and analytics",
    "Advanced order management",
    "Store management features",
    "Custom domain",
    "Remove PulchriFlow branding",
    "Sabi business assistant and notifications"
  ];
  const plans = [
    {
      name: "Free",
      billing: "Start selling before you pay.",
      price: free ? formatPrice(free) : "₦0",
      copy: "Your first 10 orders are on us. Build your store, share your link and experience PulchriFlow with real customers.",
      benefits: [
        "Your own online storefront",
        "Add and manage products",
        "WhatsApp checkout",
        "Online checkout where supported",
        "Order management",
        "Quick Sale, checkout links, invoices and receipts",
        "First 10 orders free"
      ],
      cta: "Start selling free",
      note: "No card required.",
      href: appLink("/register")
    },
    {
      name: "Pro",
      billing: "Most popular",
      regularPrice: proRegularPrice,
      saving: "50% promotional offer",
      price: proPrice,
      copy: "Keep selling without limits.",
      benefits: proBenefits,
      cta: "Upgrade to Pro",
      note: `Current promotional price. Regular price ${proRegularPrice}/month.`,
      href: appLink("/register?plan=pro-monthly")
    },
    {
      name: "Build Momentum",
      billing: "Every 3 months",
      price: quarterly ? formatPrice(quarterly) : "₦8,550",
      copy: "The same Pro tools, with a little more room to focus on the business.",
      benefits: proBenefits,
      cta: "Choose Quarterly",
      href: appLink("/register?plan=pro-quarterly")
    },
    {
      name: "Go Further",
      billing: "Billed yearly",
      price: yearly ? formatPrice(yearly) : "₦32,400",
      copy: "The full Pro toolkit for businesses building for the long run.",
      benefits: proBenefits,
      cta: "Choose Yearly",
      href: appLink("/register?plan=pro-yearly")
    }
  ];

  return <div className="proof-page story-page"><Header /><main><PageHero eyebrow="SIMPLE PRICING" title="Start selling before you pay." copy="Create your store for free. Upgrade only after you've received your first 10 orders." /><section className="pricing-story"><div className="marketing-container">{plans.map((plan, index) => <article className={index === 1 ? "featured" : ""} key={plan.name}><p>{plan.name}</p><small className="pricing-plan-billing">{plan.billing}</small>{plan.regularPrice && <small className="pricing-plan-billing"><s>{plan.regularPrice}</s></small>}<h2>{plan.price}<small>{index === 1 ? " / month" : ""}</small></h2>{plan.saving && <strong className="pricing-plan-saving">{plan.saving}</strong>}<span>{plan.copy}</span><ul>{plan.benefits.map((item) => <li key={item}><CircleCheck size={17} />{item}</li>)}</ul><a className={index === 1 ? "proof-button proof-button-primary" : "proof-button proof-button-secondary"} href={plan.href}>{plan.cta} <ArrowRight size={16} /></a>{plan.note && <small className="pricing-plan-billing">{plan.note}</small>}</article>)}</div></section><section className="story-final"><div className="marketing-container"><p className="proof-eyebrow"><span /> PULCHRIFLOW</p><h2>Start selling with a clearer record of the business.</h2>{cta}</div></section></main><Footer /></div>;
}
