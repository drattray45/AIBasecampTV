/* AIBasecamp.TV — Landing page UI kit.
   Composes the design-system components. Beacon-mode hero into warm-paper body;
   one repeated CTA with a calm email-capture flow. */
import React from "react";
import {
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
  Logo,
} from "./_ds_bundle.js";

const SCOUT = "/images/scout-on-trans-bk.png";
const SCOUT_NAV = "/images/scout-circle-trans.png";
const MOBILE_NAV_ID = "site-mobile-nav";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#kit", label: "The free kit" },
  { href: "#watch", label: "Watch on YouTube" },
];

function Header({ onGet }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const menuRef = React.useRef(null);
  const hamburgerRef = React.useRef(null);

  const closeMenu = React.useCallback(() => setMenuOpen(false), []);
  const openMenu = React.useCallback(() => setMenuOpen(true), []);

  React.useEffect(() => {
    const sentinel = document.querySelector(".hero-scroll-sentinel");
    if (!sentinel || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const panel = menuRef.current;
    if (!panel) return;
    if (menuOpen) panel.removeAttribute("inert");
    else panel.setAttribute("inert", "");
  }, [menuOpen]);

  React.useEffect(() => {
    if (!menuOpen) return undefined;

    document.body.classList.add("nav-open");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    const panel = menuRef.current;
    if (!panel) {
      return () => {
        document.body.classList.remove("nav-open");
        document.body.style.overflow = previousOverflow;
        document.removeEventListener("keydown", onKeyDown);
      };
    }

    const focusables = panel.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    const trapFocus = (event) => {
      if (event.key !== "Tab" || focusables.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    panel.addEventListener("keydown", trapFocus);

    return () => {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      panel.removeEventListener("keydown", trapFocus);
      hamburgerRef.current?.focus();
    };
  }, [menuOpen, closeMenu]);

  const handleNavLink = () => closeMenu();

  const handlePanelCta = () => {
    closeMenu();
    onGet();
  };

  return (
    <header
      className={[
        "site-header",
        "beacon",
        isScrolled && "is-scrolled",
        menuOpen && "is-menu-open",
      ].filter(Boolean).join(" ")}
    >
      <div className="container site-header__inner">
        <a href="#" className="site-logo-link" aria-label="AIBasecamp.TV home">
          <Logo size="md" showMark markSrc={SCOUT_NAV} markCircular markScale={3} headlampGlow className="site-logo" />
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">{link.label}</a>
          ))}
          <Button variant="primary" size="md" onClick={onGet}>Get my free Starter Kit</Button>
        </nav>

        <div className="site-header__mobile">
          <Button variant="primary" size="md" className="site-header__cta" onClick={onGet}>
            <span className="site-header__cta-label site-header__cta-label--short">Get the free kit</span>
            <span className="site-header__cta-label site-header__cta-label--full">Get my free Starter Kit</span>
          </Button>
          <button
            ref={hamburgerRef}
            type="button"
            className="site-nav__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_NAV_ID}
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
          >
            <span className="site-nav__toggle-bar" aria-hidden="true" />
            <span className="site-nav__toggle-bar" aria-hidden="true" />
            <span className="site-nav__toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`site-nav__overlay${menuOpen ? " is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
        tabIndex={-1}
      />

      <nav
        id={MOBILE_NAV_ID}
        ref={menuRef}
        className={`site-nav__panel beacon${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
      >
        <div className="site-nav__panel-header">
          <span className="site-nav__panel-title">Menu</span>
          <button
            type="button"
            className="site-nav__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <ul className="site-nav__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="site-nav__mobile-link" onClick={handleNavLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="site-nav__panel-footer">
          <Button variant="primary" size="lg" fullWidth onClick={handlePanelCta}>
            Get my free Starter Kit
          </Button>
        </div>
      </nav>
    </header>
  );
}

function Hero({ onGet }) {
  return (
    <section className="hero-beacon">
      <div className="container hero-beacon__inner">
        <div className="hero-beacon__content">
          <div className="hero-beacon__badges">
            <Badge tone="free">Free</Badge>
            <Badge tone="neutral">No tech skills</Badge>
            <Badge tone="neutral">No sign-up to look</Badge>
          </div>
          <h1 className="hero-beacon__title">
            Feel behind on AI? You're not. Here's your{" "}
            <span className="hero-beacon__highlight">first{"\u00A0"}step</span>.
          </h1>
          <p className="hero-beacon__lead">
            Free, friendly lessons for non-technical people, guided by Scout, who already did the confusing part for you. No tech skills, no jargon.
          </p>
          <Button variant="primary" size="lg" onClick={onGet}>Get my free Starter Kit</Button>
          <div className="hero-beacon__meta">Free · No tech skills · No sign-up to look</div>
        </div>
        <div className="hero-beacon__visual">
          <div className="hero-beacon__composition">
            <img
              src={SCOUT}
              alt="Scout, headlamp glowing on a mountain-night"
              className="hero-beacon__scout"
            />
            <Card tone="beacon" elevated className="hero-beacon__demo">
              <div className="demo-card__eyebrow">A real answer you can read</div>
              <Textarea
                monospace
                readOnly
                rows={3}
                style={{ background: "var(--surface-sunken)", color: "var(--text-body)", borderColor: "var(--border-default)" }}
                value="Explain growing tomatoes to a beginner, and name one common mistake people make."
              />
              <div className="demo-card__answer">
                Start seeds indoors 6–8 weeks before the last frost, give them full sun, and water at the base, not the leaves. <strong>The most common mistake:</strong> planting outside too early, when a late frost can undo all your work.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolsBar() {
  return (
    <section className="tools-bar">
      <div className="container tools-bar__inner">
        <div className="tools-bar__label">The tools you'll actually use (all free to start)</div>
        <div className="tools-bar__chips">
          {["ChatGPT", "Claude", "Canva", "Perplexity", "Grammarly"].map((t) => (
            <ToolChip key={t}>{t}</ToolChip>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, sub, children, narrow, centered }) {
  const innerClass = narrow ? "container--narrow" : "container";
  const sectionClass = centered ? "section section--center" : "section";
  return (
    <section id={id} className={sectionClass}>
      <div className={innerClass}>
        {eyebrow && <div className="section__eyebrow">{eyebrow}</div>}
        {title && <h2 className="section__title">{title}</h2>}
        {sub && <p className="section__sub">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const onGet = () => { setDone(false); setOpen(true); };

  return (
    <div className="page">
      <div className="hero-stack beacon">
        <div className="hero-scroll-sentinel" aria-hidden="true" />
        <Header onGet={onGet} />
        <Hero onGet={onGet} />
      </div>
      <ToolsBar />

      <Section id="problem" narrow centered title={"You tried it once. It felt like everyone got a memo you\u00A0didn't."}>
        <p className="section__body">
          You opened ChatGPT, typed a question, got a bland answer, and quietly decided you're just not getting it. You're not alone, and you weren't wrong to feel lost. Every "just use AI" article starts three steps ahead of where you are.
        </p>
      </Section>

      <div className="surface-raised">
        <Section id="how" eyebrow="How it works" title={"A calm, walkable path. Confidence before\u00A0capability."}>
          <div className="grid-steps">
            <StepCard number="1" title={"Start with what you\u00A0know"}>Your first task uses a topic you're already good at, so you can tell the answer's right. The win comes before anything hard.</StepCard>
            <StepCard number="2" title={"One small win a\u00A0day"}>Five real tasks, in the order that doesn't lose people. Do one a day and you're using AI for real by Friday. No rush.</StepCard>
            <StepCard number="3" title={"Use AI for real\u00A0things"}>Write the awkward email, make sense of the confusing letter, hand off the boring task. Quietly capable, on your own terms.</StepCard>
          </div>
        </Section>
      </div>

      <Section id="why" eyebrow="Why it works" title={"Built for someone who feels behind, not a power\u00A0user."}>
        <div className="grid-features">
          <FeatureCard title={"A guide, not a\u00A0guru"}>Scout did the scary part and won't ever make you feel dumb for asking. You're walking up with someone, not being lectured at.</FeatureCard>
          <FeatureCard title={"The right order, not a\u00A0firehose"}>The five things that matter, in the order that builds confidence, so you never drown in options.</FeatureCard>
          <FeatureCard title={"The exact words to\u00A0type"}>Copy-paste prompts mean you never face a blank box again. The bland answer wasn't you. It was the wrong question.</FeatureCard>
          <FeatureCard title={"Go at your own\u00A0pace"}>No streaks to break, no pressure, no "you're falling behind." Come back tomorrow; the path waits for you.</FeatureCard>
        </div>
      </Section>

      <div className="surface-raised">
        <Section eyebrow="Real beginner stories" title="Shown here once they're real.">
          <Callout tone="honest" title={"Honestly reserved. Earned-proof\u00A0only."}>
            Real before/afters from founding members drop in here: name, age, ordinary job, in their own words. We won't fake it. Until then, what's true today: built by someone who spent three years deep in these tools, making every mistake so you don't have to.
          </Callout>
        </Section>
      </div>

      <Section id="kit" eyebrow="When you're ready (no rush, no subscription)" title={"A gentle, one-time ladder. The free kit is the\u00A0point."}>
        <div className="grid-pricing">
          <PricingCard featured amount="Free" name="Starter Kit" blurb="Your first 5 AI wins, in the right order." ctaLabel="Get my free Starter Kit" onCtaClick={onGet} />
          <PricingCard amount="$17" name="The 5 AI Tasks pack" blurb="Every task written out with the exact words to type." ctaLabel="See what's inside" onCtaClick={onGet} />
          <PricingCard amount="$99" name="Founding course" blurb="The full Basecamp Path, founding price, backed by the 60-day promise." ctaLabel="Join the founding group" onCtaClick={onGet} />
        </div>
      </Section>

      <Section eyebrow="Honest answers" title={"The questions you're actually\u00A0asking."} narrow centered>
        <Card tone="paper" className="faq-card">
          <FAQItem question={"Isn't all this free on YouTube\u00A0already?"} defaultOpen>The information is everywhere. That's part of why it's overwhelming. What's not free is the order, the exact words to type, and a guide who won't make you feel dumb. That's what the kit gives you.</FAQItem>
          <FAQItem question={"Am I too far behind to\u00A0start?"}>No. You weren't behind. You were handed AI in the wrong order. We start with one thing you already know, today.</FAQItem>
          <FAQItem question={"Do I need to be\u00A0technical?"}>If you can use email, you can do this. No coding, no setup, nothing to install.</FAQItem>
          <FAQItem question={"Do I have to pay for\u00A0ChatGPT?"}>No. Everything in the Starter Kit works on the free versions.</FAQItem>
          <FAQItem question={"What if it doesn't click for\u00A0me?"}>Do the course and if it still doesn't click, email us within 60 days for every penny back. If it didn't work, that's on us to teach better, not on you to try harder.</FAQItem>
        </Card>
      </Section>

      <section id="watch" className="beacon cta-beacon">
        <div className="container--cta cta-beacon__inner">
          <h2 className="cta-beacon__title">Start with one thing you already{"\u00A0"}know.</h2>
          <Button variant="primary" size="lg" onClick={onGet}>Get my free Starter Kit</Button>
          <div className="cta-beacon__alt">
            <Button variant="quiet" as="a" href="#">Or watch a 2-minute Scout video first</Button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <Logo size="sm" showMark markSrc={SCOUT} markAvatar />
            <p className="site-footer__tagline">Made for people who feel behind, by someone who's been{"\u00A0"}there.</p>
          </div>
          <nav className="site-footer__nav">
            {["How it works", "The free kit", "YouTube", "Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="site-footer__link">{l}</a>
            ))}
          </nav>
        </div>
      </footer>

      {open && <StarterKitModal done={done} setDone={setDone} onClose={() => setOpen(false)} />}
    </div>
  );
}

function StarterKitModal({ done, setDone, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="starter-kit-title">
        <Card tone="paper" elevated>
          {!done ? (
            <form className="modal-panel__form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <div className="modal-panel__header">
                <img src={SCOUT} alt="Scout" className="modal-panel__scout" />
                <Badge tone="free">Free</Badge>
              </div>
              <h3 id="starter-kit-title" className="modal-panel__title">Your first 5 AI wins, in the right{"\u00A0"}order.</h3>
              <p className="modal-panel__body">Tell us where to send the Starter Kit. No spam, and no sign-up needed to look around.</p>
              <Input label="Your email" type="email" required placeholder="you@example.com" helper="We'll send your kit here." />
              <Button variant="primary" size="lg" type="submit" fullWidth>Get my free Starter Kit</Button>
            </form>
          ) : (
            <div className="modal-panel__success">
              <img src={SCOUT} alt="Scout" className="modal-panel__scout modal-panel__scout--lg" />
              <h3 className="modal-panel__title">Nice. Check your email.</h3>
              <p className="modal-panel__body">Your Starter Kit is on its way. Start with step one whenever you're ready. No rush, the path waits for you.</p>
              <Button variant="secondary" size="md" onClick={onClose}>Back to the page</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
