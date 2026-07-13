import React from "react";
import { Button } from "../core/Button.jsx";
import { Badge } from "../core/Badge.jsx";

/**
 * PricingCard — one rung of the gentle, one-time ladder. `featured` (the free
 * kit) gets a warm amber border + Free badge. No subscription language.
 */
export function PricingCard({ amount, name, blurb, ctaLabel, ctaVariant, featured = false, onCtaClick, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: featured ? "var(--accent-quiet)" : "var(--surface-card)",
        border: `${featured ? "var(--border-w-strong)" : "var(--border-w)"} solid ${featured ? "var(--accent)" : "var(--border-hairline)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card)",
        boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
        ...style,
      }}
      {...rest}
    >
      {featured && <div style={{ marginBottom: "4px" }}><Badge tone="free">Start here</Badge></div>}
      <div style={{ font: "var(--type-h2)", fontSize: "var(--text-3xl)", color: "var(--text-heading)" }}>{amount}</div>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: "var(--fw-semibold)", fontSize: "var(--text-base)", color: "var(--text-heading)" }}>{name}</div>
      <p style={{ margin: "2px 0 16px", font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{blurb}</p>
      <div style={{ marginTop: "auto" }}>
        <Button variant={ctaVariant || (featured ? "primary" : "secondary")} size="md" fullWidth onClick={onCtaClick}>{ctaLabel}</Button>
      </div>
    </div>
  );
}
