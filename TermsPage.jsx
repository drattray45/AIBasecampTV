import React from "react";
import { Logo } from "./_ds_bundle.js";
import { LEGAL_NAV_LINKS } from "./legalLinks.js";

const SCOUT_NAV = "/images/scout-circle-trans.png";

export default function TermsPage() {
  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = "Terms and Conditions | AIBasecamp.TV";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="legal-header__inner">
          <a href="/" className="legal-header__home" aria-label="AIBasecamp.TV home">
            <Logo size="md" showMark markSrc={SCOUT_NAV} markCircular className="site-logo" />
          </a>
          <a href="/" className="legal-header__back">
            Back to home
          </a>
        </div>
      </header>

      <main className="legal-main container">
        <article className="legal-prose">
          <h1>Terms and Conditions</h1>
          <p className="legal-prose__updated">Last updated on July 14, 2026.</p>
          <p className="legal-prose__intro">
            We're AIBasecampTV ("we", "us", or "our"), trading as AIBasecampTV, a company registered in Connecticut,
            and these Terms and Conditions (our "Terms") form a legally binding agreement between you and us.
          </p>

          <h2>Key Definitions</h2>
          <p>
            <strong>"Services"</strong> means all services provided by us that link to these Terms, including our
            website; and the content provided, generated, or made available for or in relation to our Services (our
            "Materials").
          </p>
          <p>
            <strong>"You"</strong> ("your", the "customer", or the "user") means any individual using our Services,
            including any employees, agents, contractors, or other persons accessing our Services with your
            authorization.
          </p>
          <p>
            <strong>"Using our Services"</strong> means interacting with our Services in any way, including: accessing,
            browsing, providing or transmitting any other information, content, materials, or instructions through our
            Services, integrating with our Services, or doing so directly or through automated tools, scripts, software,
            or third-party applications.
          </p>

          <h2>Agreement to These Terms</h2>
          <p>
            By using our Services, you agree to be bound by these Terms, and any other policies referenced within,
            which are expressly incorporated into these Terms. If you do not agree, you may not use our Services.
          </p>
          <p>
            Our Services are intended for users aged 18 or older, or above the age of majority in their jurisdiction,
            whichever is higher. Persons below this age may not use our Services. If we become aware that a user is
            below the required age, we may suspend or terminate their access to our Services immediately and without
            liability.
          </p>
          <p>By using our Services, you acknowledge and agree that:</p>
          <ul>
            <li>
              you are at least 18 years old (or the age of majority in your location, whichever is higher);
            </li>
            <li>
              you have the legal capacity to enter into these Terms, and if you are representing an organization or
              other legal entity, you have the authority to bind that entity;
            </li>
            <li>
              the information you provide to us is, and will remain, accurate, complete, and current;
            </li>
            <li>
              and you are not located in, ordinarily resident in, or organized under the laws of any jurisdiction
              subject to comprehensive sanctions or embargoes, and you are not a blocked, denied, or otherwise
              restricted party under applicable sanctions or export control lists.
            </li>
          </ul>
          <p>If you do not meet these requirements, you must not use our Services.</p>

          <h2>Conditions of Use</h2>
          <p>
            By using our Services, you warrant on behalf of yourself, your users, and other parties you represent that
            you will not:
          </p>
          <ul>
            <li>
              Modify, copy, prepare derivative works of, decompile, or reverse engineer any Materials, software, or
              content provided through our Services, without prior written permission from us.
            </li>
            <li>
              Remove, alter, or obscure any copyright, trademark, or other proprietary notations on any Materials,
              software available through our Services.
            </li>
            <li>
              Transfer, distribute, or "mirror" any part of our Services' Materials to another server or person without
              explicit authorization from us.
            </li>
            <li>
              Use our Services in a manner that knowingly or negligently disrupts or abuses our networks or any other
              services provided by us.
            </li>
            <li>
              Transmit, distribute, or post any harassing, indecent, obscene, fraudulent, or unlawful material through
              our Services.
            </li>
            <li>
              Use our Services in violation of any applicable local, state, national, or international laws or
              regulations.
            </li>
            <li>Engage in unauthorized advertising or spam activities using our Services.</li>
            <li>
              Harvest, collect, or gather user data without the explicit consent of the user or in violation of our
              Privacy Policy.
            </li>
            <li>
              Use our Services in a manner that infringes, misappropriates, or violates the privacy rights, intellectual
              property rights, or other rights of our company or any third party.
            </li>
            <li>
              Use automated scripts or technologies, including bots or data mining tools, to access, scrape, or extract
              data from our Services without explicit consent from us.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of our Services or any related systems or networks.
            </li>
            <li>
              Engage in any conduct that restricts or inhibits any other user from using or enjoying our Services, or
              which, in our judgment, exposes our company or any of its users to any liability or detriment of any kind.
            </li>
            <li>
              Access, use, export, re-export, transfer, or otherwise make available our Services or any underlying
              software, technology, or content in violation of any applicable export control, trade, or economic
              sanctions laws.
            </li>
            <li>
              Hide or misrepresent your identity, including by using false names, impersonating others, or concealing
              your status as a sanctioned or restricted party.
            </li>
            <li>
              Take advantage of any feature or functionality that a reasonable person would consider to be an obvious
              omission, bug, or error.
            </li>
            <li>
              Attempt to circumvent or bypass any functionalities, restrictions, usage limits, paywalls,
              geo-restrictions, or access features of our Services.
            </li>
          </ul>
          <p>
            Failure to comply with these limitations may result in the suspension or termination of your access and
            rights to our Services, as well as any other legal remedies available to us.
          </p>

          <h2>Changes to Our Terms</h2>
          <p>
            We reserve the right to amend, remove, or vary these Terms at any time. Non-material changes may be
            effective immediately. For material changes, we may require you to re-accept the Terms to continue using our
            Services. We will provide you with reasonable notice as legally required, by any reasonable means, and such
            changes will become effective after the notice period. Changes required by applicable law or emergency may
            take effect immediately regardless of materiality.
          </p>
          <p>
            Your continued access to or use of our Services after the effective date of any modifications constitutes
            your acknowledgment of and agreement to be bound by the revised Terms.
          </p>

          <h2>Your Statutory Rights</h2>
          <p>
            Every clause in these Terms applies in full, except where a mandatory provision of applicable law requires
            otherwise. Nothing in these Terms limits, excludes, or modifies any mandatory rights, protections, or
            remedies you may have under the laws that apply to you.
          </p>

          <h2>Service Updates and Changes</h2>
          <p>
            We may update, modify, or improve our Services from time to time. These updates may include technical
            adjustments, security enhancements, performance improvements, changes to features, or adaptations required
            to comply with legal or regulatory requirements. We reserve the right to implement updates at any time and
            for any reason, whether temporarily or permanently, with or without notice, and without liability to you or
            any third party, to the maximum extent permitted by applicable law.
          </p>
          <p>
            You acknowledge that our Services may contain errors, bugs, or interruptions. We have no obligation to
            provide notice of, or correct, update, modify, maintain, or repair any aspect of our Services, except as
            required by applicable law.
          </p>

          <h2>Discontinuation</h2>
          <p>
            We reserve the right to suspend or discontinue all or part of the Services where reasonably necessary for
            legal, security, operational, or business reasons. Where practicable, we will provide reasonable notice
            before discontinuing a Service.
          </p>

          <h2>Temporary Interruptions</h2>
          <p>
            We aim to keep the Services available and reliable. However, the Services may occasionally be unavailable
            due to scheduled maintenance, updates, technical issues, or circumstances beyond our reasonable control. We
            are not liable for any loss or damage arising from temporary interruptions to the Services, to the maximum
            extent permitted by applicable law.
          </p>

          <h2>User-Generated Content</h2>
          <p>
            "User-Generated Content" refers to any content, materials, information, feedback, ideas, suggestions,
            feature requests, reviews, or communications that you submit, post, upload, share, or otherwise provide to
            us or through our Services, whether publicly or privately.
          </p>
          <p>
            By submitting User-Generated Content to us or through our Services, you grant us a non-exclusive,
            royalty-free, transferable, sub-licensable, worldwide license to use, distribute, modify, run, copy,
            publicly display, translate, or otherwise create derivative works of your content in a manner that is
            consistent with your privacy preferences and our Privacy Policy. This includes, without limitation, the
            right to use feedback, ideas, suggestions, and feature requests to develop, improve, and promote our
            Services without any obligation or compensation to you.
          </p>
          <p>
            You retain your intellectual property ownership rights over your User-Generated Content. By submitting
            User-Generated Content, you represent and warrant that you own or have the necessary rights, licenses, and
            permissions to grant the license above, and that your content does not infringe, misappropriate, or violate
            the rights of any third party.
          </p>
          <p>
            We reserve the right to review, edit, refuse, or remove any User-Generated Content at our sole discretion
            and without notice.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            We aim to ensure that all information found on our Services is accurate and up to date. However, occasional
            errors, inaccuracies, or omissions may occur. We reserve the right to correct such errors and update
            information at any time. We do not warrant or make any representations concerning the accuracy, likely
            results, or reliability of the use of the materials on this website, or otherwise relating to such materials
            or on any resources linked to this website.
          </p>

          <h2>Service Descriptions</h2>
          <p>
            The descriptions of our Services published on our website are intended to accurately represent what is
            offered. However, the nature and scope of our Services may vary depending on your requirements, and minor
            differences between published descriptions and the Services as delivered do not constitute a breach of these
            Terms.
          </p>

          <h2>Accessibility Statement</h2>
          <p>
            We are committed to ensuring that our Services are accessible to everyone. This includes making an active and
            ongoing effort to remove accessibility barriers from our Services and to maintaining our compliance with
            global accessibility standards and regulations.
          </p>
          <p>
            To guide us in making our Services more inclusive and accessible, we follow the Web Content Accessibility
            Guidelines (WCAG 2.2) level A, with which we are currently compliant.
          </p>
          <p>
            As our Services evolve, new content or updates may unintentionally introduce accessibility issues that we
            are not yet aware of. We actively monitor our Services to identify and resolve such issues. If you encounter
            an accessibility barrier, please let us know using the contact details at the base of these Terms.
          </p>

          <h3>How to Send Us Accessibility Feedback</h3>
          <p>
            Please send all accessibility feedback to our team using the contact details at the base of these Terms. You
            can share a description of the accessibility barrier you encountered, the specific webpage or URL where it
            happened, details about your device and any assistive technology you're using (if relevant), and anything
            else you think might help us understand and fix the problem. We will respond to you as quickly as possible.
          </p>

          <h2>Links</h2>
          <p>
            We may provide links to third-party websites, applications, or resources ("Linked Sites") for your
            convenience. However, we don't control, review, monitor, or endorse these Linked Sites or their content,
            and we can't make any promises about their availability, accuracy, reliability, or suitability. When you
            access and use Linked Sites, you're doing so at your own risk, and we won't be responsible for any damages
            or losses that arise from your use of or reliance on any Linked Site.
          </p>
          <p>
            We reserve the right to remove or disable links to any Linked Site at any time without notice or liability.
            When you access any Linked Site, you acknowledge that you're leaving our platform and that different terms
            of use and Privacy Policies may apply to your use of those Linked Sites.
          </p>

          <h2>Events Outside Our Control (Force Majeure)</h2>
          <p>
            We will not be liable or responsible for any failure to perform, or delay in performance of, any of our
            obligations under these Terms that is caused by circumstances outside our reasonable control ("Force Majeure
            Events"). Force Majeure Events include, but are not limited to, acts of God, natural disasters, internet
            outages, cyberattacks, strikes, and failures of third-party services.
          </p>
          <p>
            Upon the occurrence of a Force Majeure Event, we will use commercially reasonable efforts to promptly notify
            you through any reasonable means about the nature of the event and its expected impact on our Services, to
            the extent practicable under the circumstances. Any delay or failure to provide such notification due to the
            Force Majeure Event itself shall not constitute a breach of this agreement or result in any additional
            liability to us. The affected obligations will be suspended for the duration of the Force Majeure Event, and
            any performance deadlines will be automatically extended by a period equal to the duration of the delay
            plus a reasonable period for resuming activities.
          </p>

          <h2>Miscellaneous</h2>

          <h3>Severability</h3>
          <p>
            If any provision of these Terms is found by a court or competent authority to be invalid, unlawful, or
            unenforceable, that provision shall be deemed removed to the extent necessary, and the remaining provisions
            shall remain in full force and effect.
          </p>
          <p>
            If the removal of a provision materially affects the balance of rights and obligations under these Terms,
            we may amend the affected provision to the extent necessary to make it lawful, while preserving its original
            purpose as closely as possible.
          </p>

          <h3>Waiver</h3>
          <p>
            No waiver of any breach, default, or right under these Terms shall be effective unless expressly made in
            writing and signed by an authorized representative of the waiving party. Our failure or delay in exercising
            any right or remedy under these Terms shall not operate as a waiver, impair future rights to strict
            performance, or affect any other available rights or remedies.
          </p>

          <h3>Entire Agreement</h3>
          <p>
            These Terms, together with our Privacy Policy and any mandatory pre-contractual information, form the
            agreement between you and us regarding our Services. They replace any prior discussions or communications
            relating to the same subject matter.
          </p>
          <p>
            Nothing in these Terms limits or excludes any rights you have under applicable consumer protection, unfair
            commercial practices, or data protection laws. If any information we provide to you before entering into the
            contract is required by law to form part of the contract, it will remain binding.
          </p>
          <p>
            We may update these Terms in accordance with the "Changes to Our Terms" section. We are not bound by any
            other term or condition you propose in any correspondence, purchase order, or document, regardless of whether
            we expressly object to it. Any other changes must be agreed in writing.
          </p>

          <h3>Notices</h3>
          <p>
            You may contact us at any time using the contact details at the base of these Terms. Where these Terms
            require notice in writing, email is sufficient unless mandatory law requires another method. A notice is
            considered received when it is sent, provided there is no indication that delivery has failed.
          </p>

          <h3>Assignment</h3>
          <p>
            You may not transfer your rights or obligations under these Terms to another person without our prior written
            consent, unless such transfer is permitted by applicable law.
          </p>
          <p>
            We may transfer our rights and obligations under these Terms to another company, including in connection with
            a merger, acquisition, corporate reorganization, or sale of assets. If we do so, we will ensure that your
            rights under these Terms are not reduced as a result of the transfer. Where required by law, we will inform
            you of such transfer.
          </p>

          <h3>Interpretation</h3>
          <p>In these Terms, "including" means "including but not limited to."</p>
          <p>
            The authoritative version of these Terms is the original English (US) version, which shall prevail over any
            translation in the event of a conflict. Any translations are provided purely for convenience, and we are not
            responsible for errors or inconsistencies in them.
          </p>
          <p>
            Headings in these Terms are for convenience only and do not affect the interpretation of any provision.
          </p>

          <h3>Survival</h3>
          <p>
            Any provision of these Terms that by its nature or express terms should survive the expiration or termination
            of these Terms will survive, including any accrued rights and obligations.
          </p>

          <h2>Contact Information</h2>
          <p>
            Please direct all communications regarding these Terms to:{" "}
            <a href="mailto:info@aibasecamp.tv">info@aibasecamp.tv</a>
          </p>
        </article>
      </main>

      <footer className="legal-footer">
        <div className="legal-footer__inner">
          <a href="/" className="legal-footer__link">
            AIBasecamp.TV
          </a>
          <nav className="legal-footer__nav" aria-label="Legal and contact">
            {LEGAL_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={[
                  "legal-footer__link",
                  link.label === "Terms" && "legal-footer__link--current",
                ].filter(Boolean).join(" ")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
