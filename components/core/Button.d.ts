import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = the reserved amber CTA pill; secondary = outline; quiet = text + arrow */
  variant?: "primary" | "secondary" | "quiet";
  size?: "lg" | "md";
  /** render as another element, e.g. "a" for links */
  as?: "button" | "a";
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * The one action on the page. Amber primary is reserved for CTAs only.
 * @startingPoint section="Core" subtitle="CTA pill + secondary + quiet" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
