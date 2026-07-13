import React from "react";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** an <img> of a Scout scene or a glyph node */
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

/** Reassurance-led benefit: icon slot + title + short body. */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
