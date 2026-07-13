import React from "react";

/**
 * FeatureCard — a reassurance-led benefit. Optional icon slot (pass an <img>
 * of a Scout scene or a glyph). Title + short body. Warm, roomy.
 */
export function FeatureCard({ icon, title, children, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "18px",
        alignItems: "flex-start",
        background: "var(--surface-card)",
        border: "var(--border-w) solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card)",
        boxShadow: "var(--shadow-sm)",
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <div
          style={{
            flexShrink: 0,
            width: "52px",
            height: "52px",
            borderRadius: "var(--radius-md)",
            background: "var(--surface-sunken)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {icon}
        </div>
      )}
      <div>
        <h3 style={{ margin: "0 0 6px", font: "var(--type-h3)", fontSize: "var(--text-xl)", color: "var(--text-heading)", textWrap: "balance" }}>
          {title}
        </h3>
        <p style={{ margin: 0, font: "var(--type-body)", color: "var(--text-body)", maxWidth: "var(--measure-body)" }}>
          {children}
        </p>
      </div>
    </div>
  );
}
