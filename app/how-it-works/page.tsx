import type { Metadata } from "next";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Download NoseBoop and set up your dog's profile. Add photos, share their personality, and set your preferences.",
    icon: "📱",
  },
  {
    number: "02",
    title: "Discover matches",
    description:
      "Swipe through profiles of nearby dogs. Our smart algorithm shows you compatible matches based on breed, energy level, and play style.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Start chatting",
    description:
      "Once you match, start a conversation! Share photos, plan meetups, and get to know the other dog owner.",
    icon: "💬",
  },
  {
    number: "04",
    title: "Plan playdates",
    description:
      "Coordinate safe, fun playdates at dog parks, pet-friendly cafés, or other public spaces. Share vaccination records and set reminders.",
    icon: "🐾",
  },
];

const tips = [
  "Upload at least 3 clear photos of your dog",
  "Complete your bio with personality traits and preferences",
  "Set your discovery radius to find nearby matches",
  "Verify your profile for better match quality",
];

export const metadata: Metadata = {
  title: "How NoseBoop Works | Step-by-Step Guide",
  description:
    "Learn how to use NoseBoop to find the perfect playmate for your dog in four simple steps.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 1000, padding: "3rem 1.5rem 2rem" }}
        >
          <p
            className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2"
            style={{ fontSize: "0.75rem" }}
          >
            Getting Started
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            How NoseBoop Works
          </h1>
          <p
            className="lead text-white-50 mb-0"
            style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}
          >
            Find your dog's perfect match anywhere in India in four simple
            steps.
          </p>
        </div>
      </section>

      <main
        className="container py-4"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div className="row g-4 mb-5" style={{ marginLeft: 0, marginRight: 0 }}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="col-md-6"
              style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
            >
              <div className="clean-card p-4 h-100">
                <div className="d-flex align-items-start gap-3">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "#fff",
                        fontSize: "1.5rem",
                        fontWeight: "700",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="mb-2" style={{ fontSize: "2rem" }}>
                      {step.icon}
                    </div>
                    <h3 className="fw-bold mb-2">{step.title}</h3>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: "0.95rem", lineHeight: "1.7" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3 mb-4" style={{ marginLeft: 0, marginRight: 0 }}>
          <div
            className="col-md-8"
            style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
          >
            <div className="clean-card p-4">
              <h3 className="fw-bold mb-3">Pro Tips for Success</h3>
              <ul
                className="ps-3 mb-0 text-muted"
                style={{ fontSize: "0.95rem", lineHeight: "1.8" }}
              >
                {tips.map((tip, idx) => (
                  <li key={idx} className="mb-2">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
          >
            <div className="clean-card p-4 h-100 d-flex flex-column justify-content-center">
              <h4 className="fw-bold mb-3">Ready to start?</h4>
              <p
                className="text-muted mb-4"
                style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
              >
                Download NoseBoop today and find your dog's new best friend.
              </p>
              <Link href="/download" className="btn btn-primary w-100">
                Download App
              </Link>
            </div>
          </div>
        </div>

        <section className="mb-4">
          <div className="clean-card p-4 text-center">
            <h3 className="fw-bold mb-3">Questions?</h3>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "1rem", lineHeight: "1.7" }}
            >
              Our support team is here to help you get started and answer any
              questions.
            </p>
            <Link href="/support" className="btn btn-outline-primary">
              Visit Support Center
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
