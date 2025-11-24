'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function LoginModal() {
  const router = useRouter()

  useEffect(() => {
    const modal = document.getElementById('login-modal')
    const closeBtn = document.getElementById('login-modal-close')

    const handleClose = () => {
      if (modal) {
        modal.style.display = 'none'
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', handleClose)
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          handleClose()
        }
      })
    }

    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener('click', handleClose)
      }
    }
  }, [])

  const handleGoogleLogin = async () => {
    try {
      // In a real app, you would implement OAuth flow here
      // For now, this is a placeholder
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`, {})
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Login error:', error)
      alert('Login failed. Please try again.')
    }
  }

  return (
    <div id="login-modal" className="login-modal-overlay" style={{ display: 'none' }}>
      <div className="login-modal-content">
        <button className="login-modal-close" id="login-modal-close">
          &times;
        </button>
        <div className="login-modal-logo">
          <img
            src="https://img.icons8.com/fluency/48/000000/fire-element.png"
            alt="App Logo"
            style={{ width: '48px', height: '48px' }}
          />
        </div>
        <h2 className="login-modal-title">Get Started</h2>
        <p className="login-modal-desc">
          By tapping Log In or Continue, you agree to our
          <a href="#" className="login-modal-link"> Terms</a>. Learn how we process your
          data in our <a href="#" className="login-modal-link">Privacy Policy</a>, and
          <a href="#" className="login-modal-link"> Cookie Policy</a>.
        </p>
        <button className="login-modal-google" onClick={handleGoogleLogin}>
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google Logo"
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Continue with Google
        </button>
        <div className="login-modal-more-options">
          <a href="#" className="login-modal-link">
            More Options
          </a>
        </div>
        <div className="login-modal-get-app">
          <div className="login-modal-get-app-title">Get the app!</div>
          <div className="login-modal-app-buttons">
            <a href="#" className="login-modal-app-btn">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                height={40}
              />
            </a>
            <a href="#" className="login-modal-app-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

