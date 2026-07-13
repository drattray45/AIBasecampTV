import React from "react";

/**
 * Input — a calm, generous text field. Large target, high contrast,
 * warm focus ring. Label sits above; helper text below.
 */
export function Input({
  label,
  helper,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-body)" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-heading)" }}>
          {label}
        </label>
      )}
      <input
        id={fieldId}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          color: "var(--text-heading)",
          background: "var(--surface-card)",
          padding: "14px 16px",
          borderRadius: "var(--radius-md)",
          border: `2px solid ${focused ? "var(--focus-ring)" : "var(--border-default)"}`,
          outline: "none",
          boxShadow: focused ? "0 0 0 4px var(--accent-quiet)" : "none",
          transition: "border-color var(--dur-base) var(--ease-calm), box-shadow var(--dur-base) var(--ease-calm)",
          ...style,
        }}
        {...rest}
      />
      {helper && (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{helper}</span>
      )}
    </div>
  );
}
