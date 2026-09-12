import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CircleCheck, CreditCard, FileText, Link2, Plus, ReceiptText, Search, ShoppingBag, Store } from "lucide-react";
import { appLink } from "../lib/config";
import Footer from "./Footer";
import Header from "./Header";

const appParams = "utm_source,utm_medium,utm_campaign,utm_content,utm_term,ref,promo";

function DashboardWindow() {
  return (
    <div className="proof-dashboard-window" aria-label="PulchriFlow dashboard product preview">
      <div className="proof-window-bar"><div className="proof-window-dots"><span /><span /><span /></div><strong>Today</strong><button type="button"><Plus size={14} /> New sale</button></div>
      <div className="proof-dashboard-body">
        <aside><div className="proof-mini-brand"><img src="/pulchriflow-logo.svg" alt="PulchriFlow" /></div><span className="active">Overview</span><span>Orders</span><span>Products</span><span>Customers</span></aside>
        <div className="proof-dashboard-main">
          <p>Today&apos;s sales</p><h3>Keep your business in flow.</h3>
          <div className="proof-dashboard-cards"><article><span>Sales</span><strong>Today</strong><small>Record every sale</small></article><article><span>Orders</span><strong>In one place</strong><small>See what needs attention</small></article><article><span>Customers</span><strong>Remembered</strong><small>Build better follow-up</small></article></div>
          <div className="proof-activity"><strong>Recent activity</strong><span>No sales recorded yet</span><button type="button">Make a sale <ArrowRight size={14} /></button></div>
        </div>
      </div>
    </div>
  );
}

function QuickSalePreview() {
  return (
    <div className="proof-sale-preview" aria-label="PulchriFlow Quick Sale preview">
      <div className="proof-sale-header"><div><span className="proof-overline">Quick Sale</span><h3>Make a sale</h3></div><Search size={18} /></div>
      <div className="proof-sale-body">
        <div className="proof-sale-catalog"><button type="button" className="proof-sale-choice"><ShoppingBag size={17} /><span>Select items</span><Plus size={16} /></button><button type="button" className="proof-sale-choice"><ReceiptText size={17} /><span>Enter a quick amount</span><Plus size={16} /></button></div>
        <aside className="proof-sale-cart"><span>Sale</span><div><small>Ready when you are</small><strong>₦0</strong></div><button type="button">Continue <ArrowRight size={15} /></button></aside>
      </div>
    </div>
  );
}

function ReceiptPreview() {
  return <aside className="proof-receipt"><div className="proof-receipt-icon"><CircleCheck size={19} /></div><span>Sale recorded</span><strong>Receipt ready</strong><small>Share it when the sale is complete.</small></aside>;
}

function CheckoutLinkPreview() {
  return <div className="story-frame checkout-frame"><div className="story-frame-bar"><span>Checkout links</span><button type="button"><Plus size={14} /> Create link</button></div><div className="checkout-content"><div><span className="proof-overline">Shareable payment link</span><h3>Collect payment without the back-and-forth.</h3><p>Create a link for an item or a custom amount, then share it from the conversation.</p></div><aside><Link2 size={20} /><strong>Payment link ready</strong><small>Use it anywhere you sell.</small><button type="button">Copy link</button></aside></div></div>;
}

function StorefrontPreview() {
  return <div className="story-storefront"><div className="story-storefront-browser"><span /><span /><span /><strong>yourstore.pulchriflow.com</strong></div><Image src="/storefront-mock.png" width={2584} height={2086} sizes="(max-width: 700px) 90vw, 48vw" alt="PulchriFlow storefront preview" priority={false} /></div>;
}

function VisibilityPreview() {
  return <div className="story-frame visibility-frame"><div className="story-frame-bar"><span>Today&apos;s business</span><button type="button">View orders <ArrowRight size={14} /></button></div><div className="visibility-content"><div><span>At the counter</span><strong>Quick Sale</strong><small>Recorded sales appear here.</small></div><div><span>From a link</span><strong>Checkout</strong><small>Orders stay together.</small></div><div><span>From your store</span><strong>Storefront</strong><small>Customers become known.</small></div></div><div className="visibility-note"><CircleCheck size={18} /><span>One business view, whichever way the sale started.</span></div></div>;
}

function InvoiceFlowPreview() {
  return <div className="invoice-flow"><article><FileText size={21} /><span>Invoice</span><small>Send a clear request.</small></article><ArrowRight size={18} /><article><CreditCard size={21} /><span>Payment</span><small>Take payment online.</small></article><ArrowRight size={18} /><article><ReceiptText size={21} /><span>Receipt</span><small>Keep the record.</small></article></div>;
}

function SocialFlowPreview() {
  return <div className="social-flow"><div className="social-chat"><span>Customer</span><p>Hi, how much is the black one?</p><span className="merchant">Merchant</span><p className="merchant">₦28,000</p><p>I want 2.</p></div><div className="social-arrow">↓</div><div className="social-checkout"><strong>Create checkout</strong><span>2 × Product</span><b>₦56,000</b><button type="button">Share checkout link</button></div><div className="social-result"><CircleCheck size={18} /><span>Payment complete</span><strong>Order recorded</strong><small>Receipt available</small></div></div>;
}

