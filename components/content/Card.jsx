import React from "react";

/**
 * Card — the base warm surface. Soft radius, warm low shadow, hairline border.
 * `tone`: paper (default warm card) | quiet (sunken wash) | beacon (dark surface).
 * `elevated` adds the larger warm shadow for hero cards.
 */
export function Card({ children, tone = "paper", elevated = false, style = {}, ...rest }) {
  const tones = {
    paper:  { background: "var(--surface-card)", border: "var(--border-hairline)" },
    quiet:  { background: "var(--surface-raised)", border: "var(--border-hairline)" },
    beacon: { background: "var(--surface-card)", border: "var(--border-default)" },
  };
  const t = tones[tone];
  return (
    <div
      style={{
        background: t.background,
        border: `var(--border-w) solid ${t.border}`,
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card)",
        boxShadow: elevated ? "var(--shadow-lg)" : "var(--shadow-md)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
