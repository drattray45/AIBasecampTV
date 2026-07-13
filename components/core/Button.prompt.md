**Button** — the single action on a surface; amber `primary` is the reserved CTA pill (headlamp yellow), never decorative.

```jsx
<Button variant="primary" size="lg">Get my free Starter Kit</Button>
<Button variant="secondary">See what's inside</Button>
<Button variant="quiet" as="a" href="#">Or watch a 2-minute Scout video first</Button>
```

Variants: `primary` (amber fill), `secondary` (outline), `quiet` (text + auto arrow →). Sizes `lg` / `md`. Use exactly one primary per view. Works on both paper and `.beacon` surfaces (colors come from tokens).
