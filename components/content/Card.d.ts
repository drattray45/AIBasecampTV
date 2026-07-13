import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "paper" | "quiet" | "beacon";
  elevated?: boolean;
  children: React.ReactNode;
}

/**
 * Base warm surface: soft radius, warm low shadow, hairline border.
 * @startingPoint section="Content" subtitle="Warm surface with soft shadow" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
