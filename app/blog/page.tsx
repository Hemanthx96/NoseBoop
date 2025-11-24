import type { Metadata } from "next";
import Link from "next/link";

const blogPosts = [
  {
    title: "5 Tips for a Successful First Playdate",
    excerpt:
      "Make your dog's first NoseBoop meetup a success with these essential tips for planning, safety, and fun.",
    category: "Tips & Advice",
    date: "March 15, 2025",
    readTime: "5 min read",
  },
  {
    title: "Understanding Dog Body Language During Playdates",
    excerpt:
      "Learn to read your dog's signals and ensure safe, positive interactions with other dogs.",
    category: "Dog Behavior",
    date: "March 10, 2025",
    readTime: "7 min read",
  },
  {
    title: "Best Dog Parks in Major Cities",
    excerpt:
      "Our curated list of top-rated dog parks and cafés across India, perfect for your next NoseBoop playdate.",
    category: "Locations",
    date: "March 5, 2025",
    readTime: "6 min read",
  },
  {
    title: "How to Socialize a Shy Dog",
    excerpt:
      "Expert advice on helping reserved dogs build confidence and make new friends through gradual socialization.",
    category: "Dog Behavior",
    date: "February 28, 2025",
    readTime: "8 min read",
  },
  {
    title: "NoseBoop App Update: New Safety Features",
    excerpt:
      "We've added profile verification, location sharing, and emergency contacts to keep your playdates safer.",
    category: "Product Updates",
    date: "February 20, 2025",
    readTime: "4 min read",
  },
  {
    title: "Winter Playdate Safety Guide",
    excerpt:
      "Keep your dog safe and warm during cold-weather playdates with these essential winter safety tips.",
    category: "Tips & Advice",
    date: "February 15, 2025",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "Tips & Advice",
  "Dog Behavior",
  "Locations",
  "Product Updates",
];

export const metadata: Metadata = {
  title: "NoseBoop Blog | Tips, Stories & Updates",
  description:
    "Read the latest tips, stories, and updates from the NoseBoop community.",
};

export default function BlogPage() {
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
            Blog & Resources
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Tips, Stories & Updates
          </h1>
          <p
            className="lead text-white-50 mb-0"
            style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}
          >
            Expert advice, community stories, and the latest from NoseBoop.
          </p>
        </div>
      </section>

      <main
        className="container py-4"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn btn-sm ${
                  category === "All" ? "btn-primary" : "btn-outline-primary"
                }`}
                style={{ borderRadius: "20px" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4 mb-5" style={{ marginLeft: 0, marginRight: 0 }}>
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="col-md-6"
              style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
            >
              <div className="clean-card p-4 h-100">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span
                    className="badge bg-primary-subtle text-primary"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                    {post.readTime}
                  </span>
                </div>
                <h3 className="fw-bold mb-2" style={{ fontSize: "1.3rem" }}>
                  {post.title}
                </h3>
                <p
                  className="text-muted mb-3"
                  style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
                >
                  {post.excerpt}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                    {post.date}
                  </span>
                  <Link
                    href="#"
                    className="text-primary text-decoration-none"
                    style={{ fontSize: "0.9rem", fontWeight: "600" }}
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-4">
          <div className="clean-card p-4 text-center">
            <h3 className="fw-bold mb-3">Stay Updated</h3>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "1rem", lineHeight: "1.7" }}
            >
              Subscribe to our newsletter for weekly tips, success stories, and
              product updates.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button type="button" className="btn btn-primary subscribe-btn">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
