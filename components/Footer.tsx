import Link from "next/link";
import { appLink } from "../lib/config";
import { footerNavigation } from "../lib/navigation";
import BrandLogo from "./BrandLogo";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="marketing-footer">
      <Container>
        <div className="marketing-footer-grid">
          <div className="marketing-footer-intro">
            <BrandLogo />
            <a className="marketing-labs-link" href="https://pulchrilabs.vercel.app" target="_blank" rel="noreferrer">PulchriFlow by <strong>PulchriLabs</strong></a>
          </div>
          <nav aria-label="Product"><strong>Product</strong>{footerNavigation.product.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          <nav aria-label="Company"><strong>Company</strong>{footerNavigation.company.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          <nav aria-label="Legal"><strong>Legal</strong>{footerNavigation.legal.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<a href={appLink("/login")}>Log in</a></nav>
        </div>
        <div className="marketing-footer-bottom"><span>© {new Date().getFullYear()} PulchriFlow</span><span>Every way you sell. One place to run it.</span></div>
      </Container>
    </footer>
  );
}
