import type { Metadata } from "next";

const faqs = [
  {
    question: "How do matches work?",
    answer:
      "Set your location radius, add your dog’s preferences, and swipe through curated profiles. When both owners tap “Let’s meet,” we introduce you in chat.",
  },
  {
    question: "Is NoseBoop safe for my dog?",
    answer:
      "Absolutely. Every profile goes through a manual review and you can view verified badges, vaccination info, and mutual friend referrals before meeting.",
  },
  {
    question: "Can I pause my subscription?",
    answer:
      "Yes! Visit Settings → Subscription to pause billing for up to 3 months or downgrade to the free tier anytime. UPI AutoPay mandates are automatically paused when you do.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "NoseBoop is available on iOS, Android, and the web. Syncing happens automatically so you can start browsing anywhere.",
  },
];

export const metadata: Metadata = {
  title: "FAQ | NoseBoop Support",
  description:
    "Answers to the most common NoseBoop product and account questions.",
};

export default function FAQPage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div
          className="container"
          style={{ maxWidth: 900, padding: "3rem 1.5rem 2rem" }}
        >
          <p className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2">
            Support
          </p>
          <h1 className="display-5 fw-bold mb-2 text-white">
            Frequently Asked Floofs.
          </h1>
          <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem" }}>
            Find quick answers before reaching out to our team.
          </p>
        </div>
      </section>

      <main
        className="container py-5"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div className="faq-stack clean-card p-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="mb-3"
              open={faq.question === faqs[0].question}
            >
              <summary className="fw-semibold">{faq.question}</summary>
              <p className="text-muted mt-2 mb-0" style={{ lineHeight: 1.7 }}>
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
