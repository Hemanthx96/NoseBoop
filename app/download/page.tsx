import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Download NoseBoop',
  description: 'Install NoseBoop on iOS or Android and start matching playful pups near you.',
}

const downloadSteps = [
  {
    title: 'Create your profile',
    description: 'Share your dog’s personality, favorite parks, and play style.',
  },
  {
    title: 'Discover nearby pups',
    description: 'Swipe through curated matches and save your favorites.',
  },
  {
    title: 'Schedule playdates',
    description: 'Chat with owners, pick a safe location, and send reminders.',
  },
]

export default function DownloadPage() {
  return (
    <>
      <section className="gradient-background text-white text-center with-navbar-offset">
        <div className="container" style={{ maxWidth: '900px', padding: '4rem 1.5rem' }}>
          <p className="badge bg-light text-dark rounded-pill px-4 py-2 mb-3">Download</p>
          <h1 className="display-4 fw-bold mb-3">NoseBoop is available everywhere</h1>
          <p className="lead text-white-50 mb-4">
            Whether you&apos;re strolling through the city or relaxing in the suburbs, NoseBoop helps your pup make new
            friends. Download our app on iOS and Android to start swiping.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="#"
              className="btn btn-light btn-lg px-4 d-flex align-items-center gap-2"
              aria-label="Download on the App Store"
            >
              <span role="img" aria-hidden="true">
                🍎
              </span>
              App Store
            </a>
            <a
              href="#"
              className="btn btn-outline-light btn-lg px-4 d-flex align-items-center gap-2"
              aria-label="Get it on Google Play"
            >
              <span role="img" aria-hidden="true">
                ▶️
              </span>
              Google Play
            </a>
          </div>
        </div>
      </section>

      <main className="container py-5" style={{ maxWidth: '1000px' }}>
        <div className="row g-4">
          {downloadSteps.map((step, index) => (
            <div key={step.title} className="col-md-4">
              <div className="card shadow-sm h-100 rounded-4 border-0 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-body p-4">
                  <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 px-3 py-2">
                    Step {index + 1}
                  </span>
                  <h3 className="h4 fw-bold mb-2">{step.title}</h3>
                  <p className="text-muted mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-5">
          <div className="glass-effect rounded-4 p-5 shadow-sm">
            <div className="row g-5 align-items-center">
              <div className="col-md-6">
                <h2 className="fw-bold mb-3">Pair with the NoseBoop web experience</h2>
                <p className="text-muted mb-4">
                  Access NoseBoop on desktop to review matches, manage subscriptions, and plan playdates with ease.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2">• Real-time notifications across devices</li>
                  <li className="mb-2">• Secure messaging for coordinating meetups</li>
                  <li className="mb-2">• Sync calendars and share availability</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="p-4 rounded-4 bg-white shadow-sm h-100">
                  <h3 className="fw-semibold mb-3">Need help installing?</h3>
                  <p className="text-muted mb-4">
                    Our support team is standing by to help you through setup, onboarding, and account verification.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <Link href="/support" className="btn btn-primary px-4">
                      Contact Support
                    </Link>
                    <Link href="/safety" className="btn btn-outline-primary px-4">
                      Review Safety Tips
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

