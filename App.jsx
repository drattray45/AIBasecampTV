import React from "react";
import LandingPage from "./LandingPage.jsx";
import TermsPage from "./TermsPage.jsx";
import PrivacyPage from "./PrivacyPage.jsx";

function getPage() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/terms") return "terms";
  if (path === "/privacy") return "privacy";
  return "home";
}

export default function App() {
  const [page, setPage] = React.useState(getPage);

  React.useEffect(() => {
    const onNavigate = () => setPage(getPage());
    window.addEventListener("popstate", onNavigate);
    return () => window.removeEventListener("popstate", onNavigate);
  }, []);

  if (page === "terms") return <TermsPage />;
  if (page === "privacy") return <PrivacyPage />;
  return <LandingPage />;
}
