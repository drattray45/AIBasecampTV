import React from "react";

/**
 * ToolChip — a quiet, honest name-tag for a familiar tool
 * (ChatGPT, Claude, Canva…). Used in the "tools you'll actually use" bar.
 * Optional `logoSrc` renders a monochrome masked mark beside the label.
 */
export function ToolChip({ children, logoSrc, logoMaskMode = "alpha", className = "", style = {}, ...rest }) {
  return (
    <span
      className={["tool-chip", className].filter(Boolean).join(" ")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
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
      {logoSrc && (
        <span
          className={[
            "tool-pill__logo",
            logoMaskMode === "luminance" && "tool-pill__logo--luminance",
          ].filter(Boolean).join(" ")}
          style={{ "--logo-mask": `url(${logoSrc})` }}
          aria-hidden="true"
        />
      )}
      <span className="tool-pill__label">{children}</span>
    </span>
  );
}
