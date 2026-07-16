import {
  BRAND_NAME,
  DOMAIN,
  LOGO_URL,
  SITE_DESCRIPTION,
  SOCIALS,
} from "./site.js";

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: DOMAIN,
    logo: LOGO_URL,
    description: SITE_DESCRIPTION,
    sameAs: SOCIALS,
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: DOMAIN,
    description: SITE_DESCRIPTION,
  };
}
