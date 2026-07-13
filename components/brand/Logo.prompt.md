**Logo** — the AIBasecamp.TV wordmark, typographic: "AI" in heading color, "Basecamp" in the reserved amber, ".TV" muted. Optionally paired with the real Scout headlamp portrait.

```jsx
<Logo size="md" />
<Logo size="lg" showMark markSrc="assets/scout-portrait.png" />
<Logo showMark={false} />   {/* wordmark only */}
```

Colors come from tokens, so it inverts correctly on `.beacon` surfaces. `markSrc` must point to `assets/scout-portrait.png` relative to the page. There is no separate drawn logomark — the wordmark + Scout portrait IS the identity.