function WholesalePreview() {
  return <div className="wholesale-preview"><div><span className="proof-overline">Wholesale item</span><h3>Premium Rice — 50kg</h3><p>Minimum order: 10 bags</p><button type="button">Request price</button></div><ArrowRight size={18} /><aside><span className="proof-overline">Price request</span><strong>50 bags</strong><p>“What&apos;s your best price for 50?”</p><small>Merchant receives request</small></aside></div>;
}

function PulchiPreview() {
  return <div className="pulchi-preview"><div className="pulchi-head"><span>Pulchi</span><small>Business intelligence</small></div><p>“How much did I sell this week?”</p><article><CircleCheck size={18} /><div><strong>Your sales and order activity are ready to review.</strong><small>Ask about sales, top products, customers, and products that need attention.</small></div></article><div className="pulchi-prompts"><span>Top products</span><span>Best customers</span><span>What needs attention?</span></div></div>;
}

export default function DesignProof() {
  return (
    <div className="proof-page">
      <Header />
      <main>
        <section className="proof-hero">
          <div className="marketing-container proof-hero-copy">
            <p className="proof-eyebrow"><span /> Commerce that keeps up</p>
            <h1>Sell anywhere.<br />Run it all from <em>PulchriFlow.</em></h1>
            <p className="proof-lede">Make sales, take orders, get paid and keep track of your business — whether you sell in person, online or through social media.</p>
            <div className="proof-actions"><a className="proof-button proof-button-primary" href={appLink("/register")} data-preserve-params={appParams}>Start Free <ArrowRight size={17} /></a><a className="proof-button proof-button-secondary" href="#quick-sale">See how it works <ArrowDown size={17} /></a><a className="proof-button proof-button-secondary" href={appLink("/shop/demo")}>Demo store <Store size={17} /></a></div>
            <p className="proof-microcopy">Free to start <span>•</span> No card required</p>
          </div>
          <div className="marketing-container proof-product-stage">
            <div className="proof-product-halo" aria-hidden="true" />
            <DashboardWindow />
            <ReceiptPreview />
          </div>
        </section>

        <section id="quick-sale" className="proof-quick-sale">
          <div className="marketing-container proof-quick-sale-grid">
            <div className="proof-quick-sale-copy"><p className="proof-eyebrow"><span /> QUICK SALE</p><h2>From conversation to completed sale.</h2><p>Record an in-person sale or a quick amount, choose how the customer paid, and keep the receipt with the order.</p><a href={appLink("/register")} data-preserve-params={appParams}>Start selling <ArrowRight size={16} /></a></div>
            <QuickSalePreview />
          </div>
        </section>

        <section className="story-section story-social"><div className="marketing-container story-split"><div className="story-copy"><p className="proof-eyebrow"><span /> SOCIAL SELLING</p><h2>Stop losing orders in chats.</h2><p>Your customers can keep chatting with you. Your orders don&apos;t have to live in the chat.</p><a href={appLink("/register")} data-preserve-params={appParams}>Create a checkout link <ArrowRight size={16} /></a></div><SocialFlowPreview /></div></section>

        <section className="story-section story-store"><div className="marketing-container story-store-grid"><StorefrontPreview /><div className="story-copy"><p className="proof-eyebrow"><span /> ONLINE STORE</p><h2>Give your business a place to be found.</h2><p>Share a storefront when customers need more than a message: products, details, a real order flow, and a path to pay.</p><a href={appLink("/register")} data-preserve-params={appParams}>Create your storefront <ArrowRight size={16} /></a></div></div></section>

        <section className="story-section story-unified"><div className="marketing-container"><div className="story-intro"><p className="proof-eyebrow"><span /> ONE BUSINESS</p><h2>Different ways to sell.<br />One business underneath.</h2><p>Counter sales, payment links, and storefront orders all come back to the same customers, orders, and business record.</p></div><VisibilityPreview /></div></section>

        <section className="story-section story-pulchi"><div className="marketing-container story-split"><div className="story-copy"><p className="proof-eyebrow"><span /> BUSINESS VISIBILITY</p><h2>Now, understand your business.</h2><p>Once sales, orders, customers, and products live in one place, Pulchi helps you ask better questions about what is happening.</p></div><PulchiPreview /></div></section>

        <section className="story-section story-updates"><div className="marketing-container updates-wrap"><div className="updates-copy"><p className="proof-eyebrow"><span /> WHAT&apos;S NEW</p><h2>A product that keeps moving with your business.</h2><p>Follow new PulchriFlow tools, improvements, and practical ways to make the daily work of selling feel lighter.</p><Link href="/blog">See product updates <ArrowRight size={16} /></Link></div><div className="updates-panel"><span className="updates-date">PULCHRIFLOW JOURNAL</span><strong>Practical resources for selling with more clarity.</strong><p>Guides for payments, customer follow-up, storefronts, and daily operations.</p><Link href="/blog">Explore resources <ArrowRight size={16} /></Link></div></div></section>

        <section className="story-final"><div className="marketing-container"><p className="proof-eyebrow"><span /> START SELLING</p><h2>Run the business<br />behind every sale.</h2><p>Start free and bring your everyday selling into one clearer flow.</p><a className="proof-button proof-button-primary" href={appLink("/register")} data-preserve-params={appParams}>Start Free <ArrowRight size={17} /></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
