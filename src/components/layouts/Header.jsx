'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { animate, motion, stagger } from "motion";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {label: 'our company', href: '/our-company'}, 
    {label: 'locations', href: '/locations'}, 
    {label: 'contact', href: '/contact'}
  ];

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Handle animations and body scroll lock when menu opens/closes
  useEffect(() => {
    // Save the current body position
    const scrollY = window.scrollY;
    
    if (isMenuOpen) {
      // Comprehensive approach for iOS and other devices
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Animate menu items with staggered reveal
      animate(
        '.mobile-menu-item',
        { opacity: [0, 1], x: [-50, 0], rotateX: [90, 0] },
        { delay: stagger(0.1), duration: 0.5, easing: 'ease-out' }
      );
    } else {
      // Re-enable scrolling when menu closes
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      if (document.body.style.top) {
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
      }
    }
    
    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position on unmount if needed
      if (document.body.style.top) {
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
      }
    };
  }, [isMenuOpen]);

  return (
    <header className="lg:container mx-auto px-4 sm:px-10 py-8 md:py-10 relative z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="relative z-20">
          <Image src="/shared/desktop/logo-dark.png" alt="Logo" width={196} height={24} />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10.5">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={index} 
                href={item.href} 
                className={`uppercase text-sm tracking-widest relative ${isActive ? 'text-peach font-bold' : 'text-dark-grey hover:underline'}`}
              >
                {item.label}
                {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-peach"></span>}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          suppressHydrationWarning={true}
        >
          <Image 
            src={isMenuOpen ? "/shared/mobile/icon-close.svg" : "/shared/mobile/icon-hamburger.svg"} 
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            width={24} 
            height={24} 
          />
        </button>

        {/* Mobile Menu Panel */}
        <div 
          className={`fixed top-[89px] left-0 right-0 bottom-0 bg-peach z-10 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <nav className="flex flex-col px-6 py-12 space-y-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={index} 
                  href={item.href} 
                  className={`mobile-menu-item uppercase relative z-10 text-white text-2xl tracking-wide ${isActive ? 'font-bold' : 'font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {isActive && <span className="absolute -bottom-1 left-0 w-1/4 h-0.5 bg-white"></span>}
                </Link>
              );
            })}
          </nav>

          <div className="absolute top-0 right-0 rotate-180">
            <Image src="/contact/desktop/bg-pattern-hero-desktop.svg" width={800} height={800} alt="" />
          </div>

          <div className="absolute bottom-0 right-0">
            <Image src="/contact/desktop/bg-pattern-hero-desktop.svg" width={800} height={800} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
