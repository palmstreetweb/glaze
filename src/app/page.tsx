import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Nav />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* Brand Information Section */}
        <About />

        {/* Cards Gallery Grid */}
        <Gallery />

        {/* Full-width Call to Action Band */}
        <CTA />

        {/* Accordion FAQ Section */}
        <FAQ />
      </main>

      {/* Footer Block */}
      <Footer />
    </>
  );
}
