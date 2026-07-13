/* @ds-bundle: {"format":4,"namespace":"AIBasecampTVDesignSystem_944591","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"FAQItem","sourcePath":"components/content/FAQItem.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"PricingCard","sourcePath":"components/content/PricingCard.jsx"},{"name":"StepCard","sourcePath":"components/content/StepCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ToolChip","sourcePath":"components/core/ToolChip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"89a6145bb5bc","components/content/Callout.jsx":"f3e9aa94e107","components/content/Card.jsx":"811ef13009ee","components/content/FAQItem.jsx":"5d53a2166d8d","components/content/FeatureCard.jsx":"2a15fd1588f1","components/content/PricingCard.jsx":"3c6db05109b5","components/content/StepCard.jsx":"2e246c7a0e0f","components/core/Badge.jsx":"36d0285424ff","components/core/Button.jsx":"6e8b3e1be378","components/core/ToolChip.jsx":"efc4af40cf9c","components/forms/Input.jsx":"85bfab8007aa","components/forms/Textarea.jsx":"61f0ae59f6cb","ui_kits/landing/LandingPage.jsx":"48befa6baddf","ui_kits/landing/LandingPage.standalone.jsx":"3fb988700756"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AIBasecampTVDesignSystem_944591 = window.AIBasecampTVDesignSystem_944591 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the AIBasecamp.TV wordmark. Typographic (not a drawn mark):
 * "AI" in heading color, "Basecamp" in the reserved amber, ".TV" muted.
 * `showMark` renders the real Scout headlamp portrait beside it.
 * On a .beacon surface the colors invert automatically via tokens.
 */
function Logo({
  size = "md",
  showMark = true,
  markSrc = "public/images/scout-on-trans-bk.png",
  markAvatar = false,
  markCircular = false,
  markScale = 1,
  headlampGlow = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 20,
    md: 28,
    lg: 40
  };
  const fs = sizes[size] || sizes.md;
  const mark = Math.round(fs * 1.55);
  const markPx = Math.round(fs * markScale);
  const markSized = markAvatar || markCircular;
  const markStyle = markSized ? {
    width: `${markPx}px`,
    height: `${markPx}px`,
    flexShrink: 0,
    display: "block"
  } : {
    height: `${mark}px`,
    width: "auto",
    display: "block"
  };
  const markClass = markCircular ? "logo__mark logo__mark--circle" : markAvatar ? "logo__mark logo__mark--avatar" : "logo__mark";
  const markImg = /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Scout, the AIBasecamp bear with a glowing headlamp",
    className: markClass,
    style: headlampGlow ? {
      width: "100%",
      height: "100%",
      display: "block"
    } : markStyle
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: `${Math.round(fs * 0.45)}px`,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-bold)",
      fontSize: `${fs}px`,
      letterSpacing: "-0.01em",
      lineHeight: 1,
      ...style
    }
  }, rest), showMark && (headlampGlow ? /*#__PURE__*/React.createElement("span", {
    className: "logo__mark-wrap logo__mark-wrap--lamp",
    style: {
      width: `${markPx}px`,
      height: `${markPx}px`,
      flexShrink: 0
    }
  }, markImg) : markImg), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-heading)"
    }
  }, "AI", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Basecamp"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontWeight: "var(--fw-semibold)"
    }
  }, ".TV")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — a warm, quiet aside. Not an alert. Used for honesty notes,
 * "reserved / earned-proof" panels, gentle reassurance.
 * tone: reassure (leaf) | honest (clay) | note (quiet paper).
 */
