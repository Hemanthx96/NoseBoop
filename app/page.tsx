"use client";

import { useEffect } from "react";
import Image from "next/image";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Enhanced Hero Section */}
      <section id="title" className="gradient-background text-white">
        <div className="container col-xxl-8 px-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
            <div className="col-10 col-sm-8 col-lg-6 reveal">
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                    animation: "pulse 3s ease-in-out infinite",
                  }}
                ></div>
                <Image
                  src="/images/iphone.png"
                  className="d-block mx-lg-auto img-fluid position-relative"
                  alt="NoseBoop App"
                  width={700}
                  height={500}
                  priority
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 reveal">
              <h1
                className="display-3 fw-bold lh-1 mb-4"
                style={{ lineHeight: "1.2" }}
              >
                Meet new and interesting{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #fff 0%, #f0f0f0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  dogs across India
                </span>
                .
              </h1>
              <p
                className="lead mb-4 opacity-90"
                style={{ fontSize: "1.25rem" }}
              >
                India&apos;s premier dog social app connecting pet parents from
                Mumbai to Bengaluru. Find the perfect playmate for your furry
                friend today!
              </p>
              <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-light btn-lg px-5 py-3 me-md-3"
                  style={{
                    borderRadius: "50px",
                    fontWeight: "600",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-apple mb-1 me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  </svg>
                  Download on App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Testimonial />
      <Pricing />
    </>
  );
}
