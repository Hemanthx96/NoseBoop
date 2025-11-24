import type { Metadata } from "next";
import Link from "next/link";

const values = [
  {
    icon: "🐾",
    title: "Safety first",
    description:
      "Every feature is designed with your dog's wellbeing in mind. Verified profiles, secure meetups, and 24/7 support.",
  },
  {
    icon: "❤️",
    title: "Real connections",
    description:
      "We believe in authentic relationships. No bots, no fake profiles—just real dogs and their humans looking for companionship.",
  },
  {
    icon: "🌍",
    title: "Community driven",
    description:
      "Built by dog lovers, for dog lovers. Your feedback shapes our platform and helps us create better experiences.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Dog parent to two golden retrievers. Former product designer at major tech companies.",
  },
  {
    name: "Mike Chen",
    role: "Head of Safety",
    bio: "Veterinarian with 15+ years experience. Ensures every playdate meets our safety standards.",
  },
  {
    name: "Emma Rodriguez",
    role: "Community Lead",
    bio: "Organizes local dog park meetups and manages our global community of 50K+ members.",
  },
];

export const metadata: Metadata = {
  title: "About NoseBoop | Our Story & Mission",
  description:
    "Learn about NoseBoop's mission to connect dogs and their owners through safe, meaningful playdates.",
};

export default function AboutPage() {
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
            Our Story
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Built by dog lovers, for dog lovers
          </h1>
          <p
            className="lead text-white-50 mb-0"
            style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}
          >
            We started NoseBoop because we believe every dog deserves a best
            friend.
          </p>
        </div>
      </section>

      <main
        className="container py-4"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <section className="mb-5">
          <div className="clean-card p-4" style={{ width: "100%" }}>
            <h2 className="fw-bold mb-3">Our Mission</h2>
            <p
              className="text-muted mb-3"
              style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
            >
              NoseBoop was born in India after countless evening walks around
              gated communities in Bengaluru and Mumbai. We realised that
              finding the perfect playmate for your dog shouldn&apos;t be
              complicated, yet local WhatsApp groups and park meetups rarely
              matched energy levels or schedules.
            </p>
            <p
              className="text-muted mb-0"
              style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
            >
              Today, NoseBoop connects thousands of dogs and their parents across
              India—from Chennai beaches to Delhi dog cafés— fostering
              friendships that last a lifetime for both pups and humans.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold mb-4 text-center">Our Values</h2>
          <div className="row g-3" style={{ marginLeft: 0, marginRight: 0 }}>
            {values.map((value) => (
              <div
                key={value.title}
                className="col-md-4"
                style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
              >
                <div className="clean-card p-3 h-100 text-center">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>
                    {value.icon}
                  </div>
                  <h4 className="fw-bold mb-2">{value.title}</h4>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold mb-4 text-center">Meet the Team</h2>
          <div className="row g-3" style={{ marginLeft: 0, marginRight: 0 }}>
            {team.map((member) => (
              <div
                key={member.name}
                className="col-md-4"
                style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
              >
                <div className="clean-card p-3 h-100">
                  <h5 className="fw-bold mb-1">{member.name}</h5>
                  <p
                    className="text-primary mb-2"
                    style={{ fontSize: "0.9rem", fontWeight: "600" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <div className="clean-card p-4 text-center">
            <h3 className="fw-bold mb-3">Join Our Community</h3>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "1rem", lineHeight: "1.7" }}
            >
              Ready to find your dog's perfect match? Join thousands of happy
              Indian pet parents already on NoseBoop.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/download" className="btn btn-primary btn-lg px-4">
                Get Started
              </Link>
              <Link
                href="/support"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
