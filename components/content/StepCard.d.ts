import React from "react";

export interface StepCardProps extends React.HTMLAttributes<HTMLDivElement> {
  number: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

/** One step on the Basecamp Path: quiet numbered marker + display title + plain body. */
export function StepCard(props: StepCardProps): JSX.Element;
