import React from "react";

/**
 * FAQItem — an honest, expandable objection-handler. Plain question,
 * calm answer. Defaults open on `defaultOpen`.
 */
export function FAQItem({ question, children, defaultOpen = false, style = {}, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div
      style={{
        borderBottom: "var(--border-w) solid var(--border-default)",
        fontFamily: "var(--font-body)",
        ...style,
      }}
      {...rest}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          all: "unset",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          cursor: "pointer",
          padding: "20px 0",
          fontWeight: "var(--fw-semibold)",
          fontSize: "var(--text-lg)",
          color: "var(--text-heading)",
          textWrap: "balance",
        }}
        aria-expanded={open}
      >
        {question}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            fontSize: "var(--text-xl)",
            color: "var(--text-muted)",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform var(--dur-base) var(--ease-calm)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
          transition: "max-height var(--dur-slow) var(--ease-calm), opacity var(--dur-base) var(--ease-calm)",
        }}
      >
        <p style={{ margin: "0 0 22px", font: "var(--type-body)", color: "var(--text-body)", maxWidth: "var(--measure-body)" }}>
          {children}
        </p>
      </div>
    </div>
  );
}
