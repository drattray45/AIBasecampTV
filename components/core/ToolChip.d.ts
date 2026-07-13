import React from "react";

export interface ToolChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

/** A plain pill naming a familiar free tool — used in the honest tools-bar (no fake logos). */
export function ToolChip(props: ToolChipProps): JSX.Element;
