import React from "react";

export interface FAQItemProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

/** Honest expandable objection-handler. Plain question, calm answer. */
export function FAQItem(props: FAQItemProps): JSX.Element;
