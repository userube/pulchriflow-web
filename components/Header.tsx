import Link from "next/link";
import { appLink } from "../lib/config";
import AppCta from "./AppCta";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">PulchriFlow</Link>
      <nav aria-label="Main navigation">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <div className="header-actions">
        <a href={appLink("/login")}>Login</a>
        <AppCta />
      </div>
    </header>
  );
}
