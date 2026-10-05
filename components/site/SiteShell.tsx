import type { ReactNode } from "react";
import { Footer, StickyCta } from "../Closing";
import { Nav } from "../Nav";
import PageMotion from "./PageMotion";

/** Shared chrome for every page except the landing page: nav, footer, phone sticky CTA. */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-clip">
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <StickyCta />
      <PageMotion />
    </div>
  );
}
