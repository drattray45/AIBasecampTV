**Content components** — the reading and layout surfaces.

```jsx
<Card tone="paper" elevated>…</Card>
<Callout tone="honest" title="Honestly reserved">Real before/afters drop in once founding members share them.</Callout>
<StepCard number="1" title="Start with what you know">Your first task uses a topic you're already good at.</StepCard>
<FeatureCard icon={<img src="scout.png" />} title="A guide, not a guru">Scout did the scary part…</FeatureCard>
<PricingCard amount="Free" name="Starter Kit" blurb="Your first 5 AI wins, in the right order." ctaLabel="Get my free Starter Kit" featured />
<FAQItem question="Am I too far behind to start?" defaultOpen>No. You weren't behind — you were handed AI in the wrong order.</FAQItem>
```

`Card` is the base surface; the rest are landing-page compositions. All warm-paper by default; drop inside a `.beacon` container to invert.
