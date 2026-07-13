import React from "react";

/**
 * StepCard — one step on the Basecamp Path. A quiet numbered marker,
 * a display-font title, plain body. Confidence before capability.
 */
export function StepCard({ number, title, children, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        background: "var(--surface-card)",
        border: "var(--border-w) solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card)",
        boxShadow: "var(--shadow-md)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          borderRadius: "var(--radius-pill)",
          background: "var(--surface-sunken)",
          color: "var(--brown-600)",
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--text-xl)",
        }}
      >
        {number}
      </span>
      <h3 style={{ margin: 0, font: "var(--type-h3)", color: "var(--text-heading)", textWrap: "balance" }}>{title}</h3>
      <p style={{ margin: 0, font: "var(--type-body)", color: "var(--text-body)", maxWidth: "var(--measure-body)" }}>
        {children}
      </p>
    </div>
  );
}
