'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [showProductDropdown, setShowProductDropdown] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const handleLoginClick = () => {
    const modal = document.getElementById('login-modal')
    if (modal) {
      modal.style.display = 'flex'
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link href="/" className="navbar-brand">
            NoseBoop
          </Link>
          <div className="navbar-links">
            <div
              className={`nav-link nav-dropdown ${isActive('/product') ? 'active' : ''}`}
              onMouseEnter={() => setShowProductDropdown(true)}
              onMouseLeave={() => setShowProductDropdown(false)}
            >
              <Link href="/product" className="nav-dropdown-trigger">
                Product
              </Link>
              <div
                className="dropdown-menu"
                style={{ display: showProductDropdown ? 'block' : 'none' }}
              >
                <Link href="/product#features" className="dropdown-item">
                  Premium features
                </Link>
                <div
                  className="dropdown-item dropdown-submenu"
                  onMouseEnter={() => setShowSubmenu(true)}
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  <span>Subscription Tiers</span>
                  <div
                    className="dropdown-menu submenu"
                    style={{ display: showSubmenu ? 'block' : 'none' }}
                  >
                    <Link href="/product#pricing" className="dropdown-item">
                      NoseBoop Plus
                    </Link>
                    <Link href="/product#pricing" className="dropdown-item">
                      NoseBoop Gold
                    </Link>
                    <Link href="/product#pricing" className="dropdown-item">
                      NoseBoop Premium
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/safety"
              className={`nav-link ${isActive('/safety') ? 'active' : ''}`}
            >
              Safety
            </Link>
            <Link
              href="/support"
              className={`nav-link ${isActive('/support') ? 'active' : ''}`}
            >
              Support
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}
            >
              How It Works
            </Link>
            <Link
              href="/stories"
              className={`nav-link ${isActive('/stories') ? 'active' : ''}`}
            >
              Success Stories
            </Link>
            <Link
              href="/blog"
              className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <button
            type="button"
            className="login-button"
            onClick={handleLoginClick}
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  )
}