function Callout({
  children,
  title,
  tone = "note",
  style = {},
  ...rest
}) {
  const tones = {
    reassure: {
      bg: "var(--leaf-100)",
      bar: "var(--leaf-600)",
      head: "var(--leaf-600)"
    },
    honest: {
      bg: "var(--clay-100)",
      bar: "var(--clay-600)",
      head: "var(--clay-600)"
    },
    note: {
      bg: "var(--surface-raised)",
      bar: "var(--border-strong)",
      head: "var(--text-heading)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "16px",
      background: t.bg,
      borderRadius: "var(--radius-md)",
      padding: "20px 22px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "4px",
      borderRadius: "var(--radius-pill)",
      background: t.bar,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-base)",
      color: t.head,
      marginBottom: "4px",
      textWrap: "balance"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base warm surface. Soft radius, warm low shadow, hairline border.
 * `tone`: paper (default warm card) | quiet (sunken wash) | beacon (dark surface).
 * `elevated` adds the larger warm shadow for hero cards.
 */
function Card({
  children,
  tone = "paper",
  elevated = false,
  style = {},
  ...rest
}) {
  const tones = {
    paper: {
      background: "var(--surface-card)",
      border: "var(--border-hairline)"
    },
    quiet: {
      background: "var(--surface-raised)",
      border: "var(--border-hairline)"
    },
    beacon: {
      background: "var(--surface-card)",
      border: "var(--border-default)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.background,
      border: `var(--border-w) solid ${t.border}`,
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card)",
      boxShadow: elevated ? "var(--shadow-lg)" : "var(--shadow-md)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/FAQItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FAQItem — an honest, expandable objection-handler. Plain question,
 * calm answer. Defaults open on `defaultOpen`.
 */
function FAQItem({
  question,
  children,
  defaultOpen = false,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: "var(--border-w) solid var(--border-default)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
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
      textWrap: "balance"
    },
    "aria-expanded": open
  }, question, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      fontSize: "var(--text-xl)",
      color: "var(--text-muted)",
      transform: open ? "rotate(45deg)" : "none",
      transition: "transform var(--dur-base) var(--ease-calm)"
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      maxHeight: open ? "400px" : "0",
      opacity: open ? 1 : 0,
      transition: "max-height var(--dur-slow) var(--ease-calm), opacity var(--dur-base) var(--ease-calm)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      font: "var(--type-body)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)"
    }
  }, children)));
}
Object.assign(__ds_scope, { FAQItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FAQItem.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureCard — a reassurance-led benefit. Optional icon slot (pass an <img>
 * of a Scout scene or a glyph). Title + short body. Warm, roomy.
 */
function FeatureCard({
  icon,
  title,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "18px",
      alignItems: "flex-start",
      background: "var(--surface-card)",
      border: "var(--border-w) solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card)",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: "52px",
      height: "52px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      font: "var(--type-h3)",
      fontSize: "var(--text-xl)",
      color: "var(--text-heading)",
      textWrap: "balance"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)"
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StepCard — one step on the Basecamp Path. A quiet numbered marker,
 * a display-font title, plain body. Confidence before capability.
 */
function StepCard({
  number,
  title,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      background: "var(--surface-card)",
      border: "var(--border-w) solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card)",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-sunken)",
      color: "var(--brown-600)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-xl)"
    }
  }, number), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h3)",
      color: "var(--text-heading)",
      textWrap: "balance"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small, calm status/label tag.
 * tone: neutral | free | success | note. "free" uses the amber quiet wash
 * (the free Starter Kit is the hero). Never alarmist.
 */
function Badge({
  children,
  tone = "neutral",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--surface-sunken)",
      color: "var(--text-muted)",
      border: "var(--border-hairline)"
    },
    free: {
      background: "var(--accent-quiet)",
      color: "var(--highlight-word)",
      border: "transparent"
    },
    success: {
      background: "var(--leaf-100)",
      color: "var(--leaf-600)",
      border: "transparent"
    },
    note: {
      background: "var(--clay-100)",
      color: "var(--clay-600)",
      border: "transparent"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — AIBasecamp.TV
 * Amber pill = the reserved CTA. Never decorative; use for the one action.
 * Secondary/quiet carry lower-stakes actions.
 */
function Button({
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
    lg: {
      padding: "16px 30px",
      fontSize: "var(--text-base)"
    },
    md: {
      padding: "12px 22px",
      fontSize: "var(--text-sm)"
    }
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
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      boxShadow: "var(--shadow-cta)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-heading)",
      borderColor: "var(--border-strong)"
    },
    quiet: {
      background: "transparent",
      color: "var(--link)",
      padding: size === "lg" ? "16px 8px" : "12px 6px",
      borderRadius: 0,
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (variant === "primary") {
        e.currentTarget.style.background = "var(--accent-hover)";
      }
      if (variant === "secondary") {
        e.currentTarget.style.borderColor = "var(--focus-ring)";
      }
      e.currentTarget.style.transform = "translateY(-1px)";
    },
    onMouseLeave: e => {
      if (variant === "primary") {
        e.currentTarget.style.background = "var(--accent)";
      }
      if (variant === "secondary") {
        e.currentTarget.style.borderColor = "var(--border-strong)";
      }
      e.currentTarget.style.transform = "none";
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(-1px)";
    }
  }, rest), children, variant === "quiet" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PricingCard — one rung of the gentle, one-time ladder. `featured` (the free
 * kit) gets a warm amber border + Free badge. No subscription language.
 */
