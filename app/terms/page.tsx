import type { Metadata } from "next";
import Link from "next/link";

const commitments = [
  {
    title: "Community etiquette",
    items: [
      "Treat every dog parent with respect—no spam, harassment, or promotion.",
      "Only publish content you have rights to share and keep it family friendly.",
      "Report suspicious accounts so we can keep NoseBoop welcoming for everyone.",
    ],
  },
  {
    title: "Subscription & billing",
    items: [
      "Paid plans renew automatically each month unless you cancel in the app store.",
      "Upgrade or downgrade at any time—changes take effect with the next billing cycle.",
      "Payments are processed via RBI-compliant gateways with support for UPI, RuPay, and local cards.",
      "We do not store raw payment data; all transactions run through certified processors.",
    ],
  },
  {
    title: "Platform availability",
    items: [
      "We strive for 24/7 uptime but may schedule maintenance to ship improvements.",
      "Features can change as we experiment; we will always announce major updates.",
      "Breaking the rules may result in temporary suspensions or account removal.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms of Service | NoseBoop",
  description:
    "Understand the guidelines for using NoseBoop responsibly and safely.",
};

export default function TermsPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 900, padding: "3rem 1.5rem 2rem" }}
        >
          <p className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2">
            Terms of Service
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Play nice, stay safe.
          </h1>
          <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem" }}>
            These terms keep NoseBoop fun and respectful for every human and pup.
          </p>
        </div>
      </section>

      <main
        className="container py-5"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {commitments.map((group) => (
          <div key={group.title} className="clean-card p-4 mb-4">
            <h3 className="fw-bold mb-3 text-capitalize">{group.title}</h3>
            <ul className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="clean-card p-4">
          <h4 className="fw-bold mb-2">Questions about the rules?</h4>
          <p className="text-muted mb-0">
            Reach out through our{" "}
            <Link
              href="/support"
              className="text-primary text-decoration-none fw-semibold"
            >
              support center
            </Link>{" "}
            any time.
          </p>
        </div>
      </main>
    </>
  );
}
