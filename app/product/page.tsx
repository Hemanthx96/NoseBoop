import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "NoseBoop Product Overview",
  description:
    "Discover NoseBoop premium features, subscription tiers, and everything you need to find the perfect match for your dog.",
};

const showcaseShots = [
  {
    src: "/images/iphone.png",
    alt: "NoseBoop App profile previews",
    caption: "Profile stack • Smart discovery cards",
  },
  {
    src: "/images/dog-img.jpg",
    alt: "Happy dog after using NoseBoop",
    caption: "Verified playdates • Real community stories",
  },
];

const premiumHighlights = [
  {
    title: "Boosted visibility",
    description:
      "Get 5x more profile views with Turbo Boost and spotlight placements in the Discovery carousel.",
    badge: "Turbo Boost",
  },
  {
    title: "Advanced filters",
    description:
      "Filter by vaccination status, temperament, routine, and owner preferences to find the perfect fit.",
    badge: "Precision Filters",
  },
  {
    title: "Travel-ready mode",
    description:
      "Auto update your location, pause past matches, and receive curated local recommendations on the go.",
    badge: "Roaming Mode",
  },
];

const workflowSteps = [
  {
    label: "01",
    title: "Dial-in preferences",
    detail:
      "Choose breeds, age range, play energy, and safety expectations. NoseBoop learns and adapts instantly.",
  },
  {
    label: "02",
    title: "Match intelligently",
    detail:
      "AI-assisted matching elevates compatible profiles and flags any potential conflicts for review.",
  },
  {
    label: "03",
    title: "Plan confidently",
    detail:
      "Share calendars, send checklists, and log meetups so every playdate feels organized and stress-free.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: "1100px", padding: "4rem 1.5rem" }}
        >
          <p className="badge rounded-pill bg-light text-dark px-4 py-2 mb-3">
            Product Overview
          </p>
          <h1 className="display-4 fw-bold mb-3 text-white">
            Built for modern Indian dog parents
          </h1>
          <p
            className="lead text-white-50 mb-4"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            NoseBoop makes it simple to discover, connect, and organize playdates
            for your furry friends across India. Swipe, match, chat, and meet
            with confidence using our premium features and trusted safety tools.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link href="/#title" className="btn btn-light btn-lg px-4">
              Explore the App
            </Link>
            <Link
              href="/download"
              className="btn btn-outline-light btn-lg px-4"
            >
              Download NoseBoop
            </Link>
          </div>
        </div>
      </section>

      <section className="product-showcase container">
        <div className="glass-effect p-5 rounded-4 shadow-sm">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 mb-4">
            <div>
              <p className="text-uppercase text-primary fw-semibold mb-2">
                Peek inside
              </p>
              <h2 className="display-6 fw-bold mb-2">
                Premium flows, real screens
              </h2>
              <p className="text-muted mb-0">
                Every screenshot below is captured from the live NoseBoop build so
                you can see the polished UI that ships with Plus, Gold, and
                Premium tiers.
              </p>
            </div>
            <Link href="/support" className="btn btn-outline-dark px-4 py-2">
              Book a walkthrough
            </Link>
          </div>
          <div className="showcase-grid">
            {showcaseShots.map((shot) => (
              <figure key={shot.alt} className="showcase-card">
                <div className="showcase-image">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption className="text-muted mt-3">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <main className="container pt-4 pb-5" style={{ maxWidth: "1100px" }}>
        <div className="mb-5">
          <Features />
        </div>

        <section id="premium" className="mb-5 premium-grid">
          {premiumHighlights.map((item) => (
            <article key={item.title} className="premium-card">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="premium-icon">★</span>
                <span className="badge rounded-pill text-bg-dark">
                  {item.badge}
                </span>
              </div>
              <h3 className="h4 fw-bold mb-2">{item.title}</h3>
              <p className="text-muted mb-0">{item.description}</p>
            </article>
          ))}
        </section>

        <section id="experience" className="mb-5">
          <div className="glass-effect p-5 rounded-4 shadow-sm">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <h2 className="fw-bold mb-3">Personalized discovery</h2>
                <p className="text-muted mb-4">
                  Smart matching powered by your dog&apos;s breed, energy level,
                  and play style. Fine-tune discovery preferences to find
                  companions who live nearby, share similar routines, and match
                  your dog&apos;s vibe.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2">
                    • Tailor matches by breed, age, and size
                  </li>
                  <li className="mb-2">
                    • Filter by activity level and temperament
                  </li>
                  <li className="mb-2">
                    • Save favorite profiles and revisit any time
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="p-4 rounded-4 bg-white shadow-sm h-100">
                  <h3 className="fw-semibold mb-3">Safety-first playdates</h3>
                  <p className="text-muted mb-3">
                    Share vaccination records securely, verify profiles, and
                    track playdate logistics in one place. Your dog&apos;s
                    safety is our top priority.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2">
                      ID verification
                    </span>
                    <span className="badge bg-success-subtle text-success px-3 py-2">
                      Playdate reminders
                    </span>
                    <span className="badge bg-warning-subtle text-warning px-3 py-2">
                      Community reporting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-5">
          <Pricing />
        </section>

        <section id="workflow" className="mb-5">
          <div className="workflow-card p-5 rounded-4 shadow-sm">
            <div className="text-center mb-5">
              <p className="text-uppercase text-primary fw-semibold mb-2">
                Premium flow
              </p>
              <h2 className="display-6 fw-bold">
                How NoseBoop Plus keeps playdates effortless
              </h2>
            </div>
            <div className="workflow-steps">
              {workflowSteps.map((step) => (
                <div key={step.label} className="workflow-step">
                  <div className="workflow-label">{step.label}</div>
                  <div>
                    <h4 className="fw-bold mb-2">{step.title}</h4>
                    <p className="text-muted mb-0">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="p-5 rounded-4 gradient-background text-white shadow-lg text-center">
            <h2 className="display-6 fw-bold mb-3">
              Ready to meet your dog&apos;s new best friend?
            </h2>
            <p className="lead mb-4">
              Join thousands of Indian dog parents who trust NoseBoop for safe,
              fun, and memorable playdates.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/download" className="btn btn-light btn-lg px-4">
                Get the App
              </Link>
              <Link
                href="/support"
                className="btn btn-outline-light btn-lg px-4"
              >
                Talk to Support
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
