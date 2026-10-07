import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Brain OS",
  description: "Find answers to your questions about Brain OS.",
};

export default function FAQP() {
  return (
    <>
      <Navbar />
      <FAQ />
    </>
  );
}
