import Link from "next/link";
import { appLink } from "../lib/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>PulchriFlow</strong>
        <p>Commerce without the chaos for WhatsApp and social sellers.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
        <a href={appLink("/login")}>Login</a>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
