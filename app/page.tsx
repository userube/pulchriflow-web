import { Bento } from "../components/Bento";
import { Channels } from "../components/Channels";
import { Updates, FinalCta, StickyCta } from "../components/Closing";
import { Footer } from "@/components/Closing";
import { Hero } from "../components/Hero";
import { Announcement, Nav } from "../components/Nav";
import { OneBusiness } from "../components/OneBusiness";
import { QuickSale } from "../components/QuickSale";
import { Sabi } from "../components/Sabi";
import { SocialSelling } from "../components/SocialSelling";
import { Storefront } from "../components/Storefront";

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      <Announcement />
      <Nav />
      <main>
        <Hero />
        <Channels />
        <Bento />
        <QuickSale />
        <SocialSelling />
        <Storefront />
        <OneBusiness />
        <Sabi />
        <Updates />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
