import React from "react";

/**
 * Logo — the AIBasecamp.TV wordmark. Typographic (not a drawn mark):
 * "AI" in heading color, "Basecamp" in the reserved amber, ".TV" muted.
 * `showMark` renders Scout beside the wordmark.
 * `markAvatar` crops Scout into a circular avatar sized to the wordmark cap height.
 * `markCircular` uses a pre-made circular logomark at cap height (no CSS crop).
 */
export function Logo({
  size = "md",
  showMark = true,
  markSrc = "/images/scout-on-trans-bk.png",
  markAvatar = false,
  markCircular = false,
  markScale = 1,
  headlampGlow = false,
  style = {},
  ...rest
}) {
  const sizes = { sm: 20, md: 28, lg: 40 };
  const fs = sizes[size] || sizes.md;
  const mark = Math.round(fs * 1.55);
  const markPx = Math.round(fs * markScale);

  const markSized = markAvatar || markCircular;
  const markStyle = markSized
    ? {
        width: `${markPx}px`,
        height: `${markPx}px`,
        flexShrink: 0,
        display: "block",
      }
    : {
        height: `${mark}px`,
        width: "auto",
        display: "block",
      };

  const markClass = markCircular
    ? "logo__mark logo__mark--circle"
    : markAvatar
      ? "logo__mark logo__mark--avatar"
      : "logo__mark";

  const markImg = (
    <img
      src={markSrc}
      alt="Scout, the AIBasecamp bear with a glowing headlamp"
      className={markClass}
      style={
        headlampGlow
          ? { width: "100%", height: "100%", display: "block" }
          : markStyle
      }
    />
  );

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${Math.round(fs * 0.45)}px`,
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-bold)",
        fontSize: `${fs}px`,
        letterSpacing: "-0.01em",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {showMark && (
        headlampGlow ? (
          <span
            className="logo__mark-wrap logo__mark-wrap--lamp"
            style={{
              width: `${markPx}px`,
              height: `${markPx}px`,
              flexShrink: 0,
            }}
          >
            {markImg}
          </span>
        ) : (
          markImg
        )
      )}
      <span style={{ color: "var(--text-heading)" }}>
        AI<span style={{ color: "var(--accent)" }}>Basecamp</span><span style={{ color: "var(--text-muted)", fontWeight: "var(--fw-semibold)" }}>.TV</span>
      </span>
    </span>
  );
}
