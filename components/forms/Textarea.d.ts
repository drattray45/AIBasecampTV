import React from "react";

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "style"> {
  label?: string;
  helper?: string;
  /** monospace + smaller size, for copy-paste prompt displays */
  monospace?: boolean;
  style?: React.CSSProperties;
}

/** Multiline field; set monospace + readOnly for a copy-paste prompt box. */
export function Textarea(props: TextareaProps): JSX.Element;
