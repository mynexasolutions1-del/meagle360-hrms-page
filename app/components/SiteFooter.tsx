import Image from "next/image";
import { FEATURE_PAGES } from "../../lib/features-data";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      ...FEATURE_PAGES.slice(0, 4).map((f) => ({ label: f.navLabel, href: `/features/${f.slug}` })),
    ],
  },
  {
    title: "More Features",
    links: [
      ...FEATURE_PAGES.slice(4).map((f) => ({ label: f.navLabel, href: `/features/${f.slug}` })),
      { label: "Pricing", href: "/pricing" },
      { label: "Book a Demo", href: "/demo" },
      { label: "Keka Alternative", href: "/alternatives/keka-alternative" },
      { label: "greytHR Alternative", href: "/alternatives/greythr-alternative" },
      { label: "HRMS for Startups", href: "/solutions/hrms-for-startups" },
      { label: "Payslip Generator", href: "/tools/payslip-generator" },
      { label: "CTC to In-Hand Calculator", href: "/tools/ctc-to-in-hand-calculator" },
      { label: "Quotation Maker", href: "/tools/quotation-maker" },
    ],
  },
  {
    title: "Company & Resources",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "HR Templates", href: "/templates" },
      { label: "Security", href: "/security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="brand">
              <Image src="/logo.png" alt="Meagle 360 logo" className="brand-mark" width={46} height={46} style={{ background: "#fff", padding: "4px", borderRadius: "8px" }} />
              Meagle<span>360</span>
            </a>
            <p>
              Meagle 360 is an all-in-one HR management solution designed to
              simplify and empower your workforce.
            </p>
            <p className="footer-tagline">
              A product by{" "}
              <a href="https://nexa-solutions.in" target="_blank" rel="noopener noreferrer">
                Nexa Solutions
              </a>
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            &copy; 2026 Meagle 360. All rights reserved. A product by{" "}
            <a href="https://nexa-solutions.in" target="_blank" rel="noopener noreferrer">
              Nexa Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
