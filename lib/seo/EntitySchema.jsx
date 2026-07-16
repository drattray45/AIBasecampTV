import React from "react";
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from "./jsonLd.js";

/**
 * Injects Organization + WebSite JSON-LD into the document head.
 * Entity identity only — no Article, FAQPage, VideoObject, etc.
 */
export function EntitySchema() {
  const organization = React.useMemo(() => JSON.stringify(buildOrganizationJsonLd()), []);
  const website = React.useMemo(() => JSON.stringify(buildWebSiteJsonLd()), []);

  React.useEffect(() => {
    const scripts = [
      { id: "schema-org-organization", json: organization },
      { id: "schema-org-website", json: website },
    ];

    for (const { id, json } of scripts) {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        el.type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = json;
    }

    return () => {
      for (const { id } of scripts) {
        document.getElementById(id)?.remove();
      }
    };
  }, [organization, website]);

  return null;
}
