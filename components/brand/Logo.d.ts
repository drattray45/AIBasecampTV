import React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  /** show the Scout headlamp portrait beside the wordmark */
  showMark?: boolean;
  /** path to the Scout portrait image (relative to the consuming page) */
  markSrc?: string;
}

/**
 * The AIBasecamp.TV wordmark (typographic) + optional Scout headlamp mark.
 * @startingPoint section="Brand" subtitle="Wordmark + Scout mark" viewport="700x120"
 */
export function Logo(props: LogoProps): JSX.Element;
