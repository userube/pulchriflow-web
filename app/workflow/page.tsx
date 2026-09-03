import type { Metadata } from "next";
import LandingPage from "../../components/LandingPage";

export const metadata: Metadata = {
  title: "Workflow",
  description: "See how PulchriFlow takes merchants from product link to fulfilled order."
};

export default function WorkflowPage() {
  return <LandingPage initialAnchor="workflow" />;
}
