import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "free" | "success" | "note";
  children: React.ReactNode;
}

/** Small calm label. Use `free` (amber wash) to flag the free kit; `note` for reserved/honesty notes. */
export function Badge(props: BadgeProps): JSX.Element;
