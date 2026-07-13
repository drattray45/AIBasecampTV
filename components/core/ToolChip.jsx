import React from "react";

/**
 * ToolChip — a quiet, honest name-tag for a familiar tool
 * (ChatGPT, Claude, Canva…). Used in the "tools you'll actually use" bar
 * instead of fabricated customer logos. Deliberately plain: no fake logo.
 */
export function ToolChip({ children, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "9px 18px",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-sm)",
        color: "var(--text-body)",
        background: "var(--surface-raised)",
        border: "var(--border-w) solid var(--border-hairline)",
        borderRadius: "var(--radius-pill)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
