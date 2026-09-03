import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "../lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PulchriFlow | Commerce OS for WhatsApp sellers",
    template: "%s | PulchriFlow"
  },
  description: "Create a storefront, record sales, send invoices, receive Paystack payments, and keep track of customers from one PulchriFlow dashboard.",
  openGraph: {
    type: "website",
    siteName: "PulchriFlow",
    title: "PulchriFlow",
    description: "Commerce OS for WhatsApp and social sellers.",
    url: siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title: "PulchriFlow",
    description: "Commerce OS for WhatsApp and social sellers."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PulchriFlow",
    url: siteUrl
  };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {children}
        <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('click',function(e){var a=e.target.closest('a[data-preserve-params]');if(!a)return;var current=new URLSearchParams(location.search);var url=new URL(a.href);a.dataset.preserveParams.split(',').forEach(function(k){if(current.has(k)&&!url.searchParams.has(k))url.searchParams.set(k,current.get(k));});a.href=url.toString();});` }} />
      </body>
    </html>
  );
}
