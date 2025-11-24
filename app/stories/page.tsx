import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const stories = [
  {
    dogName: "Max & Mishti",
    location: "Bengaluru, Karnataka",
    story:
      "Max, a 3-year-old Golden Retriever, was always shy around other dogs. Through NoseBoop we found Mishti, a gentle indie pup from Koramangala who helped Max come out of his shell. They do Cubbon Park walks every Sunday now.",
    owner: "Ananya & Rohan",
    image: "/images/dog-img.jpg",
  },
  {
    dogName: "Luna & Cooper",
    location: "Mumbai, Maharashtra",
    story:
      "Luna needed a high-energy playmate to match her Border Collie zoomies. Cooper, a fellow collie from Bandra, was the perfect match. Their parents alternate between Carter Road and Jio World Drive every weekend.",
    owner: "Meera & Vikram",
    image: "/images/dog-img.jpg",
  },
  {
    dogName: "Rocky & Daisy",
    location: "Delhi NCR",
    story:
      "Rocky, a senior rescue dog, found companionship with Daisy, another senior pup from Gurgaon. Their humans became great friends too and now host monthly senior-dog meetups across Lodhi Garden and Aravalli Bio-Diversity Park.",
    owner: "Priya & Kunal",
    image: "/images/dog-img.jpg",
  },
];

export const metadata: Metadata = {
  title: "Success Stories | NoseBoop",
  description:
    "Read heartwarming stories from NoseBoop members who found perfect playmates for their dogs.",
};

export default function StoriesPage() {
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
            Success Stories
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Real Dogs, Real Friendships
          </h1>
          <p
            className="lead text-white-50 mb-0"
            style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}
          >
            See how NoseBoop has helped dogs across India find their perfect
            playmates.
          </p>
        </div>
      </section>

      <main
        className="container py-4"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div className="row g-4 mb-5" style={{ marginLeft: 0, marginRight: 0 }}>
          {stories.map((story, index) => (
            <div
              key={index}
              className="col-md-6"
              style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
            >
              <div className="clean-card p-4 h-100">
                <div className="d-flex gap-3 mb-3">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-circle overflow-hidden"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={story.image}
                        alt={story.dogName}
                        width={80}
                        height={80}
                        style={{ objectFit: "cover" }}
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="fw-bold mb-1">{story.dogName}</h4>
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {story.location}
                    </p>
                    <p
                      className="text-primary mb-0"
                      style={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >
                      {story.owner}
                    </p>
                  </div>
                </div>
                <p
                  className="text-muted mb-0"
                  style={{ fontSize: "0.95rem", lineHeight: "1.7" }}
                >
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-4">
          <div className="clean-card p-4 text-center">
            <h3 className="fw-bold mb-3">Share Your Story</h3>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "1rem", lineHeight: "1.7" }}
            >
              Have a NoseBoop success story? We'd love to hear about it! Your
              story could inspire other dog owners.
            </p>
            <Link href="mailto:stories@tindog.com" className="btn btn-primary">
              Share Your Story
            </Link>
          </div>
        </section>

        <section className="mb-4">
          <div className="clean-card p-4 text-center">
            <h3 className="fw-bold mb-3">Ready to Create Your Own Story?</h3>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "1rem", lineHeight: "1.7" }}
            >
              Join thousands of happy dogs and their owners on NoseBoop today.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/download" className="btn btn-primary btn-lg px-4">
                Get Started
              </Link>
              <Link
                href="/how-it-works"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
