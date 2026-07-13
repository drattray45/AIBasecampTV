import React from "react";

/**
 * Button — AIBasecamp.TV
 * Amber pill = the reserved CTA. Never decorative; use for the one action.
 * Secondary/quiet carry lower-stakes actions.
 */
export function Button({
  children,
  variant = "primary",
  size = "lg",
  as = "button",
  fullWidth = false,
  style = {},
  ...rest
}) {
  const Tag = as;

  const sizes = {
    lg: { padding: "16px 30px", fontSize: "var(--text-base)" },
    md: { padding: "12px 22px", fontSize: "var(--text-sm)" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--fw-bold)",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "2px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform var(--dur-fast) var(--ease-calm), background var(--dur-base) var(--ease-calm), box-shadow var(--dur-base) var(--ease-calm)",
    width: fullWidth ? "100%" : "auto",
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      boxShadow: "var(--shadow-cta)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-heading)",
      borderColor: "var(--border-strong)",
    },
    quiet: {
      background: "transparent",
      color: "var(--link)",
      padding: size === "lg" ? "16px 8px" : "12px 6px",
      borderRadius: 0,
      boxShadow: "none",
    },
  };

  return (
    <Tag
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        if (variant === "primary") { e.currentTarget.style.background = "var(--accent-hover)"; }
        if (variant === "secondary") { e.currentTarget.style.borderColor = "var(--focus-ring)"; }
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") { e.currentTarget.style.background = "var(--accent)"; }
        if (variant === "secondary") { e.currentTarget.style.borderColor = "var(--border-strong)"; }
        e.currentTarget.style.transform = "none";
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(1px)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
      {...rest}
    >
      {children}
      {variant === "quiet" && <span aria-hidden="true">→</span>}
    </Tag>
  );
}
