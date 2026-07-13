import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  label?: string;
  helper?: string;
  style?: React.CSSProperties;
}

/** Calm, generous text field with label above and helper below. Warm focus ring. */
export function Input(props: InputProps): JSX.Element;
