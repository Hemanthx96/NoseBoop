import type { Metadata } from "next";
import Link from "next/link";

const guidelines = [
  {
    title: "Brand assets",
    copy: "Logos, illustrations, and UI mockups belong to NoseBoop. Please request permission before using them in press or marketing materials.",
  },
  {
    title: "User generated content",
    copy: "Stories, photos, and reviews remain the property of their creators. Do not reuse another owner’s media without explicit consent.",
  },
  {
    title: "Reporting infringement",
    copy: "Spotted unauthorized use of NoseBoop IP or your own content on the platform? Let us know and we will review it quickly.",
  },
];

export const metadata: Metadata = {
  title: "Intellectual Property | NoseBoop",
  description:
    "Learn how NoseBoop protects creative assets and how you can report suspected infringement.",
};

export default function IntellectualPropertyPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 900, padding: "3rem 1.5rem 2rem" }}
        >
          <p className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2">
            Intellectual Property
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Protecting every creative tail wag.
          </h1>
          <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem" }}>
            These guidelines explain how NoseBoop assets and community content can
            be used.
          </p>
        </div>
      </section>

      <main
        className="container py-5"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {guidelines.map((item) => (
          <div key={item.title} className="clean-card p-4 mb-4">
            <h3 className="fw-bold mb-2">{item.title}</h3>
            <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
              {item.copy}
            </p>
          </div>
        ))}

        <div className="clean-card p-4">
          <h4 className="fw-bold mb-2">Need to file a report?</h4>
          <p className="text-muted mb-0">
            Send any takedown or attribution requests (per the Indian Copyright
            Act) to{" "}
            <Link
              href="/contact"
              className="text-primary text-decoration-none fw-semibold"
            >
              legal@tindog.com
            </Link>{" "}
            with relevant links and documentation.
          </p>
        </div>
      </main>
    </>
  );
}
