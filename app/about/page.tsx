import type { Metadata } from "next";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About Team RND | Brain OS",
  description:
    "Learn about Team RND, the team behind Brain OS, and our work exploring personal knowledge systems, local AI, and contextual computing.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}
