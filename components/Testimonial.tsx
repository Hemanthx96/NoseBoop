"use client";

import Image from "next/image";

export default function Testimonial() {
  return (
    <section id="Testimonial">
      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary position-relative overflow-hidden">
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%)",
            }}
          ></div>
          <div className="container py-5 position-relative reveal">
            <h2
              className="display-5 fw-bold mb-4"
              style={{
                fontStyle: "italic",
                color: "#333",
                lineHeight: "1.6",
              }}
            >
              &quot;We don&apos;t have to do endless walks around the colony
              anymore—NoseBoop helped me find the friendliest Indie in Bengaluru.
              Total wag fest!&quot;
            </h2>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src="/images/dog-img.jpg"
                className="profile-img mb-2 mt-3"
                alt="dog"
                width={120}
                height={120}
              />
            </div>
            <p
              className="col-lg-8 mx-auto lead mt-2 fw-semibold"
              style={{ fontSize: "1.2rem" }}
            >
              Pebbles, Mumbai
            </p>
          </div>

          <div className="container position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-3 col-sm-6 col-6">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    filter: "grayscale(100%) opacity(0.6)",
                    transition: "all 0.3s ease",
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) opacity(0.6)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src="/images/techcrunch.png"
                    alt="techcrunch"
                    height={40}
                    width={140}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-6">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    filter: "grayscale(100%) opacity(0.6)",
                    transition: "all 0.3s ease",
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) opacity(0.6)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src="/images/mashable.png"
                    alt="mashable"
                    height={40}
                    width={140}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-6">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    filter: "grayscale(100%) opacity(0.6)",
                    transition: "all 0.3s ease",
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) opacity(0.6)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src="/images/bizinsider.png"
                    alt="bizinsider"
                    height={40}
                    width={140}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    filter: "grayscale(100%) opacity(0.6)",
                    transition: "all 0.3s ease",
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) opacity(0.6)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src="/images/tnw.png"
                    alt="tnw"
                    height={40}
                    width={140}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
