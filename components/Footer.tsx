"use client";

import Link from "next/link";

const linkStyles = {
  transition: "all 0.3s ease",
  textDecoration: "none",
  color: "#fff",
  opacity: 0.9,
};

export default function Footer() {
  return (
    <section id="footer" className="gradient-background text-white">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 mt-5 container mx-auto">
        <div className="col mb-3 justify-items-center">
          <h4 className="fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
            NoseBoop
          </h4>
          <p
            className="mb-3"
            style={{ fontSize: "0.95rem", opacity: 0.95, color: "#fff" }}
          >
            © 2025 Tindog LLC,
            <br /> All Rights Reserved.
          </p>
        </div>

        <div className="col mb-3">
          <h5 className="fw-bold mb-3">Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                href="/about"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/how-it-works"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                How It Works
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/stories"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Success Stories
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/blog"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="fw-bold mb-3">Legal</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                href="/privacy"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Privacy
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/terms"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Terms
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/cookie-policy"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Cookie Policy
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/intellectual-property"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Intellectual Property
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="fw-bold mb-3">Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                href="/faq"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/contact"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                href="/promo-code"
                className="nav-link p-0"
                style={linkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Promo Code
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
