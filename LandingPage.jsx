/* AIBasecamp.TV — Landing page UI kit.
   Composes the design-system components. Beacon-mode hero into warm-paper body;
   one repeated CTA with a calm email-capture flow. */
import React from "react";
import {
  Button,
  ToolChip,
  Badge,
  Textarea,
  Card,
  Callout,
  StepCard,
  FeatureCard,
  FAQItem,
  Logo,
} from "./_ds_bundle.js";

const SCOUT = "/images/scout-on-trans-bk.png";
const SCOUT_NAV = "/images/scout-circle-trans.png";
const STARTER_KIT_COVER = "/images/Your-first-5-wins.png";
const MOBILE_NAV_ID = "site-mobile-nav";
const STARTER_KIT_ANCHOR = "#starter-kit";

// SwipeOne field hashes — will change if the form is rebuilt in SwipeOne, which breaks submission silently.
const SWIPEONE_SUBMIT_URL = "https://api.swipeone.com/forms/6a556e47ac97da23d73bf2d1/submit";
const SWIPEONE_FIELD_FIRST_NAME = "cb9c3a2658";
const SWIPEONE_FIELD_EMAIL = "7eab9fd5ad";
const SWIPEONE_FIELD_HONEYPOT = "_so_hp";

// SwipeOne footer newsletter — separate form from Starter Kit (different CRM segment).
// Field hashes will change if the form is rebuilt in SwipeOne, which breaks submission silently.
const SWIPEONE_NEWSLETTER_SUBMIT_URL = "https://api.swipeone.com/forms/6a560459ac97da23d7430add/submit";
const SWIPEONE_NEWSLETTER_FIELD_EMAIL = "833591daea";
const SWIPEONE_NEWSLETTER_FIELD_HONEYPOT = "_so_hp";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@aibasecamptv";
const SCOUT_INTRO_VIDEO_URL = "https://youtu.be/lGV4teiP0r0";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#starter-kit", label: "The free kit" },
  { href: YOUTUBE_CHANNEL_URL, label: "Watch on YouTube", external: true },
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function Header() {
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
            <a
              key={link.href}
              href={link.href}
              className="site-nav__link"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="md" as="a" href={STARTER_KIT_ANCHOR}>Get my free Starter Kit</Button>
        </nav>

        <div className="site-header__mobile">
          <Button variant="primary" size="md" className="site-header__cta" as="a" href={STARTER_KIT_ANCHOR} onClick={closeMenu}>
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
              <a
                href={link.href}
                className="site-nav__mobile-link"
                onClick={handleNavLink}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="site-nav__panel-footer">
          <Button variant="primary" size="lg" fullWidth as="a" href={STARTER_KIT_ANCHOR} onClick={handlePanelCta}>
            Get my free Starter Kit
          </Button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
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
          <Button variant="primary" size="lg" as="a" href={STARTER_KIT_ANCHOR}>Get my free Starter Kit</Button>
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

const TOOLS = [
  { name: "ChatGPT", logo: "/images/chatgpt1.webp", logoSize: "var(--tool-logo-size-chatgpt)" },
  { name: "Claude", logo: "/images/Claude.webp" },
  { name: "Canva", logo: "/images/canva2.webp" },
  { name: "Perplexity", logo: "/images/perplexity.webp" },
];

function ToolsBar() {
  const stageRef = React.useRef(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    const node = stageRef.current;
    if (!node || revealed || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: 0.5,
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section className={`tools-bar${revealed ? " is-revealed" : ""}`}>
      <div className="container tools-bar__inner">
        <div className="tools-bar__label">The tools you'll actually use (all free to start)</div>
        <div className="tools-bar__stage" ref={stageRef}>
          <div className="tools-bar__beam" aria-hidden="true">
            <span className="tools-bar__beam-tint" />
          </div>
          <div className="tools-bar__chips">
            {TOOLS.map((tool, index) => (
              <ToolChip
                key={tool.name}
                logoSrc={tool.logo}
                logoMaskMode={tool.logoMaskMode}
                className="tools-bar__chip"
                style={{
                  "--chip-index": index,
                  fontSize: "var(--tool-pill-font-size)",
                  padding: "var(--tool-pill-pad-y) var(--tool-pill-pad-x)",
                  gap: "var(--tool-pill-gap)",
                  ...(tool.logoSize ? { "--tool-logo-size": tool.logoSize } : {}),
                }}
              >
                {tool.name}
              </ToolChip>
            ))}
          </div>
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

function StarterKitSection() {
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [honeypot, setHoneypot] = React.useState("");
  const [fieldErrors, setFieldErrors] = React.useState({ firstName: "", email: "" });
  const [networkError, setNetworkError] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const firstNameId = "starter-kit-first-name";
  const emailId = "starter-kit-email";
  const statusId = "starter-kit-status";

  const validateFirstName = (value) => {
    if (!value.trim()) return "What should Scout call you?";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "An email address helps us send the kit.";
    if (!isValidEmail(value)) return "That address does not look right. Mind checking it?";
    return "";
  };

  const setFieldError = (field, message) => {
    setFieldErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleFirstNameBlur = () => {
    setFieldError("firstName", validateFirstName(firstName));
  };

  const handleEmailBlur = () => {
    setFieldError("email", validateEmail(email));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNetworkError("");

    const firstNameError = validateFirstName(firstName);
    const emailError = validateEmail(email);
    setFieldErrors({ firstName: firstNameError, email: emailError });

    if (firstNameError || emailError) return;

    setSubmitting(true);

    try {
      const response = await fetch(SWIPEONE_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [SWIPEONE_FIELD_FIRST_NAME]: firstName.trim(),
          [SWIPEONE_FIELD_EMAIL]: email.trim(),
          [SWIPEONE_FIELD_HONEYPOT]: honeypot,
          _pageUrl: window.location.href,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (data.status === "success") {
        setSuccess(true);
        return;
      }

      setNetworkError(
        typeof data.message === "string" && data.message.trim()
          ? data.message
          : "Something did not go through on our end. Mind trying once more?"
      );
    } catch {
      setNetworkError("We could not reach the server right now. Mind trying once more in a moment?");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="starter-kit" className="starter-kit" aria-labelledby="starter-kit-heading">
      <div className="starter-kit__inner">
        <div className="starter-kit__visual-col">
          <div className="starter-kit__cover">
            <img
              src={STARTER_KIT_COVER}
              alt="Cover of the Your first 5 AI wins Starter Kit booklet"
              className="starter-kit__cover-img"
              width={280}
              height={360}
            />
          </div>
        </div>

        <div className="starter-kit__form-col">
          {success ? (
            <div role="status" aria-live="polite" aria-atomic="true">
              <h2 id="starter-kit-heading" className="starter-kit__success-title">
                Your Starter Kit is on its way.
              </h2>
              <p className="starter-kit__success-body">
                Check your inbox. Task one uses something you already know, so you will be able to tell the answer is right.
              </p>
            </div>
          ) : (
            <>
              <h2 id="starter-kit-heading" className="starter-kit__title">
                Start where you already know things.
              </h2>
              <p className="starter-kit__sub">
                Five real tasks, in the order that does not lose people. Do one a day and you are using AI for real by Friday. No cost, nothing to install, no rush.
              </p>

              <form className="starter-kit-form" onSubmit={handleSubmit} noValidate>
                <div className="starter-kit-form__fields">
                  <div>
                    <label htmlFor={firstNameId} className="visually-hidden">First name</label>
                    <input
                      id={firstNameId}
                      className="starter-kit-form__input"
                      type="text"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      placeholder="First name"
                      value={firstName}
                      onChange={(event) => {
                        setFirstName(event.target.value);
                        if (fieldErrors.firstName) setFieldError("firstName", "");
                      }}
                      onBlur={handleFirstNameBlur}
                      aria-invalid={fieldErrors.firstName ? "true" : undefined}
                      aria-describedby={fieldErrors.firstName ? `${firstNameId}-error` : undefined}
                    />
                    {fieldErrors.firstName ? (
                      <p id={`${firstNameId}-error`} className="starter-kit-form__error" role="alert" aria-live="polite">
                        {fieldErrors.firstName}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor={emailId} className="visually-hidden">Email</label>
                    <input
                      id={emailId}
                      className="starter-kit-form__input"
                      type="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (fieldErrors.email) setFieldError("email", "");
                      }}
                      onBlur={handleEmailBlur}
                      aria-invalid={fieldErrors.email ? "true" : undefined}
                      aria-describedby={
                        fieldErrors.email || networkError
                          ? statusId
                          : "starter-kit-fine"
                      }
                    />
                    {fieldErrors.email ? (
                      <p id={statusId} className="starter-kit-form__error" role="alert" aria-live="polite">
                        {fieldErrors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <input
                  type="text"
                  name={SWIPEONE_FIELD_HONEYPOT}
                  className="starter-kit-form__hp"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />

                {networkError && !fieldErrors.email ? (
                  <p id={statusId} className="starter-kit-form__network-error" role="alert" aria-live="polite">
                    {networkError}
                  </p>
                ) : null}

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="starter-kit-form__submit"
                  disabled={submitting}
                  aria-busy={submitting || undefined}
                >
                  {submitting ? "Sending…" : "Get my free Starter Kit"}
                </Button>

                <p id="starter-kit-fine" className="reassurance-line starter-kit-form__fine">
                  You will also get a short note from Scout most weeks. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <div className="page">
      <div className="hero-stack beacon">
        <div className="hero-scroll-sentinel" aria-hidden="true" />
        <Header />
        <Hero />
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

      <Section eyebrow="Honest answers" title={"The questions you're actually\u00A0asking."} narrow centered>
        <Card tone="paper" className="faq-card">
          <FAQItem question={"Isn't all this free on YouTube\u00A0already?"} defaultOpen>The information is everywhere. That's part of why it's overwhelming. What's not free is the order, the exact words to type, and a guide who won't make you feel dumb. That's what the kit gives you.</FAQItem>
          <FAQItem question={"Am I too far behind to\u00A0start?"}>No. You weren't behind. You were handed AI in the wrong order. We start with one thing you already know, today.</FAQItem>
          <FAQItem question={"Do I need to be\u00A0technical?"}>If you can use email, you can do this. No coding, no setup, nothing to install.</FAQItem>
          <FAQItem question={"Do I have to pay for\u00A0ChatGPT?"}>No. Everything in the Starter Kit works on the free versions.</FAQItem>
          <FAQItem question={"What if it doesn't click for\u00A0me?"}>Start with task one on something you already know, so you can tell if the answer's right. If you're still stuck, reply to the kit email and say where it lost you. We read those. If it didn't click, that's on us to teach better, not on you to try harder.</FAQItem>
        </Card>
      </Section>

      <section id="watch" className="beacon cta-beacon">
        <div className="container--cta cta-beacon__inner">
          <h2 className="cta-beacon__title">
            You were never behind. You were handed AI in the wrong order.
          </h2>
          <div className="cta-beacon__alt">
            <Button
              variant="quiet"
              as="a"
              href={SCOUT_INTRO_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Or watch a 3-minute Scout video first
            </Button>
          </div>
        </div>
      </section>

      <StarterKitSection />

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
          <FooterNewsletter />
        </div>
      </footer>
    </div>
  );
}

function FooterNewsletter() {
  const [email, setEmail] = React.useState("");
  const [honeypot, setHoneypot] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState("");
  const [networkError, setNetworkError] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const inputId = "footer-newsletter-email";
  const statusId = "footer-newsletter-status";

  const validateEmail = (value) => {
    if (!value.trim()) return "An email address helps Scout reach you.";
    if (!isValidEmail(value)) return "That address does not look right. Mind checking it?";
    return "";
  };

  const handleEmailBlur = () => {
    setError(validateEmail(email));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNetworkError("");

    const emailError = validateEmail(email);
    setError(emailError);
    if (emailError) return;

    setSubmitting(true);

    try {
      const response = await fetch(SWIPEONE_NEWSLETTER_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [SWIPEONE_NEWSLETTER_FIELD_EMAIL]: email.trim(),
          [SWIPEONE_NEWSLETTER_FIELD_HONEYPOT]: honeypot,
          _pageUrl: window.location.href,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (data.status === "success") {
        setDone(true);
        return;
      }

      setNetworkError(
        typeof data.message === "string" && data.message.trim()
          ? data.message
          : "Something did not go through on our end. Mind trying once more?"
      );
    } catch {
      setNetworkError("We could not reach the server right now. Mind trying once more in a moment?");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="site-footer-newsletter" aria-labelledby="footer-newsletter-heading">
      <h2 id="footer-newsletter-heading" className="site-footer-newsletter__title">
        Not ready to start? Stay on the trail.
      </h2>
      <p className="site-footer-newsletter__sub">
        A short note from Scout most weeks. No rush, no pressure, and nothing to install.
      </p>

      {done ? (
        <p id={statusId} className="site-footer-newsletter__success" role="status" aria-live="polite">
          Nice. Scout will be in touch.
        </p>
      ) : (
        <form className="site-footer-newsletter__form" onSubmit={handleSubmit} noValidate>
          <div className="site-footer-newsletter__row">
            <label htmlFor={inputId} className="visually-hidden">Email for Scout's notes</label>
            <input
              id={inputId}
              className="site-footer-newsletter__input"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError("");
                if (networkError) setNetworkError("");
              }}
              onBlur={handleEmailBlur}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={
                error || networkError ? statusId : "footer-newsletter-fine"
              }
            />
            <Button
              variant="primary"
              size="md"
              type="submit"
              className="site-footer-newsletter__submit"
              disabled={submitting}
              aria-busy={submitting || undefined}
              style={{ boxShadow: "none" }}
            >
              {submitting ? "Sending…" : "Send me Scout's notes"}
            </Button>
          </div>

          <input
            type="text"
            name={SWIPEONE_NEWSLETTER_FIELD_HONEYPOT}
            className="site-footer-newsletter__hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />

          {error ? (
            <p id={statusId} className="site-footer-newsletter__error" role="alert" aria-live="polite">
              {error}
            </p>
          ) : networkError ? (
            <p id={statusId} className="site-footer-newsletter__error" role="alert" aria-live="polite">
              {networkError}
            </p>
          ) : (
            <p id="footer-newsletter-fine" className="reassurance-line site-footer-newsletter__fine">
              Unsubscribe anytime.
            </p>
          )}
        </form>
      )}
    </section>
  );
}

export default LandingPage;
