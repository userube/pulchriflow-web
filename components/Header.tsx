import Link from "next/link";
import { appLink } from "../lib/config";
import { marketingNavigation } from "../lib/navigation";
import AppCta from "./AppCta";
import BrandLogo from "./BrandLogo";
import Container from "./Container";

export default function Header() {
  return (
    <header className="marketing-header">
      <Container className="marketing-header-inner">
        <Link className="marketing-brand" href="/" aria-label="PulchriFlow home"><BrandLogo /></Link>
        <nav className="marketing-nav" aria-label="Main navigation">
          {marketingNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="marketing-header-actions">
          <a className="marketing-login" href={appLink("/login")}>Log in</a>
          <AppCta />
        </div>
      </Container>
    </header>
  );
}
