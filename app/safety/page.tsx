import type { Metadata } from "next";
import Link from "next/link";

const safetyTips = [
  {
    icon: "💬",
    title: "Online safety",
    items: [
      "Chat inside NoseBoop until you feel confident",
      "Use video calls to verify profiles",
      "Report suspicious behavior immediately",
    ],
  },
  {
    icon: "🐾",
    title: "Playdate prep",
    items: [
      "Meet in public, dog-friendly spaces during daylight",
      "Share vaccination records before meeting",
      "Bring backup supplies (treats, water, leash)",
    ],
  },
  {
    icon: "🛡️",
    title: "Stay protected",
    items: [
      "Enable location sharing with a trusted contact",
      "Screenshot profiles before leaving",
      "Know your nearest 24/7 vet clinic",
    ],
  },
];

const quickChecklist = [
  "Profile shows verification badge",
  "Energy level and temperament discussed",
  "Vaccination docs shared this year",
  "Public location confirmed (park, café, store)",
];

export const metadata: Metadata = {
  title: "Dog Dating Safety Tips | NoseBoop",
  description:
    "Clear safety guidance, travel notes, and emergency contacts for NoseBoop members.",
};

export default function SafetyPage() {
  return (
    <>
      <section className="with-navbar-offset safety-hero gradient-background text-white">
        <div
          className="container"
          style={{ maxWidth: 1000, padding: "3rem 1.5rem 2rem" }}
        >
          <p
            className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2"
            style={{ fontSize: "0.75rem" }}
          >
            Safety Center
          </p>
          <h1 className="display-5 fw-bold mb-2">Sniff smart. Play safe.</h1>
          <p
            className="lead text-white-50 mb-3"
            style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}
          >
            Essential safety tips to keep every NoseBoop playdate safe and
            enjoyable.
          </p>
        </div>
      </section>

      <main className="container py-4" style={{ maxWidth: 1000 }}>
        <div className="row g-3 mb-4">
          {safetyTips.map((tip) => (
            <div key={tip.title} className="col-md-4">
              <div className="clean-card p-3 h-100">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2" style={{ fontSize: "1.5rem" }}>
                    {tip.icon}
                  </span>
                  <p
                    className="safety-label mb-0"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {tip.title}
                  </p>
                </div>
                <ul
                  className="ps-3 mb-0 text-muted"
                  style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
                >
                  {tip.items.map((item, idx) => (
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
          <div className="col-md-6">
            <div className="clean-card p-3 h-100">
              <p className="safety-label mb-2" style={{ fontSize: "0.8rem" }}>
                Pre-playdate checklist
              </p>
              <ul
                className="ps-3 mb-0 text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
              >
                {quickChecklist.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="clean-card p-3 h-100">
              <p className="safety-label mb-2" style={{ fontSize: "0.8rem" }}>
                Community standards
              </p>
              <p
                className="text-muted mb-3"
                style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
              >
                NoseBoop reviews every report. Violations result in profile
                suspension or removal.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span
                  className="badge rounded-pill bg-light text-dark"
                  style={{ fontSize: "0.75rem" }}
                >
                  Report abuse
                </span>
                <span
                  className="badge rounded-pill bg-light text-dark"
                  style={{ fontSize: "0.75rem" }}
                >
                  Block instantly
                </span>
                <span
                  className="badge rounded-pill bg-light text-dark"
                  style={{ fontSize: "0.75rem" }}
                >
                  24/7 support
                </span>
              </div>
              <Link href="/support" className="btn btn-sm btn-outline-primary">
                View policies
              </Link>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="clean-card p-3 h-100">
              <p className="safety-label mb-2" style={{ fontSize: "0.8rem" }}>
                ✈️ Traveling pups
              </p>
              <p
                className="text-muted mb-2"
                style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
              >
                Hide your profile until you arrive. Review local ordinances in
                the app guide.
              </p>
              <ul
                className="ps-3 mb-0 text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
              >
                <li className="mb-1">Hide profile until in new city</li>
                <li className="mb-1">Check local leash/breed rules</li>
                <li className="mb-0">Add temporary vet contacts</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="clean-card p-3 h-100">
              <p className="safety-label mb-2" style={{ fontSize: "0.8rem" }}>
                🆘 Need immediate help?
              </p>
              <p
                className="text-muted mb-3"
                style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
              >
                Our trust & safety team responds 24/7.
              </p>
              <div className="info-stack" style={{ gap: "0.75rem" }}>
                <div className="info-chip" style={{ padding: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem" }}>Email</span>
                  <strong style={{ fontSize: "0.9rem" }}>
                    safety@tindog.com
                  </strong>
                </div>
                <div className="info-chip" style={{ padding: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem" }}>Hotline</span>
                  <strong style={{ fontSize: "0.9rem" }}>
                    +91 80 7117 9999
                  </strong>
                </div>
                <div className="info-chip" style={{ padding: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem" }}>In-app</span>
                  <strong style={{ fontSize: "0.9rem" }}>
                    Tap "Report" in chat
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