function PricingCard({
  amount,
  name,
  blurb,
  ctaLabel,
  ctaVariant,
  featured = false,
  onCtaClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      background: featured ? "var(--accent-quiet)" : "var(--surface-card)",
      border: `${featured ? "var(--border-w-strong)" : "var(--border-w)"} solid ${featured ? "var(--accent)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card)",
      boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
      ...style
    }
  }, rest), featured && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "4px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "free"
  }, "Start here")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h2)",
      fontSize: "var(--text-3xl)",
      color: "var(--text-heading)"
    }
  }, amount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-base)",
      color: "var(--text-heading)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 16px",
      font: "var(--type-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant || (featured ? "primary" : "secondary"),
    size: "md",
    fullWidth: true,
    onClick: onCtaClick
  }, ctaLabel)));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/core/ToolChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ToolChip — a quiet, honest name-tag for a familiar tool
 * (ChatGPT, Claude, Canva…). Used in the "tools you'll actually use" bar
 * instead of fabricated customer logos. Deliberately plain: no fake logo.
 */
function ToolChip({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "9px 18px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      background: "var(--surface-raised)",
      border: "var(--border-w) solid var(--border-hairline)",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ToolChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ToolChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a calm, generous text field. Large target, high contrast,
 * warm focus ring. Label sits above; helper text below.
 */
function Input({
  label,
  helper,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      ...style
    }
  }, rest)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — for the "read-only worked example" / prompt boxes and any
 * multiline entry. Same calm treatment as Input. Set `readOnly` + `monospace`
 * for a copy-paste prompt display.
 */
function Textarea({
  label,
  helper,
  id,
  monospace = false,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rest.rows || 4,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      ...style
    }
  }, rest)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, helper));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LandingPage.jsx
try { (() => {
/* AIBasecamp.TV — Landing page UI kit.
   Composes the design-system components. Reads them from the bundle namespace.
   Beacon-mode hero into warm-paper body; one repeated CTA with a calm
   email-capture flow. */
const NS = window.AIBasecampTVDesignSystem_944591;
const {
  Button,
  ToolChip,
  Badge,
  Input,
  Textarea,
  Card,
  Callout,
  StepCard,
  FeatureCard,
  PricingCard,
  FAQItem,
  Logo
} = NS;
const SCOUT = "../../assets/scout-portrait.png";
function Header({
  onGet
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(7,24,29,.82)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md",
    showMark: true,
    markSrc: SCOUT
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#kit",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, "The free kit"), /*#__PURE__*/React.createElement("a", {
    href: "#watch",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, "Watch on YouTube"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: onGet
  }, "Get my free Starter Kit"))));
}
function Hero({
  onGet
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "beacon",
    style: {
      background: "var(--beacon-gradient)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "80px 32px 96px",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "free"
  }, "Free"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "No tech skills"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "No sign-up to look")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      fontSize: "clamp(2.6rem,5vw,4.25rem)",
      color: "var(--text-heading)",
      margin: "0 0 20px",
      maxWidth: "15ch"
    }
  }, "Feel behind on AI? You're not \u2014 here's your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--highlight-word)"
    }
  }, "first step"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      margin: "0 0 30px",
      maxWidth: "44ch"
    }
  }, "Free, friendly lessons for non-technical people \u2014 guided by Scout, who already did the confusing part for you. No tech skills, no jargon."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGet
  }, "Get my free Starter Kit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Free \xB7 No tech skills \xB7 No sign-up to look")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-10% -20% auto auto",
      width: 320,
      height: 320,
      background: "var(--headlamp-beam)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: SCOUT,
    alt: "Scout, headlamp glowing on a mountain-night",
    style: {
      position: "absolute",
      top: -18,
      right: 8,
      height: 132,
      filter: "drop-shadow(0 0 30px rgba(255,210,74,.35))",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "beacon",
    elevated: true,
    style: {
      position: "relative",
      zIndex: 1,
      marginTop: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "A real answer you can read"), /*#__PURE__*/React.createElement(Textarea, {
    monospace: true,
    readOnly: true,
    rows: 3,
    style: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      borderColor: "var(--border-default)"
    },
    value: 'Explain growing tomatoes to a beginner, and name one common mistake people make.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "16px 18px",
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-md)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)"
    }
  }, "Start seeds indoors 6\u20138 weeks before the last frost, give them full sun, and water at the base \u2014 not the leaves. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-heading)"
    }
  }, "The most common mistake:"), " planting outside too early, when a late frost can undo all your work.")))));
}
function ToolsBar() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-raised)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "36px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 18
    }
  }, "The tools you'll actually use (all free to start)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, ["ChatGPT", "Claude", "Canva", "Perplexity", "Grammarly"].map(t => /*#__PURE__*/React.createElement(ToolChip, {
    key: t
  }, t)))));
}
function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
  max
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: "var(--section-y) 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max || "var(--content-max)",
      margin: "0 auto"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--highlight-word)",
      marginBottom: 12
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-heading)",
      margin: "0 0 14px",
      maxWidth: "22ch"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      margin: "0 0 40px",
      maxWidth: "var(--measure-body)"
    }
  }, sub), children));
}
function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const onGet = () => {
    setDone(false);
    setOpen(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onGet: onGet
  }), /*#__PURE__*/React.createElement(Hero, {
    onGet: onGet
  }), /*#__PURE__*/React.createElement(ToolsBar, null), /*#__PURE__*/React.createElement(Section, {
    id: "problem",
    title: "You tried it once. It felt like everyone got a memo you didn't.",
    max: "52rem"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)",
      margin: 0
    }
  }, "You opened ChatGPT, typed a question, got a bland answer, and quietly decided you're just not getting it. You're not alone \u2014 and you weren't wrong to feel lost. Every \"just use AI\" article starts three steps ahead of where you are.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    id: "how",
    eyebrow: "How it works",
    title: "A calm, walkable path \u2014 confidence before capability."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    number: "1",
    title: "Start with what you know"
  }, "Your first task uses a topic you're already good at, so you can tell the answer's right. The win comes before anything hard."), /*#__PURE__*/React.createElement(StepCard, {
    number: "2",
    title: "One small win a day"
  }, "Five real tasks, in the order that doesn't lose people. Do one a day and you're using AI for real by Friday \u2014 no rush."), /*#__PURE__*/React.createElement(StepCard, {
    number: "3",
    title: "Use AI for real things"
  }, "Write the awkward email, make sense of the confusing letter, hand off the boring task. Quietly capable, on your own terms.")))), /*#__PURE__*/React.createElement(Section, {
    id: "why",
    eyebrow: "Why it works",
    title: "Built for someone who feels behind \u2014 not a power user."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    title: "A guide, not a guru"
  }, "Scout did the scary part and won't ever make you feel dumb for asking. You're walking up with someone, not being lectured at."), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "The right order, not a firehose"
  }, "The five things that matter, in the order that builds confidence \u2014 so you never drown in options."), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "The exact words to type"
  }, "Copy-paste prompts mean you never face a blank box again. The bland answer wasn't you \u2014 it was the wrong question."), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "Go at your own pace"
  }, "No streaks to break, no pressure, no \"you're falling behind.\" Come back tomorrow; the path waits for you."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Real beginner stories",
    title: "Shown here once they're real."
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "honest",
    title: "Honestly reserved \u2014 earned-proof only"
  }, "Real before/afters from founding members drop in here \u2014 name, age, ordinary job, in their own words. We won't fake it. Until then, what's true today: built by someone who spent three years deep in these tools, making every mistake so you don't have to."))), /*#__PURE__*/React.createElement(Section, {
    id: "kit",
    eyebrow: "When you're ready (no rush, no subscription)",
    title: "A gentle, one-time ladder. The free kit is the point."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    featured: true,
    amount: "Free",
    name: "Starter Kit",
    blurb: "Your first 5 AI wins, in the right order.",
    ctaLabel: "Get my free Starter Kit"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    amount: "$17",
    name: "The 5 AI Tasks pack",
    blurb: "Every task written out with the exact words to type.",
    ctaLabel: "See what's inside"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    amount: "$99",
    name: "Founding course",
    blurb: "The full Basecamp Path, founding price \u2014 backed by the 60-day promise.",
    ctaLabel: "Join the founding group"
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Honest answers",
    title: "The questions you're actually asking.",
    max: "52rem"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    style: {
      padding: "8px 28px"
    }
  }, /*#__PURE__*/React.createElement(FAQItem, {
    question: "Isn't all this free on YouTube already?",
    defaultOpen: true
  }, "The information is everywhere \u2014 that's part of why it's overwhelming. What's not free is the order, the exact words to type, and a guide who won't make you feel dumb. That's what the kit gives you."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Am I too far behind to start?"
  }, "No. You weren't behind \u2014 you were handed AI in the wrong order. We start with one thing you already know, today."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Do I need to be technical?"
  }, "If you can use email, you can do this. No coding, no setup, nothing to install."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Do I have to pay for ChatGPT?"
  }, "No. Everything in the Starter Kit works on the free versions."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "What if it doesn't click for me?"
  }, "Do the course and if it still doesn't click, email us within 60 days for every penny back. If it didn't work, that's on us to teach better \u2014 not on you to try harder."))), /*#__PURE__*/React.createElement("section", {
    id: "watch",
    className: "beacon",
    style: {
      background: "var(--beacon-gradient)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "52rem",
      margin: "0 auto",
      padding: "var(--space-9) 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      color: "var(--text-heading)",
      margin: "0 auto 24px",
      maxWidth: "18ch"
    }
  }, "Start with one thing you already know."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGet
  }, "Get my free Starter Kit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    as: "a",
    href: "#"
  }, "Or watch a 2-minute Scout video first")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "40px 32px",
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: "sm",
    showMark: true,
    markSrc: SCOUT
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Made for people who feel behind \u2014 by someone who's been there.")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 18,
      flexWrap: "wrap",
      fontSize: "var(--text-sm)"
    }
  }, ["How it works", "The free kit", "YouTube", "Privacy", "Terms", "Contact"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, l))))), open && /*#__PURE__*/React.createElement(StarterKitModal, {
    done: done,
    setDone: setDone,
    onClose: () => setOpen(false)
  }));
}
function StarterKitModal({
  done,
  setDone,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(7,24,29,.55)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    elevated: true
  }, !done ? /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SCOUT,
    alt: "Scout",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "free"
  }, "Free")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)",
      margin: "6px 0 6px"
    }
  }, "Your first 5 AI wins, in the right order."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      margin: "0 0 20px"
    }
  }, "Tell us where to send the Starter Kit. No spam, and no sign-up needed to look around."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your email",
    type: "email",
    required: true,
    placeholder: "you@example.com",
    helper: "We'll send your kit here."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Get my free Starter Kit"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SCOUT,
    alt: "Scout",
    style: {
      height: 72,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)",
      margin: "0 0 8px"
    }
  }, "Nice \u2014 check your email."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      margin: "0 0 22px",
      maxWidth: "34ch",
      marginInline: "auto"
    }
  }, "Your Starter Kit is on its way. Start with step one whenever you're ready \u2014 no rush, the path waits for you."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    onClick: onClose
  }, "Back to the page")))));
}
window.LandingPage = LandingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LandingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LandingPage.standalone.jsx
try { (() => {
/* AIBasecamp.TV — Landing page UI kit.
   Composes the design-system components. Reads them from the bundle namespace.
   Beacon-mode hero into warm-paper body; one repeated CTA with a calm
   email-capture flow. */
const NS = window.AIBasecampTVDesignSystem_944591;
const {
  Button,
  ToolChip,
  Badge,
  Input,
  Textarea,
  Card,
  Callout,
  StepCard,
  FeatureCard,
  PricingCard,
  FAQItem,
  Logo
} = NS;
const SCOUT = window.__resources.scout;
function Header({
  onGet
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(7,24,29,.82)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md",
    showMark: true,
    markSrc: SCOUT
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#kit",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, "The free kit"), /*#__PURE__*/React.createElement("a", {
    href: "#watch",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, "Watch on YouTube"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: onGet
  }, "Get my free Starter Kit"))));
}
function Hero({
  onGet
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "beacon",
    style: {
      background: "var(--beacon-gradient)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "80px 32px 96px",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "free"
  }, "Free"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "No tech skills"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "No sign-up to look")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      fontSize: "clamp(2.6rem,5vw,4.25rem)",
      color: "var(--text-heading)",
      margin: "0 0 20px",
      maxWidth: "15ch"
    }
  }, "Feel behind on AI? You're not \u2014 here's your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--highlight-word)"
    }
  }, "first step"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      margin: "0 0 30px",
      maxWidth: "44ch"
    }
  }, "Free, friendly lessons for non-technical people \u2014 guided by Scout, who already did the confusing part for you. No tech skills, no jargon."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGet
  }, "Get my free Starter Kit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Free \xB7 No tech skills \xB7 No sign-up to look")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-10% -20% auto auto",
      width: 320,
      height: 320,
      background: "var(--headlamp-beam)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: SCOUT,
    alt: "Scout, headlamp glowing on a mountain-night",
    style: {
      position: "absolute",
      top: -18,
      right: 8,
      height: 132,
      filter: "drop-shadow(0 0 30px rgba(255,210,74,.35))",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "beacon",
    elevated: true,
    style: {
      position: "relative",
      zIndex: 1,
      marginTop: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "A real answer you can read"), /*#__PURE__*/React.createElement(Textarea, {
    monospace: true,
    readOnly: true,
    rows: 3,
    style: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      borderColor: "var(--border-default)"
    },
    value: 'Explain growing tomatoes to a beginner, and name one common mistake people make.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "16px 18px",
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-md)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)"
    }
  }, "Start seeds indoors 6\u20138 weeks before the last frost, give them full sun, and water at the base \u2014 not the leaves. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-heading)"
    }
  }, "The most common mistake:"), " planting outside too early, when a late frost can undo all your work.")))));
}
function ToolsBar() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-raised)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "36px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 18
    }
  }, "The tools you'll actually use (all free to start)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, ["ChatGPT", "Claude", "Canva", "Perplexity", "Grammarly"].map(t => /*#__PURE__*/React.createElement(ToolChip, {
    key: t
  }, t)))));
}
function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
  max
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: "var(--section-y) 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max || "var(--content-max)",
      margin: "0 auto"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--highlight-word)",
      marginBottom: 12
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-heading)",
      margin: "0 0 14px",
      maxWidth: "22ch"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      margin: "0 0 40px",
      maxWidth: "var(--measure-body)"
    }
  }, sub), children));
}
function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const onGet = () => {
    setDone(false);
    setOpen(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onGet: onGet
  }), /*#__PURE__*/React.createElement(Hero, {
    onGet: onGet
  }), /*#__PURE__*/React.createElement(ToolsBar, null), /*#__PURE__*/React.createElement(Section, {
    id: "problem",
    title: "You tried it once. It felt like everyone got a memo you didn't.",
    max: "52rem"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)",
      margin: 0
    }
  }, "You opened ChatGPT, typed a question, got a bland answer, and quietly decided you're just not getting it. You're not alone \u2014 and you weren't wrong to feel lost. Every \"just use AI\" article starts three steps ahead of where you are.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    id: "how",
    eyebrow: "How it works",
    title: "A calm, walkable path \u2014 confidence before capability."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    number: "1",
    title: "Start with what you know"
  }, "Your first task uses a topic you're already good at, so you can tell the answer's right. The win comes before anything hard."), /*#__PURE__*/React.createElement(StepCard, {
    number: "2",
    title: "One small win a day"
  }, "Five real tasks, in the order that doesn't lose people. Do one a day and you're using AI for real by Friday \u2014 no rush."), /*#__PURE__*/React.createElement(StepCard, {
    number: "3",
    title: "Use AI for real things"
  }, "Write the awkward email, make sense of the confusing letter, hand off the boring task. Quietly capable, on your own terms.")))), /*#__PURE__*/React.createElement(Section, {
    id: "why",
    eyebrow: "Why it works",
    title: "Built for someone who feels behind \u2014 not a power user."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    title: "A guide, not a guru"
  }, "Scout did the scary part and won't ever make you feel dumb for asking. You're walking up with someone, not being lectured at."), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "The right order, not a firehose"
  }, "The five things that matter, in the order that builds confidence \u2014 so you never drown in options."), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "The exact words to type"
  }, "Copy-paste prompts mean you never face a blank box again. The bland answer wasn't you \u2014 it was the wrong question."), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "Go at your own pace"
  }, "No streaks to break, no pressure, no \"you're falling behind.\" Come back tomorrow; the path waits for you."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Real beginner stories",
    title: "Shown here once they're real."
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "honest",
    title: "Honestly reserved \u2014 earned-proof only"
  }, "Real before/afters from founding members drop in here \u2014 name, age, ordinary job, in their own words. We won't fake it. Until then, what's true today: built by someone who spent three years deep in these tools, making every mistake so you don't have to."))), /*#__PURE__*/React.createElement(Section, {
    id: "kit",
    eyebrow: "When you're ready (no rush, no subscription)",
    title: "A gentle, one-time ladder. The free kit is the point."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    featured: true,
    amount: "Free",
    name: "Starter Kit",
    blurb: "Your first 5 AI wins, in the right order.",
    ctaLabel: "Get my free Starter Kit"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    amount: "$17",
    name: "The 5 AI Tasks pack",
    blurb: "Every task written out with the exact words to type.",
    ctaLabel: "See what's inside"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    amount: "$99",
    name: "Founding course",
    blurb: "The full Basecamp Path, founding price \u2014 backed by the 60-day promise.",
    ctaLabel: "Join the founding group"
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Honest answers",
    title: "The questions you're actually asking.",
    max: "52rem"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    style: {
      padding: "8px 28px"
    }
  }, /*#__PURE__*/React.createElement(FAQItem, {
    question: "Isn't all this free on YouTube already?",
    defaultOpen: true
  }, "The information is everywhere \u2014 that's part of why it's overwhelming. What's not free is the order, the exact words to type, and a guide who won't make you feel dumb. That's what the kit gives you."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Am I too far behind to start?"
  }, "No. You weren't behind \u2014 you were handed AI in the wrong order. We start with one thing you already know, today."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Do I need to be technical?"
  }, "If you can use email, you can do this. No coding, no setup, nothing to install."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Do I have to pay for ChatGPT?"
  }, "No. Everything in the Starter Kit works on the free versions."), /*#__PURE__*/React.createElement(FAQItem, {
    question: "What if it doesn't click for me?"
  }, "Do the course and if it still doesn't click, email us within 60 days for every penny back. If it didn't work, that's on us to teach better \u2014 not on you to try harder."))), /*#__PURE__*/React.createElement("section", {
    id: "watch",
    className: "beacon",
    style: {
      background: "var(--beacon-gradient)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "52rem",
      margin: "0 auto",
      padding: "var(--space-9) 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      color: "var(--text-heading)",
      margin: "0 auto 24px",
      maxWidth: "18ch"
    }
  }, "Start with one thing you already know."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGet
  }, "Get my free Starter Kit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    as: "a",
    href: "#"
  }, "Or watch a 2-minute Scout video first")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "40px 32px",
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: "sm",
    showMark: true,
    markSrc: SCOUT
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Made for people who feel behind \u2014 by someone who's been there.")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 18,
      flexWrap: "wrap",
      fontSize: "var(--text-sm)"
    }
  }, ["How it works", "The free kit", "YouTube", "Privacy", "Terms", "Contact"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, l))))), open && /*#__PURE__*/React.createElement(StarterKitModal, {
    done: done,
    setDone: setDone,
    onClose: () => setOpen(false)
  }));
}
function StarterKitModal({
  done,
  setDone,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(7,24,29,.55)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    elevated: true
  }, !done ? /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SCOUT,
    alt: "Scout",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "free"
  }, "Free")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)",
      margin: "6px 0 6px"
    }
  }, "Your first 5 AI wins, in the right order."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      margin: "0 0 20px"
    }
  }, "Tell us where to send the Starter Kit. No spam, and no sign-up needed to look around."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your email",
    type: "email",
    required: true,
    placeholder: "you@example.com",
    helper: "We'll send your kit here."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Get my free Starter Kit"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SCOUT,
    alt: "Scout",
    style: {
      height: 72,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)",
      margin: "0 0 8px"
    }
  }, "Nice \u2014 check your email."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      margin: "0 0 22px",
      maxWidth: "34ch",
      marginInline: "auto"
    }
  }, "Your Starter Kit is on its way. Start with step one whenever you're ready \u2014 no rush, the path waits for you."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    onClick: onClose
  }, "Back to the page")))));
}
window.LandingPage = LandingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LandingPage.standalone.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FAQItem = __ds_scope.FAQItem;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ToolChip = __ds_scope.ToolChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
