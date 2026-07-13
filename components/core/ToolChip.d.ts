import React from "react";

export interface ToolChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Monochrome masked logo (.webp with transparency) shown left of the label. */
  logoSrc?: string;
  /** `alpha` for transparent silhouettes; `luminance` for light-on-color marks like Canva. */
  logoMaskMode?: "alpha" | "luminance";
}

/** A plain pill naming a familiar free tool — used in the honest tools-bar (no fake logos). */
export function ToolChip(props: ToolChipProps): JSX.Element;
