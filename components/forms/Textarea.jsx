import React from "react";

/**
 * Textarea — for the "read-only worked example" / prompt boxes and any
 * multiline entry. Same calm treatment as Input. Set `readOnly` + `monospace`
 * for a copy-paste prompt display.
 */
export function Textarea({ label, helper, id, monospace = false, style = {}, ...rest }) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-body)" }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-heading)" }}>
          {label}
        </label>
      )}
      <textarea
        id={fieldId}
        rows={rest.rows || 4}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: monospace ? "ui-monospace, SFMono-Regular, Menlo, monospace" : "var(--font-body)",
          fontSize: monospace ? "var(--text-sm)" : "var(--text-base)",
          lineHeight: "var(--leading-normal)",
          color: "var(--text-heading)",
          background: "var(--surface-card)",
          padding: "14px 16px",
          borderRadius: "var(--radius-md)",
          border: `2px solid ${focused ? "var(--focus-ring)" : "var(--border-default)"}`,
          outline: "none",
          resize: "vertical",
          boxShadow: focused ? "0 0 0 4px var(--accent-quiet)" : "none",
          transition: "border-color var(--dur-base) var(--ease-calm), box-shadow var(--dur-base) var(--ease-calm)",
          ...style,
        }}
        {...rest}
      />
      {helper && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{helper}</span>}
    </div>
  );
}
