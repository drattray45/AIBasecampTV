import React from "react";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  /** reassure (leaf), honest (clay — for reserved/honesty notes), note (quiet) */
  tone?: "reassure" | "honest" | "note";
  children: React.ReactNode;
}

/** Warm, quiet aside — never an alert. For honesty notes and gentle reassurance. */
export function Callout(props: CalloutProps): JSX.Element;
