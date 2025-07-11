'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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


  return (
    <header className="pb-26 md:pb-29">
       <div className="fixed left-0 right-0 z-50 bg-white shadow-sm">
 <div className="lg:container mx-auto px-6 sm:px-10 py-8.5 md:py-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="relative z-20 active:scale-90 transition-transform duration-300">
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
                className={`uppercase text-sm tracking-widest relative ${isActive ? 'text-peach font-bold' : 'text-dark-grey hover:underline active:scale-90 transition-transform duration-300'}`}
              >
                {item.label}
                {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-peach"></span>}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-30" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          suppressHydrationWarning={true}
          style={{ touchAction: 'manipulation' }}
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
          className={`fixed top-[89px] left-0 right-0 bottom-0 bg-peach z-20 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <nav className="flex flex-col px-6 py-12 space-y-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={index} 
                  href={item.href} 
                  className={`mobile-menu-item uppercase relative z-10 text-white text-2xl tracking-wide active:scale-90 transition-transform duration-300 ${isActive ? 'font-bold' : 'font-medium'}`}
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
    </div>
    </div>
    </header>
   
   
  );
}

export default Header;
