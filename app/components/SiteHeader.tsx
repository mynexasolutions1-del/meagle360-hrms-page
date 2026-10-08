"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { triggerRipple } from "../lib/ripple";

const NAV_LINKS = [
  { href: "/", label: "Home", id: "home" },
  { href: "/pricing", label: "Pricing", id: "pricing" },
  { href: "/contact", label: "Contact", id: "contact" },
  { href: "/careers", label: "Careers", id: "careers" },
];

const TOOL_LINKS = [
  { href: "/tools/payslip-generator", label: "Payslip Generator" },
  { href: "/tools/ctc-to-in-hand-calculator", label: "CTC to In-Hand Calculator" },
  { href: "/tools/quotation-maker", label: "Quotation Maker" },
];

const RESOURCE_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/templates", label: "HR Templates" },
];

export function SiteHeader({
  scrolled,
  navOpen,
  onToggleNav,
  onNavLinkClick,
  activeNav,
}: {
  scrolled: boolean;
  navOpen: boolean;
  onToggleNav: () => void;
  onNavLinkClick: () => void;
  activeNav: string | null;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname?.startsWith("/blog");
  const isContact = pathname === "/contact";
  const isPricing = pathname === "/pricing";
  const isCareers = pathname?.startsWith("/careers");
  const isTools = pathname?.startsWith("/tools");
  const isResources = !!isBlog || pathname?.startsWith("/templates");
  const isFeatures = pathname?.startsWith("/features");

  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Keep dropdown submenus from staying open when the mobile nav itself closes.
  useEffect(() => {
    if (!navOpen) {
      setToolsOpen(false);
      setResourcesOpen(false);
    }
  }, [navOpen]);

  function handleToolLinkClick() {
    setToolsOpen(false);
    onNavLinkClick();
  }

  function handleResourceLinkClick() {
    setResourcesOpen(false);
    onNavLinkClick();
  }

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <nav className={`nav${navOpen ? " open" : ""}`} id="mainNav">
        <a href="/" className="brand">
          <Image src="/logo.png" alt="Meagle 360 logo" className="brand-mark" width={46} height={46} priority />
          Meagle<span>360</span>
        </a>

        <div className="nav-links" id="navLinks">
          <a
            href="/"
            className={`nav-link${isHome && !activeNav ? " active" : ""}`}
            data-nav
            onClick={onNavLinkClick}
          >
            Home
          </a>

          <a
            href="/features"
            className={`nav-link${isFeatures ? " active" : ""}`}
            data-nav
            onClick={onNavLinkClick}
          >
            Features
          </a>

          <a
            href="/pricing"
            className={`nav-link${isPricing ? " active" : ""}`}
            data-nav
            onClick={onNavLinkClick}
          >
            Pricing
          </a>

          <div className={`nav-item${toolsOpen ? " open" : ""}`}>
            <button
              type="button"
              className={`nav-link${isTools ? " active" : ""}`}
              onClick={() => setToolsOpen((o) => !o)}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              Tools
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="dropdown">
              {TOOL_LINKS.map((tool) => (
                <a key={tool.href} href={tool.href} onClick={handleToolLinkClick}>
                  {tool.label}
                </a>
              ))}
            </div>
          </div>

          <div className={`nav-item${resourcesOpen ? " open" : ""}`}>
            <button
              type="button"
              className={`nav-link${isResources ? " active" : ""}`}
              onClick={() => setResourcesOpen((o) => !o)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="dropdown">
              {RESOURCE_LINKS.map((resource) => (
                <a key={resource.href} href={resource.href} onClick={handleResourceLinkClick}>
                  {resource.label}
                </a>
              ))}
            </div>
          </div>

          {NAV_LINKS.filter((l) => l.id !== "home" && l.id !== "pricing").map((link) => {
            let isActive = false;
            if (link.id === "contact") isActive = isContact;
            else if (link.id === "careers") isActive = !!isCareers;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link${isActive ? " active" : ""}`}
                data-nav
                onClick={onNavLinkClick}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="/contact"
            className="btn btn-primary nav-mobile-cta"
            onClick={(e) => { triggerRipple(e); onNavLinkClick(); }}
          >
            Request Demo
          </a>
        </div>

        <div className="nav-actions">
          <a
            href="/contact"
            className="btn btn-primary"
            style={{ borderRadius: 999, padding: "10px 22px" }}
            onClick={triggerRipple}
          >
            Request Demo
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            aria-controls="navLinks"
            onClick={onToggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
