import React from "react";
import { Logo } from "./_ds_bundle.js";
import { LEGAL_NAV_LINKS } from "./legalLinks.js";

const SCOUT_NAV = "/images/scout-circle-trans.png";

export default function PrivacyPage() {
  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | AIBasecamp.TV";
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
          <h1>Privacy Policy</h1>
          <p className="legal-prose__updated">
            This policy is effective as of July 14, 2026. Last updated: July 14, 2026.
          </p>
          <p className="legal-prose__intro">
            Your privacy is important to us. It is our policy to respect your privacy and comply with any applicable
            law and regulation regarding any personal information we may collect about you, including via our app,
            AIBasecampTV, and its associated services.
          </p>
          <p>
            Personal information is any information about you which can be used to identify you. This includes
            information about you as a person (such as name, address, and date of birth), your devices, payment details,
            and even information about how you use an app or online service.
          </p>
          <p>
            In the event our app contains links to third-party sites and services, please be aware that those sites and
            services have their own privacy policies. After following a link to any third-party content, you should
            read their posted privacy policy information about how they collect and use personal information. This
            Privacy Policy does not apply to any of your activities after you leave our app.
          </p>

          <h2>Information We Collect</h2>
          <p>
            Information we collect falls into one of two categories: "voluntarily provided" information and
            "automatically collected" information.
          </p>
          <p>
            "Voluntarily provided" information refers to any information you knowingly and actively provide us when
            using our app and its associated services.
          </p>
          <p>
            "Automatically collected" information refers to any information automatically sent by your device in the
            course of accessing our app and its associated services.
          </p>

          <h3>Personal Information</h3>
          <p>
            We may ask for personal information, for example, when you submit content to us, when you subscribe to our
            newsletter or when you contact us, which may include one or more of the following:
          </p>
          <ul>
            <li>Name</li>
            <li>Email</li>
          </ul>

          <h2>Legitimate Reasons for Processing Your Personal Information</h2>
          <p>
            We only collect and use your personal information when we have a legitimate reason for doing so. In which
            instance, we only collect personal information that is reasonably necessary to provide our services to you.
          </p>

          <h2>Collection and Use of Information</h2>
          <p>We may collect personal information from you when you do any of the following on our app:</p>
          <ul>
            <li>Sign up to receive updates from us via email or social media channels</li>
            <li>Use a mobile device or web browser to access our content</li>
            <li>Contact us via email, social media, or on any similar technologies</li>
            <li>When you mention us on social media</li>
          </ul>
          <p>
            We may collect, hold, use, and disclose information for the following purposes, and personal information
            will not be further processed in a manner that is incompatible with these purposes:
          </p>
          <ul>
            <li>to provide you with our app's core features and services</li>
            <li>to deliver products and/or services to you</li>
            <li>
              for advertising and marketing, including to send you promotional information about our products and
              services and information about third parties that we consider may be of interest to you
            </li>
          </ul>
          <p>
            We may combine voluntarily provided and automatically collected personal information with general
            information or research data we receive from other trusted sources. For example, if you consent to us
            accessing your social media profiles, we may combine information sourced from those profiles with
            information received from you directly to provide you with an enhanced experience of our app and services.
          </p>

          <h2>Security of Your Personal Information</h2>
          <p>
            When we collect and process personal information, and while we retain this information, we will protect it
            within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure,
            copying, use or modification.
          </p>
          <p>
            Although we will do our best to protect the personal information you provide to us, we advise that no method
            of electronic transmission or storage is 100% secure and no one can guarantee absolute data security.
          </p>
          <p>
            You are responsible for selecting any password and its overall security strength, ensuring the security of
            your own information within the bounds of our services. For example, ensuring you do not make your personal
            information publicly available via our platform.
          </p>

          <h2>How Long We Keep Your Personal Information</h2>
          <p>
            We keep your personal information only for as long as we need to. This time period may depend on what we
            are using your information for, in accordance with this privacy policy. For example, if you have provided
            us with personal information such as an email address when contacting us about a specific enquiry, we may
            retain this information for the duration of your enquiry remaining open as well as for our own records so we
            may effectively address similar enquiries in future. If your personal information is no longer required for
            this purpose, we will delete it or make it anonymous by removing all details that identify you.
          </p>
          <p>
            However, if necessary, we may retain your personal information for our compliance with a legal, accounting,
            or reporting obligation or for archiving purposes in the public interest, scientific, or historical
            research purposes or statistical purposes.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            We do not aim any of our products or services directly at children under the age of 13 and we do not
            knowingly collect personal information about children under 13.
          </p>

          <h2>Your Rights and Controlling Your Personal Information</h2>
          <p>
            <strong>Your choice:</strong> By providing personal information to us, you understand we will collect,
            hold, use, and disclose your personal information in accordance with this privacy policy. You do not have
            to provide personal information to us, however, if you do not, it may affect your use of our app or the
            products and/or services offered on or through it.
          </p>
          <p>
            <strong>Information from third parties:</strong> If we receive personal information about you from a third
            party, we will protect it as set out in this privacy policy. If you are a third party providing personal
            information about somebody else, you represent and warrant that you have such person's consent to provide
            the personal information to us.
          </p>
          <p>
            <strong>Marketing permission:</strong> If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time by contacting us using the details
            below.
          </p>
          <p>
            <strong>Access:</strong> You may request details of the personal information that we hold about you.
          </p>
          <p>
            <strong>Correction:</strong> If you believe that any information we hold about you is inaccurate, out of
            date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy
            policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete,
            misleading, or out of date.
          </p>
          <p>
            <strong>Non-discrimination:</strong> We will not discriminate against you for exercising any of your rights
            over your personal information. Unless your personal information is required to provide you with a
            particular service or offer (for example serving particular content to your device), we will not deny you
            goods or services and/or charge you different prices or rates for goods or services, including through
            granting discounts or other benefits, or imposing penalties, or provide you with a different level or
            quality of goods or services.
          </p>
          <p>
            <strong>Notification of data breaches:</strong> We will comply with laws applicable to us in respect of any
            data breach.
          </p>
          <p>
            <strong>Complaints:</strong> If you believe that we have breached a relevant data protection law and wish to
            make a complaint, please contact us using the details below and provide us with full details of the alleged
            breach. We will promptly investigate your complaint and respond to you, in writing, setting out the
            outcome of our investigation and the steps we will take to deal with your complaint. You also have the right
            to contact a regulatory body or data protection authority in relation to your complaint.
          </p>
          <p>
            <strong>Unsubscribe:</strong> To unsubscribe from our email database or opt-out of communications (including
            marketing communications), please contact us using the details provided in this privacy policy, or opt-out
            using the opt-out facilities provided in the communication. We may need to request specific information
            from you to help us confirm your identity.
          </p>

          <h2>Business Transfers</h2>
          <p>
            If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we
            would include data, including your personal information, among the assets transferred to any parties who
            acquire us. You acknowledge that such transfers may occur, and that any parties who acquire us may, to the
            extent permitted by applicable law, continue to use your personal information according to this policy,
            which they will be required to assume as it is the basis for any ownership or use rights we have over such
            information.
          </p>

          <h2>Limits of Our Policy</h2>
          <p>
            Our app may link to external sites that are not operated by us. Please be aware that we have no control over
            the content and policies of those sites, and cannot accept responsibility or liability for their respective
            privacy practices.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            At our discretion, we may change our privacy policy to reflect updates to our business processes, current
            acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we
            will post the changes here at the same link by which you are accessing this privacy policy.
          </p>
          <p>
            If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as
            applicable, any new uses of your personal information.
          </p>

          <h2>Contact Us</h2>
          <p>For any questions or concerns regarding your privacy, you may contact us using the following details:</p>
          <p>
            <strong>AIBasecampTV</strong>
            <br />
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
                  link.label === "Privacy" && "legal-footer__link--current",
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
