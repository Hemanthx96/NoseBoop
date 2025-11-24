import type { Metadata } from "next";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    description:
      "We collect the minimum information needed to help you and your pup discover new playmates.",
    points: [
      "Profile details such as name, dog breed, and location radius you provide.",
      "Usage data that helps us understand which features are popular so we can improve them.",
      "Optional content like photos, success stories, and support conversations.",
    ],
  },
  {
    title: "How We Use Your Info",
    description:
      "NoseBoop only uses your information to deliver and improve the experience you expect.",
    points: [
      "Match compatible dogs and surface relevant local events.",
      "Secure the platform, prevent spam, and keep the community safe.",
      "Communicate product updates, promotions, and helpful resources.",
    ],
  },
  {
    title: "Your Privacy Controls",
    description:
      "You stay in control. Update your settings at any time from the NoseBoop app or contact our team for help.",
    points: [
      "Edit or delete profile information whenever you like.",
      "Toggle marketing emails or unsubscribe with a single click.",
      "Request a copy of your data or ask us to delete it entirely.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | NoseBoop",
  description:
    "Learn how NoseBoop collects, uses, and protects data so you and your dog can connect safely.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 900, padding: "3rem 1.5rem 2rem" }}
        >
          <p className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2">
            Privacy Policy
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Your data, your rules.
          </h1>
          <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem" }}>
            We protect every bark, wag, and photo you share on NoseBoop.
          </p>
        </div>
      </section>

      <main
        className="container py-5"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {sections.map((section) => (
          <div key={section.title} className="clean-card p-4 mb-4">
            <h3 className="fw-bold mb-3">{section.title}</h3>
            <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
              {section.description}
            </p>
            <ul className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="clean-card p-4">
          <h4 className="fw-bold mb-2">Need more details?</h4>
          <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
            NoseBoop follows India&apos;s Digital Personal Data Protection Act
            (DPDP) guidelines and stores data on secure Indian cloud regions.
            Email our safety team anytime at{" "}
            <Link
              href="/contact"
              className="text-primary fw-semibold text-decoration-none"
            >
              support@tindog.com
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
