import type { Metadata } from 'next'

const steps = [
  {
    title: '1. Find a code',
    detail:
      'Look for partner announcements on our blog, Instagram, or inside the NoseBoop app during special events.',
  },
  {
    title: '2. Redeem in the app',
    detail:
      'Open Settings → Promo Codes, paste the code, and press Apply. Discounts show up instantly before checkout.',
  },
  {
    title: '3. Share the love',
    detail:
      'Refer another dog parent and both of you will receive surprise boosts or premium time—no limit on referrals.',
  },
]

export const metadata: Metadata = {
  title: 'Promo Codes | NoseBoop',
  description: 'Learn how to redeem NoseBoop promo codes and maximize rewards for you and your dog.',
}

export default function PromoCodePage() {
  return (
    <>
      <section className="gradient-background text-center with-navbar-offset">
        <div className="container" style={{ maxWidth: 900, padding: '3rem 1.5rem 2rem' }}>
          <p className="badge bg-light text-dark rounded-pill px-3 py-1 mb-2">Rewards</p>
          <h1 className="display-5 fw-bold mb-2 text-white">Unlock extra treats.</h1>
          <p className="text-white-50 mb-0" style={{ fontSize: '1.05rem' }}>
            Promo codes help you try NoseBoop Premium perks and boost visibility for your pup.
          </p>
        </div>
      </section>

      <main className="container py-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="row g-3 mb-4">
          {steps.map((step) => (
            <div key={step.title} className="col-md-4">
              <div className="clean-card p-4 h-100 text-center">
                <p className="fw-bold text-primary mb-2">{step.title}</p>
                <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="clean-card p-4">
          <h4 className="fw-bold mb-2">Trouble redeeming?</h4>
          <p className="text-muted mb-0">
            Double-check the expiration date and region. If it still won’t apply, send the code to{' '}
            <strong>promos@tindog.com</strong> and we will take a look.
          </p>
        </div>
      </main>
    </>
  )
}

