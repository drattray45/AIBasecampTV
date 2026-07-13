import React from "react";

/**
 * Callout — a warm, quiet aside. Not an alert. Used for honesty notes,
 * "reserved / earned-proof" panels, gentle reassurance.
 * tone: reassure (leaf) | honest (clay) | note (quiet paper).
 */
export function Callout({ children, title, tone = "note", style = {}, ...rest }) {
  const tones = {
    reassure: { bg: "var(--leaf-100)", bar: "var(--leaf-600)", head: "var(--leaf-600)" },
    honest:   { bg: "var(--clay-100)", bar: "var(--clay-600)", head: "var(--clay-600)" },
    note:     { bg: "var(--surface-raised)", bar: "var(--border-strong)", head: "var(--text-heading)" },
  };
  const t = tones[tone];
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        background: t.bg,
        borderRadius: "var(--radius-md)",
        padding: "20px 22px",
        fontFamily: "var(--font-body)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ width: "4px", borderRadius: "var(--radius-pill)", background: t.bar, flexShrink: 0 }} />
      <div>
        {title && (
          <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--text-base)", color: t.head, marginBottom: "4px", textWrap: "balance" }}>
            {title}
          </div>
        )}
        <div style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-normal)", color: "var(--text-body)", textWrap: "pretty" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
