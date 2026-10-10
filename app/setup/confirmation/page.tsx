import type { Metadata } from "next";
import { Suspense } from "react";
import SetupConfirmation from "../../../components/pages/SetupConfirmation";
import SiteShell from "../../../components/site/SiteShell";
import { Orbits } from "../../../components/site/blocks";

export const metadata: Metadata = {
  title: "Setup confirmation",
  description: "Check the status of your PulchriFlow setup payment.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBottom: 140 }}>
        <Orbits
          rings={[
            {
              width: 900,
              height: 900,
              left: "50%",
              top: 200,
              marginLeft: -450,
            },
            {
              width: 1400,
              height: 1400,
              left: "50%",
              top: -40,
              marginLeft: -700,
            },
          ]}
        />
        <div className="wrap" style={{ position: "relative" }}>
          <Suspense fallback={null}>
            <SetupConfirmation />
          </Suspense>
        </div>
      </section>
    </SiteShell>
  );
}
