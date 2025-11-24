import type { Metadata } from "next";
import Link from "next/link";

const supportCards = [
  {
    icon: "🚀",
    label: "Getting started",
    bullets: [
      "Download NoseBoop and enable notifications",
      "Upload at least three photos and complete your bio",
      "Set discovery radius, preferred breeds, and play style",
    ],
  },
  {
    icon: "⚙️",
    label: "Discovery controls",
    bullets: [
      "Filter by age, size, and activity level",
      "Hide/show your profile anytime",
      "Save favorite matches for later review",
    ],
  },
  {
    icon: "💬",
    label: "Messaging tips",
    bullets: [
      "Use voice notes for quick updates",
      "Pin meetup details inside each chat",
      "Report suspicious behavior instantly",
    ],
  },
];

const contactOptions = [
  {
    icon: "💬",
    title: "Live chat",
    detail: "Daily 9am–10pm IST",
    href: "#chat",
    action: "Start chat",
  },
  {
    icon: "📧",
    title: "Email",
    detail: "support@tindog.com",
    href: "mailto:support@tindog.com",
    action: "Send email",
  },
  {
    icon: "📞",
    title: "Hotline",
    detail: "+91 80 7117 9999",
    href: "tel:+918071179999",
    action: "Call now",
  },
];

const faq = [
  {
    question: "How do I reset my password?",
    answer:
      'Tap "Forgot password" on login or visit account → security → reset password.',
  },
  {
    question: "Can I pause my profile?",
    answer:
      'Yes. Toggle "Hide profile" inside discovery settings whenever you need a break.',
  },
  {
    question: "How do refunds work?",
    answer:
      "Monthly plans cancel anytime. Annual upgrades follow a pro-rated refund policy.",
  },
];

export const metadata: Metadata = {
  title: "NoseBoop Support",
  description:
    "Guides, contact options, and FAQs to keep your NoseBoop experience smooth.",
};

export default function SupportPage() {
  return (
    <>
      <section className="support-gradient text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 1000, padding: "3rem 1.5rem 2rem" }}
        >
          <p
            className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2"
            style={{ fontSize: "0.75rem" }}
          >
            Support Hub
          </p>
          <h1 className="display-5 fw-bold text-white mb-2">
            We're here for every walk across India
          </h1>
          <p
            className="lead text-white-50 mb-0"
            style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}
          >
            Quick guides, live help, and FAQs to get NoseBoop working exactly how
            you need.
          </p>
        </div>
      </section>

      <main className="container py-4" style={{ maxWidth: 1000 }}>
        <div className="row g-3 mb-4">
          {supportCards.map((card) => (
            <div key={card.label} className="col-md-4">
              <div className="clean-card p-3 h-100">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2" style={{ fontSize: "1.5rem" }}>
                    {card.icon}
                  </span>
                  <p
                    className="support-label mb-0"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {card.label}
                  </p>
                </div>
                <ul
                  className="ps-3 mb-0 text-muted"
                  style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
                >
                  {card.bullets.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-8">
            <div className="clean-card p-3 h-100">
              <p className="support-label mb-3" style={{ fontSize: "0.8rem" }}>
                📞 Need a human?
              </p>
              <div className="row g-2">
                {contactOptions.map((option) => (
                  <div key={option.title} className="col-md-4">
                    <div className="info-chip" style={{ padding: "0.75rem" }}>
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2" style={{ fontSize: "1.2rem" }}>
                          {option.icon}
                        </span>
                        <span
                          style={{ fontSize: "0.75rem", fontWeight: "600" }}
                        >
                          {option.title}
                        </span>
                      </div>
                      <strong
                        style={{
                          fontSize: "0.85rem",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {option.detail}
                      </strong>
                      <a
                        href={option.href}
                        className="btn btn-sm btn-outline-dark"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {option.action}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="clean-card p-3 h-100">
              <p className="support-label mb-3" style={{ fontSize: "0.8rem" }}>
                ❓ FAQ
              </p>
              <div className="faq-stack">
                {faq.map((item) => (
                  <details
                    key={item.question}
                    style={{ marginBottom: "0.75rem" }}
                  >
                    <summary
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.question}
                    </summary>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#6c757d",
                        marginTop: "0.5rem",
                        marginBottom: 0,
                      }}
                    >
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="clean-card p-3 text-center">
              <p className="support-label mb-2" style={{ fontSize: "0.8rem" }}>
                Still need help?
              </p>
              <p
                className="text-muted mb-3"
                style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
              >
                Send us the details, screenshots, or behaviour reports. Our
                India-based team works 24/7 to keep NoseBoop pawsitive.
              </p>
              <Link
                href="mailto:support@tindog.com"
                className="btn btn-primary btn-sm"
              >
                Email support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
