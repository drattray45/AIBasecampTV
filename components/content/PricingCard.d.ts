import React from "react";

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: string;         // "Free", "$17", "$99"
  name: string;
  blurb: string;
  ctaLabel: string;
  ctaVariant?: "primary" | "secondary";
  /** the free Starter Kit — amber border, "Start here" badge */
  featured?: boolean;
}

/** One rung of the gentle one-time ladder. No subscription language. */
export function PricingCard(props: PricingCardProps): JSX.Element;
