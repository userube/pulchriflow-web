import {
  ArrowUpRight, Bot, CheckCircle2, ChevronDown, CreditCard, Globe2, Mail,
  MessageCircle, Package, Rocket, ShoppingCart, Store, Users, X
} from "lucide-react";
import Link from "next/link";
import { appLink } from "../lib/config";
import AnchorScroller from "./AnchorScroller";
import BrandLogo from "./BrandLogo";

const appParams = "utm_source,utm_medium,utm_campaign,utm_content,utm_term,ref,promo";
const signup = (path = "/register") => ({ href: appLink(path), "data-preserve-params": appParams });

function SpringScreenMock() {
  return (
    <div className="screen-shell">
      <div className="screen-topbar"><span /><span /><span /></div>
      <div className="screen-grid">
        <aside className="screen-sidebar">
          <div className="mini-logo"><img src="/pulchriflow-logo.svg" alt="PulchriFlow" /></div>
          <div className="side-line strong" /><div className="side-line" /><div className="side-line" /><div className="side-line short" />
        </aside>
        <div className="screen-content">
          <div className="metrics-row">
            <div className="metric-tile"><small>Today</small><strong>₦246k</strong></div>
            <div className="metric-tile accent"><small>Orders</small><strong>38</strong></div>
            <div className="metric-tile warm"><small>Customers</small><strong>812</strong></div>
          </div>
          <div className="order-board">
            {[["a1", "Ada Foods", "Paid"], ["a2", "Grace Fabrics", "Ready"], ["a3", "Bloom Beauty", "New"]].map(([a, n, s]) => (
              <div className="order-row" key={a}><strong>{n}</strong><span>{s}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage({ initialAnchor }: { initialAnchor?: "features" | "workflow" | "pricing" }) {
  const proFeatures = ["1 storefront", "Unlimited products", "Up to 10 images per product", "WhatsApp checkout", "Advanced order management", "Customer management", "Analytics and growth insights", "Notifications", "Paystack checkout ready", "Remove PulchriFlow branding", "PWA access", "Custom domain support coming soon"];
  return (
    <main className="landing-page spring-landing">
      <AnchorScroller target={initialAnchor} />
      <header className="landing-nav">
        <Link className="brand-mark" href="/"><BrandLogo /></Link>
        <nav className="nav-links"><a href="#features">Features</a><a href="#workflow">Workflow</a><Link href="/pricing">Pricing</Link></nav>
        <div className="nav-actions"><a className="text-link" href={appLink("/login")}>Log in</a><a className="button button-primary" {...signup()}>Start free</a></div>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">The commerce OS for social sellers</p>
          <h1>Stop losing orders in <span className="flow-text">chats.</span></h1>
          <p className="hero-copy">Create a beautiful storefront, receive orders, track customers, and manage your business from one simple platform.</p>
          <div className="hero-actions">
            <a className="button button-primary button-large" {...signup()}><Rocket size={18} />Start Free</a>
            <a className="button button-secondary button-large" href={appLink("/shop/demo")}><Store size={18} />View Demo Store</a>
          </div>
          <div className="trust-row"><span><CheckCircle2 size={16} />No code storefront</span><span><CheckCircle2 size={16} />WhatsApp checkout</span><span><CheckCircle2 size={16} />Built for daily selling</span></div>
        </div>
        <div className="hero-backdrop"><SpringScreenMock /></div>
      </section>
      <section className="proof-band" aria-label="PulchriFlow benefits"><span>Built for social media sellers</span><span>No card required</span><span>Start with 30 products free</span><span>Made for African businesses</span></section>
      <section className="showcase-section"><div className="section-heading"><h2>Run your business from one clean dashboard</h2><p>Track revenue, orders, customers, and best-selling products without digging through chats.</p><ul className="showcase-bullets"><li><CheckCircle2 size={16} /> See paid, pending, and completed orders</li><li><CheckCircle2 size={16} /> Track customers and repeat buyers</li><li><CheckCircle2 size={16} /> Monitor revenue and top products</li></ul></div><div className="showcase-image"><img src="/dashboard-mock.png" alt="Merchant Dashboard" /></div></section>
      <section className="signal-strip"><div><strong>Commerce OS</strong><span>Built for African SMEs and startups selling on social media, marketplaces, and storefront links.</span></div><div><strong>Sell clearly</strong><span>Products, checkout, and payment in one path.</span></div><div><strong>Operate better</strong><span>Orders and customers stay organized.</span></div></section>
      <section id="comparison" className="content-section"><div className="comparison-layout"><div><div className="section-heading"><p className="eyebrow">Beyond WhatsApp Business</p><h2>Stop losing sales in chaotic chat threads.</h2></div><div className="comparison-cards"><article className="comparison-card comparison-card-muted"><div className="comparison-card-head"><span>Selling on WhatsApp alone</span></div><ul className="comparison-feature-list comparison-feature-list-muted"><li><X size={16} /> Answering &quot;How much is this?&quot; all day</li><li><X size={16} /> Scrolling through chats to find order details</li><li><X size={16} /> Manual payment confirmations</li><li><X size={16} /> Lost leads in noisy inboxes</li></ul></article><article className="comparison-card comparison-card-featured"><div className="comparison-card-head"><span>Selling with PulchriFlow</span></div><ul className="comparison-feature-list"><li><CheckCircle2 size={16} /> Customers see full catalog & prices instantly</li><li><CheckCircle2 size={16} /> Automated cart calculation and totals</li><li><CheckCircle2 size={16} /> Integrated Paystack or formatted WhatsApp orders</li><li><CheckCircle2 size={16} /> Clean dashboard to track paid vs pending orders</li></ul></article></div></div><div className="comparison-visual" aria-hidden="true"><div className="chat-stack"><span className="chat-bubble muted">How much?</span><span className="chat-bubble muted">Still available?</span><span className="chat-bubble muted">Paid, check receipt</span></div><div className="flow-card-mini"><div className="mini-card-head"><Store size={18} /><strong>PulchriFlow</strong></div><div className="mini-product-row"><Package size={18} /><span>Catalog</span><b>Live</b></div><div className="mini-product-row"><ShoppingCart size={18} /><span>Cart total</span><b>Auto</b></div><div className="mini-product-row"><CreditCard size={18} /><span>Payment</span><b>Tracked</b></div></div></div></div></section>
      <section id="workflow" className="workflow-section"><div className="workflow-copy"><p className="eyebrow">A simpler sales workflow</p><h2>From product link to fulfilled order.</h2><p>PulchriFlow keeps every step connected, so customers buy smoothly and you always know what needs attention next.</p><a className="button button-primary" {...signup()}>Start selling <ArrowUpRight size={18} /></a></div><div className="workflow-list">{[["01", "Create your store", "Add your business details and make the storefront feel like your brand."], ["02", "Add products", "Keep prices, photos, and details in one clean catalog."], ["03", "Share your link", "Post it wherever customers find you."], ["04", "Receive orders", "Collect complete orders without the back-and-forth."], ["05", "Track customers", "Keep every order and customer relationship organized."]].map(([number, title, copy]) => <article className="workflow-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
      <section className="pulchi-section"><div className="pulchi-copy"><span className="pulchi-icon"><Bot size={26} /></span><p className="eyebrow">Meet Pulchi</p><h2>Your merchant assistant.</h2><p>Get clear answers about orders, customers, and products—without digging through reports.</p><span className="coming-pill">Coming soon</span></div><div className="pulchi-chat">{["How many orders did I receive today?", "Who are my best customers?", "What should I promote this week?"].map((q) => <div className="pulchi-question" key={q}>{q}<ArrowUpRight size={16} /></div>)}<div className="pulchi-answer"><Bot size={18} /><p>Your Adire Tote brought in 28% of revenue this week.</p></div></div></section>
      <section id="pricing" className="pricing-section"><p className="eyebrow">Pricing</p><h2>Simple plans for WhatsApp and Instagram sellers.</h2><p>Start free, upgrade when you need more control, or let us help set everything up for you.</p><div className="pricing-grid"><article className="pricing-card"><div className="pricing-card-head"><strong>Free</strong></div><div className="pricing-price">₦0</div><strong>Start selling online for free</strong><p className="pricing-billing">per month</p><ul className="pricing-feature-list">{["1 storefront", "Up to 30 active products", "Up to 3 images per product", "WhatsApp checkout", "Manual transfer orders", "Public order tracking", "Basic order management", "PulchriFlow branding included"].map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul><ul className="pricing-feature-list muted-list">{["No analytics", "No customer management", "No Paystack checkout", "No custom domain"].map((item) => <li key={item}><X size={16} />{item}</li>)}</ul><a className="button" {...signup()}>Create Free Store</a></article><article className="pricing-card featured"><div className="pricing-card-head"><strong>Pro Monthly</strong></div><div className="pricing-price">₦3,000</div><strong>For growing businesses</strong><p className="pricing-billing">per month</p><ul className="pricing-feature-list">{proFeatures.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul><a className="button button-primary" {...signup("/register?plan=pro-monthly")}>Upgrade to Pro</a></article><article className="pricing-card"><div className="pricing-card-head"><strong>Pro Quarterly</strong><small>Save ₦450</small></div><div className="pricing-price">₦8,550</div><strong>Save 5%</strong><p className="pricing-billing">every 3 months</p><ul className="pricing-feature-list">{proFeatures.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul><a className="button" {...signup("/register?plan=pro-quarterly")}>Choose Quarterly</a></article><article className="pricing-card"><div className="pricing-card-head"><strong>Pro Yearly</strong><small>Save ₦3,600</small></div><div className="pricing-price">₦32,400</div><strong>Save 10%</strong><p className="pricing-billing">per year</p><ul className="pricing-feature-list">{proFeatures.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul><a className="button" {...signup("/register?plan=pro-yearly")}>Choose Yearly</a></article></div></section>
      <section id="features" className="content-section"><div className="section-heading"><p className="eyebrow">Why PulchriFlow</p><h2>Everything a business needs to start selling online.</h2></div><div className="feature-grid">{[[Store, "Public shop page", "Share one clean storefront link with your customers and let them browse active products."], [CreditCard, "Payment flow", "Connect Paystack subaccounts and move customers from order to payment without manual chasing."], [ShoppingCart, "Order dashboard", "Track new, paid, and fulfilled orders from a focused business workspace."], [Users, "Customer records", "Keep customer contacts, order history, and export-ready lists in one place."]].map(([Icon, title, text]) => { const I = Icon as typeof Store; return <article className="feature-card" key={title as string}><I size={28} /><h3>{title as string}</h3><p>{text as string}</p></article>; })}</div></section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">Questions, answered</p><h2>Start confidently.</h2></div><div className="faq-list">{[["Do I need technical skills?", "No. Add your products, set up your store, and share your link."], ["Can customers still order through WhatsApp?", "Yes. WhatsApp checkout stays part of the experience, with cleaner order details."], ["Can I start for free?", "Yes. Free includes a storefront, five products, sharing, manual transfer, and tracking."], ["Can I upgrade later?", "Upgrade when you need unlimited products, CRM, analytics, or branding removal."]].map(([q, a]) => <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></section>
      <footer className="landing-footer"><div className="landing-footer-cta"><div><span className="footer-kicker">Your next sale starts here</span><h2>Turn conversations into a business that flows.</h2></div><a {...signup()} className="button primary">Create your free store <ArrowUpRight size={18} /></a></div><div className="landing-footer-grid"><div className="footer-brand-column"><BrandLogo /><p>The commerce workspace for African businesses selling through WhatsApp, Instagram, and everywhere their customers are.</p><div className="footer-socials" aria-label="Social links"><a href="mailto:hello@pulchriflow.com" aria-label="Email PulchriFlow"><Mail size={18} /></a><a href={appLink("/shop/demo")} aria-label="Explore the PulchriFlow demo store"><Globe2 size={18} /></a><a href={appLink("/orders/lookup")} aria-label="Open order support"><MessageCircle size={18} /></a></div></div><div className="footer-link-column"><strong>Product</strong><a href="#features">Features</a><a href="#workflow">Workflow</a><Link href="/pricing">Pricing</Link><a href={appLink("/shop/demo")}>Demo store</a></div><div className="footer-link-column"><strong>Get started</strong><a {...signup()}>Create an account</a><a href={appLink("/login")}>Merchant login</a><a href={appLink("/orders/lookup")}>Track an order</a></div><div className="footer-link-column"><strong>Legal</strong><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link><a href="mailto:support@pulchriflow.com">Contact</a></div><div className="footer-note"><span className="footer-status-dot" /><div><strong>Built for the way Africa sells</strong><p>Simple tools. Local context. Serious growth.</p></div></div></div><div className="landing-footer-bottom"><span>© PulchriLabs. All rights reserved.</span><span>Built and operated by PulchriLabs.</span></div></footer>
    </main>
  );
}
