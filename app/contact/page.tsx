import type { Metadata } from "next";

const channels = [
  {
    label: "Live chat",
    description:
      "Tap the Help button inside the NoseBoop app for 24/7 live chat with our support guides.",
    time: "Avg. response: under 5 minutes (IST)",
  },
  {
    label: "Email support",
    description:
      "Need to share screenshots or vet records? Email us anytime and we will reply the same day.",
    time: "support@tindog.com",
  },
  {
    label: "Safety hotline",
    description:
      "If something feels off during a meetup, call right away so we can help resolve it.",
    time: "+91 80 7117 9999",
  },
];

export const metadata: Metadata = {
  title: "Contact NoseBoop Support",
  description:
    "Reach NoseBoop’s support, safety, and partnerships teams whenever you need help.",
};

export default function ContactPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 900, padding: "3rem 1.5rem 2rem" }}
        >
          <p className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2">
            Contact
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            We are here for every tail wag across India.
          </h1>
          <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem" }}>
            Choose the channel that fits your question and our team will jump
            in.
          </p>
        </div>
      </section>

      <main
        className="container py-5"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div className="row g-3 mb-4">
          {channels.map((channel) => (
            <div key={channel.label} className="col-md-4">
              <div className="clean-card p-4 h-100">
                <span className="badge bg-primary-subtle text-primary mb-2">
                  {channel.label}
                </span>
                <p className="text-muted mb-3" style={{ lineHeight: 1.6 }}>
                  {channel.description}
                </p>
                <p className="fw-semibold mb-0">{channel.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="clean-card p-4">
          <h4 className="fw-bold mb-3">Visit the Support Center</h4>
          <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
            Browse troubleshooting articles, submit feature requests, or follow
            along with NoseBoop status updates at{" "}
            <strong>support.tindog.com</strong>.
          </p>
        </div>
      </main>
    </>
  );
}
