'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './Header.css';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Determine scroll direction
      setIsScrollingDown(scrollTop > lastScrollTop);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // Add background when not at the top
      setHasBackground(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const bodyStyle = document.body.style;
    if (isMobileMenuOpen) {
      bodyStyle.overflow = 'hidden';
      bodyStyle.position = 'fixed';
      bodyStyle.width = '100%';
    } else {
      bodyStyle.overflow = '';
      bodyStyle.position = '';
      bodyStyle.width = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`header-container ${
        isScrollingDown ? 'hidden' : hasBackground ? 'background' : ''
      }`}
    >
      <nav className="desktop-nav">
        <Image
          src="/images/logo.png"
          alt="green-valey-logo"
          layout="intrinsic"
          width={250}
          height={250}
        />

        <ul className="nav-list">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {!isMobileMenuOpen && <button className="desktop-button">Sign Up</button>}
      </nav>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className={isMobileMenuOpen ? 'bar open' : 'bar'}></div>
        <div className={isMobileMenuOpen ? 'bar open' : 'bar'}></div>
        <div className={isMobileMenuOpen ? 'bar open' : 'bar'}></div>
      </button>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'fade-in' : 'fade-out'}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <button className="mobile-menu-button">Sign Up</button>
        </ul>
      </div>
    </header>
  );
}
