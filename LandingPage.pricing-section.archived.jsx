/**
 * ARCHIVED — Pricing ladder removed from the live landing page until the
 * $17 pack and $99 founding course exist and can be purchased.
 *
 * Restore in LandingPage.jsx:
 *   import { PricingSection } from "./LandingPage.pricing-section.archived.jsx";
 *   import { scrollToStarterKit } from "./LandingPage.pricing-section.archived.jsx";
 *   …place <PricingSection onGetStarterKit={scrollToStarterKit} /> before the FAQ section.
 */
import React from "react";
import { PricingCard } from "./_ds_bundle.js";

export function scrollToStarterKit(event) {
  event?.preventDefault?.();
  document.getElementById("starter-kit")?.scrollIntoView({ behavior: "smooth" });
}

export function PricingSection({ onGetStarterKit = scrollToStarterKit }) {
  return (
    <section id="kit" className="section">
      <div className="container">
        <div className="section__eyebrow">When you&apos;re ready (no rush, no subscription)</div>
        <h2 className="section__title">A gentle, one-time ladder. The free kit is the point.</h2>
        <div className="grid-pricing">
          <PricingCard
            featured
            amount="Free"
            name="Starter Kit"
            blurb="Your first 5 AI wins, in the right order."
            ctaLabel="Get my free Starter Kit"
            onCtaClick={onGetStarterKit}
          />
          <PricingCard
            amount="$17"
            name="The 5 AI Tasks pack"
            blurb="Every task written out with the exact words to type."
            ctaLabel="See what's inside"
          />
          <PricingCard
            amount="$99"
            name="Founding course"
            blurb="The full Basecamp Path, founding price, backed by the 60-day promise."
            ctaLabel="Join the founding group"
          />
        </div>
      </div>
    </section>
  );
}
