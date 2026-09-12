import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Globe2,
  Mail,
  MessageCircle,
  ReceiptText,
  Rocket,
  Sparkles,
  Store,
  Users,
  Zap
} from "lucide-react";
import Link from "next/link";
import { appLink } from "../lib/config";
import AnchorScroller from "./AnchorScroller";
import BrandLogo from "./BrandLogo";

const appParams = "utm_source,utm_medium,utm_campaign,utm_content,utm_term,ref,promo";
const signup = (path = "/register") => ({ href: appLink(path), "data-preserve-params": appParams });

const features = [
  [Store, "Storefront", "A shareable, branded shop link that looks built, not cobbled together."],
  [CreditCard, "Payments", "Paystack-ready checkout and clean manual order tracking."],
  [ReceiptText, "Invoices", "Receipts, order records, and checkout details in one place."],
  [Users, "Customers", "Turn sales into follow-up friendly customer records."],
  [Bot, "Pulchi", "Merchant intelligence that helps you see what matters fast."]
] as const;

const stats = ["Storefront", "Checkout links", "Invoices", "Orders", "Customers"];

function DashboardPreview() {
  return (
    <div className="pf-dashboard-preview" aria-label="PulchriFlow commerce dashboard preview">
      <div className="pf-preview-topbar">
        <div>
          <span className="pf-window-dot" />
          <span className="pf-window-dot" />
          <span className="pf-window-dot" />
        </div>
        <strong>Bloom Beauty workspace</strong>
        <span>Live</span>
      </div>
      <div className="pf-preview-body">
        <aside className="pf-preview-sidebar">
          <div className="pf-mini-brand"><img src="/pulchriflow-logo.svg" alt="" /></div>
          {["Overview", "Orders", "Products", "Customers", "Payments"].map((item, index) => (
            <span className={index === 0 ? "active" : ""} key={item}>{item}</span>
          ))}
        </aside>
        <div className="pf-preview-main">
          <div className="pf-preview-heading">
            <div>
              <small>Commerce overview</small>
              <h3>Today&apos;s sales flow</h3>
            </div>
            <button><Sparkles size={16} /> Ask Pulchi</button>
          </div>
          <div className="pf-metric-grid">
            {[
              ["Revenue today", "₦246k", "+18%"],
              ["Open orders", "38", "12 paid"],
              ["Repeat buyers", "64%", "+9%"]
            ].map(([label, value, note]) => (
              <article key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
                <span>{note}</span>
              </article>
            ))}
          </div>
          <div className="pf-commerce-grid">
            <section className="pf-store-card">
              <div className="pf-store-cover" />
              <div className="pf-store-avatar">BB</div>
              <h4>Bloom Beauty</h4>
              <p>Skincare kits, oils, and weekend bundles.</p>
              <div><span>Glow Starter Kit</span><strong>₦14,500</strong></div>
              <div><span>Body Oil Duo</span><strong>₦9,800</strong></div>
              <button>Open checkout</button>
            </section>
            <section className="pf-orders-card">
              <div className="pf-card-title">
                <strong>Orders moving now</strong>
                <span>Auto-tracked</span>
              </div>
              {[
                ["Ada Foods", "Paid", "₦42,000"],
                ["Grace Fabrics", "Ready", "₦18,500"],
                ["Bloom Beauty", "New", "₦9,800"]
              ].map(([name, status, amount]) => (
                <div className="pf-order-row" key={name}>
                  <span>{name}</span>
                  <b>{status}</b>
                  <strong>{amount}</strong>
                </div>
              ))}
              <div className="pf-assistant-note">
                <Bot size={17} />
                <p>Your Glow Starter Kit is leading revenue this week.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage({ initialAnchor }: { initialAnchor?: "features" | "workflow" | "pricing" }) {
  return (
    <main className="landing-page pf-redesign">
      <AnchorScroller target={initialAnchor} />
      <header className="landing-nav pf-nav">
        <Link className="brand-mark" href="/"><BrandLogo /></Link>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="nav-actions">
          <a className="text-link" href={appLink("/login")}>Log in</a>
          <a className="button button-primary" {...signup()}>Start free</a>
        </div>
      </header>

      <div className="pf-shell">
        <div className="pf-content">
        <section className="pf-hero">
          <div className="pf-hero-copy">
            <span className="pf-kicker"><Zap size={16} /> Built for social commerce</span>
            <h1>PulchriFlow</h1>
            <p className="pf-hero-tag">Commerce OS for African SMEs</p>
            <p className="pf-hero-lede">The commerce OS that turns WhatsApp and Instagram conversations into storefronts, orders, payments, customers, and repeat sales.</p>
            <div className="pf-hero-actions">
              <a className="button button-primary button-large" {...signup()}><Rocket size={18} /> Create free store</a>
              <a className="button button-secondary button-large" href={appLink("/shop/demo")}><Store size={18} /> View demo store</a>
            </div>
            <div className="pf-trust-row">
              <span><CheckCircle2 size={16} /> No code</span>
              <span><CheckCircle2 size={16} /> Paystack-ready</span>
              <span><CheckCircle2 size={16} /> Made for African SMEs</span>
            </div>
          </div>
          <DashboardPreview />
        </section>

        <section id="features" className="pf-section">
          <div className="pf-section-heading">
            <span className="pf-kicker">One workspace</span>
            <h2>Everything that used to live across chats, notes, and receipts.</h2>
            <p>PulchriFlow gives small businesses the operating layer they need after customers say “I want this.”</p>
          </div>
          <div className="pf-feature-grid">
            {features.map(([Icon, title, text]) => (
              <article className="pf-feature-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pf-showcase">
          <div>
            <span className="pf-kicker">Live storefront + back office</span>
            <h2>Show customers the store. Run the business behind it.</h2>
            <p>Customers browse products and place complete orders while you manage status, payments, customers, and follow-ups from a focused dashboard.</p>
            <ul>
              <li><CheckCircle2 size={17} /> Public shop pages that feel credible.</li>
              <li><CheckCircle2 size={17} /> Complete order details before you reply.</li>
              <li><CheckCircle2 size={17} /> Customer records created from sales activity.</li>
            </ul>
          </div>
          <div className="pf-device-stack">
            <img src="/dashboard-mock.png" alt="PulchriFlow merchant dashboard" />
            <img src="/storefront-mock.png" alt="PulchriFlow storefront preview" />
          </div>
        </section>

        <section className="pf-pulchi">
          <div>
            <span className="pf-kicker"><Bot size={16} /> Pulchi assistant</span>
            <h2>Ask what needs attention before the day runs away.</h2>
            <p>Pulchi brings merchant intelligence into the same place you already manage products, orders, and customers.</p>
            <span className="pf-coming">Coming soon</span>
          </div>
          <div className="pf-chat-card">
            {["What sold best this week?", "Which customers should I follow up with?", "What orders are unpaid?"].map((item) => (
              <button key={item}>{item}<ArrowUpRight size={15} /></button>
            ))}
            <div><Sparkles size={18} /><p>Your skincare bundles drove 28% of weekly revenue. Promote them again this weekend.</p></div>
          </div>
        </section>

        <section className="pf-stat-band" aria-label="PulchriFlow summary">
          {stats.map((item) => <span key={item}>{item}</span>)}
        </section>

        <section id="pricing" className="pf-pricing">
          <div className="pf-section-heading">
            <span className="pf-kicker">Pricing</span>
            <h2>Start free. Upgrade when your shop needs more control.</h2>
            <p>Simple plans for WhatsApp and Instagram sellers building a real online business.</p>
          </div>
          <div className="pf-price-grid">
            <article>
              <strong>Free</strong>
              <h3>₦0</h3>
              <p>Launch your first storefront and start receiving organized orders.</p>
              <a className="button button-secondary" {...signup()}>Create free store</a>
            </article>
            <article className="featured">
              <strong>Pro Monthly</strong>
              <h3>₦3,000</h3>
              <p>Unlock unlimited products, analytics, customer management, Paystack checkout, and branding removal.</p>
              <a className="button button-primary" {...signup("/register?plan=pro-monthly")}>Choose Pro <ArrowRight size={17} /></a>
            </article>
            <article>
              <strong>Done-for-you</strong>
              <h3>Setup help</h3>
              <p>Get hands-on support to move your products, polish your store, and go live quickly.</p>
              <a className="button button-secondary" href="mailto:hello@pulchriflow.com">Talk to us</a>
            </article>
          </div>
        </section>

        <section className="pf-faq">
          <div className="pf-section-heading">
            <span className="pf-kicker">Questions</span>
            <h2>Built for the way you already sell.</h2>
          </div>
          <div>
            {[
              ["Do I need a website already?", "No. PulchriFlow gives you a shareable storefront link out of the box."],
              ["Can customers still use WhatsApp?", "Yes. WhatsApp stays part of the flow, but product details and orders become cleaner."],
              ["Can I accept online payments?", "Yes. Pro merchants can use Paystack checkout while free stores can still manage manual orders."],
              ["Is Pulchi the whole product?", "No. Pulchi is an assistant inside a full commerce workspace."]
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}<ChevronDown size={18} /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="landing-footer pf-footer">
          <div className="pf-footer-cta">
            <div>
              <span className="pf-kicker">Your next sale starts here</span>
              <h2>Turn conversations into a business that flows.</h2>
            </div>
            <a {...signup()} className="button button-primary">Create your free store <ArrowUpRight size={18} /></a>
          </div>
          <div className="pf-footer-grid">
            <div>
              <BrandLogo />
              <p>The commerce workspace for African businesses selling through WhatsApp, Instagram, and everywhere their customers are.</p>
            </div>
            <nav>
              <strong>Product</strong>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href={appLink("/shop/demo")}>Demo store</a>
            </nav>
            <nav>
              <strong>Get started</strong>
              <a {...signup()}>Create an account</a>
              <a href={appLink("/login")}>Merchant login</a>
              <a href={appLink("/orders/lookup")}>Track an order</a>
            </nav>
            <nav>
              <strong>Contact</strong>
              <a href="mailto:hello@pulchriflow.com"><Mail size={16} /> Email</a>
              <a href={appLink("/shop/demo")}><Globe2 size={16} /> Demo store</a>
              <a href={appLink("/orders/lookup")}><MessageCircle size={16} /> Support</a>
            </nav>
          </div>
          <div className="pf-footer-bottom">
            <span>© PulchriLabs. All rights reserved.</span>
            <span>Built and operated by PulchriLabs.</span>
          </div>
        </footer>
        </div>
      </div>
    </main>
  );
}
