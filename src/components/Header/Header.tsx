'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import './Header.css';

/**
 * The `Header` component renders the header section of the application, 
 * including navigation links and a mobile menu.
 *
 * @returns {JSX.Element} The rendered header component.
*/
export function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    /**
     * Handles the scroll event to determine the scroll direction and 
     * whether the header should have a background.
     *
     * - Updates the `isScrollingDown` state based on the current scroll position.
     * - Updates the `lastScrollTop` to the current scroll position.
     * - Updates the `hasBackground` state based on whether the scroll position is at the top.
     */
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Determine scroll direction
      setIsScrollingDown(scrollTop > lastScrollTop);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // Add background when not at the top
      setHasBackground(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header-container ${isScrollingDown ? 'hidden' : hasBackground ? 'background' : ''
        }`}
    >
      <nav className="nav-container">
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

        <div className='button-container'>
          <Button onClick={() => null}>Sign Up</Button>
        </div>
      </nav>
    </header>
  );
}
