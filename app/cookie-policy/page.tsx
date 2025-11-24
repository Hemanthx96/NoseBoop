import type { Metadata } from "next";

const cookieTypes = [
  {
    label: "Essential cookies",
    detail:
      "Help us keep you signed in, route requests to the right server, and remember your language or region.",
  },
  {
    label: "Performance cookies",
    detail:
      "Let us measure which screens people visit so we can improve NoseBoop with real data.",
  },
  {
    label: "Personalization cookies",
    detail:
      "Remember your preferences (like preferred breeds or distance filters) to personalize recommendations.",
  },
];

export const metadata: Metadata = {
  title: "Cookie Policy | NoseBoop",
  description:
    "Understand how NoseBoop uses cookies to power core features and personalization.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 900, padding: "3rem 1.5rem 2rem" }}
        >
          <p className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2">
            Cookie Policy
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Snacks for your browser.
          </h1>
          <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem" }}>
            Cookies help NoseBoop stay fast, secure, and tailored to your pup.
          </p>
        </div>
      </section>

      <main
        className="container py-5"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div className="clean-card p-4 mb-4">
          <h3 className="fw-bold mb-3">Why we use cookies</h3>
          <p className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
            Cookies are tiny text files stored on your device. We only use them
            to operate NoseBoop, remember your preferences, and understand how the
            experience performs so we can keep improving it.
          </p>
        </div>

        <div className="row g-3 mb-4">
          {cookieTypes.map((cookie) => (
            <div key={cookie.label} className="col-md-4">
              <div className="clean-card p-3 h-100">
                <h5 className="fw-bold mb-2">{cookie.label}</h5>
                <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                  {cookie.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="clean-card p-4">
          <h4 className="fw-bold mb-2">Control your preferences</h4>
          <p className="text-muted mb-0">
            You can clear cookies in your browser at any time or adjust your
            NoseBoop notification settings from the profile tab in the app. We
            honour &quot;Do Not Track&quot; preferences and follow DPDP
            guidelines for Indian users.
          </p>
        </div>
      </main>
    </>
  );
}
