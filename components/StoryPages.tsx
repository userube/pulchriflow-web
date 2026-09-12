import Link from "next/link";
import { ArrowRight, Check, CircleCheck, CreditCard, FileText, Link2, ShoppingBag, Store, Users } from "lucide-react";
import { appLink } from "../lib/config";
import type { PlanPrice } from "../lib/pricing";
import { formatPrice } from "../lib/pricing";
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
  const proBenefits = [
    "One storefront and social sharing",
    "Unlimited products and up to 10 images per product",
    "Quick Sale, checkout links, invoices and receipts",
    "WhatsApp checkout and advanced order management",
    "Customer management and analytics",
    "Pulchi business assistant and notifications",
    "PWA access and remove PulchriFlow branding",
    "Premium store themes",
    "Paystack checkout",
    "Custom domain included"
  ];
  const plans = [
    {
      name: "Start Selling",
      billing: "Free plan",
      price: free ? formatPrice(free) : "₦0",
      copy: "Everything you need to begin selling and keep each sale organised.",
      benefits: [
        "One storefront and social sharing",
        "Up to 30 active products",
        "Up to 3 images per product",
        "Quick Sale, checkout links, invoices and receipts",
        "WhatsApp checkout and manual transfer orders",
        "Paystack checkout",
        "Basic order management and public order tracking",
        "Custom domain support",
        "PulchriFlow branding included"
      ],
      cta: "Start Free",
      href: appLink("/register")
    },
    {
      name: "Grow Steadily",
      billing: "Billed monthly",
      price: pro ? formatPrice(pro) : "₦3,000",
      copy: "For businesses ready for deeper visibility, control and a more tailored store.",
      benefits: proBenefits,
      cta: "Choose Monthly",
      href: appLink("/register?plan=pro-monthly")
    },
    {
      name: "Build Momentum",
      billing: "Every 3 months",
      saving: "Save ₦450 · 5% off",
      price: quarterly ? formatPrice(quarterly) : "₦8,550",
      copy: "The same Pro tools, with a little more room to focus on the business.",
      benefits: proBenefits,
      cta: "Choose Quarterly",
      href: appLink("/register?plan=pro-quarterly")
    },
    {
      name: "Go Further",
      billing: "Billed yearly",
      saving: "Save ₦3,600 · 10% off",
      price: yearly ? formatPrice(yearly) : "₦32,400",
      copy: "The full Pro toolkit for businesses building for the long run.",
      benefits: proBenefits,
      cta: "Choose Yearly",
      href: appLink("/register?plan=pro-yearly")
    }
  ];

  return <div className="proof-page story-page"><Header /><main><PageHero eyebrow="SIMPLE PRICING" title="Start where you are. Grow when you need more." copy="Start free with the ways you already sell. Every paid option includes the same Pro toolkit; choose the billing rhythm that fits your business." /><section className="pricing-story"><div className="marketing-container">{plans.map((plan, index) => <article className={index === 2 ? "featured" : ""} key={plan.name}><p>{plan.name}</p><small className="pricing-plan-billing">{plan.billing}</small><h2>{plan.price}</h2>{plan.saving && <strong className="pricing-plan-saving">{plan.saving}</strong>}<span>{plan.copy}</span><ul>{plan.benefits.map((item) => <li key={item}><CircleCheck size={17} />{item}</li>)}</ul><a className={index === 2 ? "proof-button proof-button-primary" : "proof-button proof-button-secondary"} href={plan.href}>{plan.cta} <ArrowRight size={16} /></a></article>)}</div></section><section className="story-final"><div className="marketing-container"><p className="proof-eyebrow"><span /> PULCHRIFLOW</p><h2>Start selling with a clearer record of the business.</h2>{cta}</div></section></main><Footer /></div>;
}
