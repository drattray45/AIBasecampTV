import React from "react";

/**
 * Badge — a small, calm status/label tag.
 * tone: neutral | free | success | note. "free" uses the amber quiet wash
 * (the free Starter Kit is the hero). Never alarmist.
 */
export function Badge({ children, tone = "neutral", style = {}, ...rest }) {
  const tones = {
    neutral: { background: "var(--surface-sunken)", color: "var(--text-muted)", border: "var(--border-hairline)" },
    free:    { background: "var(--accent-quiet)", color: "var(--highlight-word)", border: "transparent" },
    success: { background: "var(--leaf-100)", color: "var(--leaf-600)", border: "transparent" },
    note:    { background: "var(--clay-100)", color: "var(--clay-600)", border: "transparent" },
  };
  const t = tones[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-xs)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        color: t.color,
        background: t.background,
        border: `var(--border-w) solid ${t.border}`,
        borderRadius: "var(--radius-pill)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
