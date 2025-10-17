'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrimVisible, setScrimVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Detect page background color based on pathname and DOM
  useEffect(() => {
    // First, check based on known dark pages
    const darkPages = ['/contact'];
    const isKnownDarkPage = darkPages.includes(pathname);
    
    if (isKnownDarkPage) {
      setIsDarkBackground(true);
      return;
    }
    
    // For other pages, check DOM background
    const checkBackgroundColor = () => {
      // Check multiple elements for background color
      const body = document.body;
      const main = document.querySelector('main');
      const section = document.querySelector('section');
      
      // Get computed styles from different elements
      const bodyStyle = window.getComputedStyle(body);
      const mainStyle = main ? window.getComputedStyle(main) : null;
      const sectionStyle = section ? window.getComputedStyle(section) : null;
      
      // Check background colors
      const bodyBg = bodyStyle.backgroundColor;
      const mainBg = mainStyle?.backgroundColor;
      const sectionBg = sectionStyle?.backgroundColor;
      
      // Convert to RGB values for more accurate detection
      const getRGBValues = (color: string) => {
        if (color.includes('rgb')) {
          const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          if (match) {
            return {
              r: parseInt(match[1]),
              g: parseInt(match[2]),
              b: parseInt(match[3])
            };
          }
        }
        return null;
      };
      
      // Check if any background is dark
      const checkIfDark = (bgColor: string) => {
        if (bgColor.includes('black') || bgColor.includes('#000')) return true;
        
        const rgb = getRGBValues(bgColor);
        if (rgb) {
          // Consider dark if all RGB values are low (black or very dark)
          return rgb.r < 50 && rgb.g < 50 && rgb.b < 50;
        }
        
        return false;
      };
      
      const isDark = checkIfDark(bodyBg) || 
                     (mainBg && checkIfDark(mainBg)) || 
                     (sectionBg && checkIfDark(sectionBg));
      
      console.log('Background detection:', { bodyBg, mainBg, sectionBg, isDark });
      setIsDarkBackground(isDark || false);
    };

    // Check on mount
    checkBackgroundColor();
    
    // Check when route changes (with delay to ensure DOM is updated)
    const handleRouteChange = () => {
      setTimeout(checkBackgroundColor, 200);
    };
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Also check periodically in case of dynamic changes
    const interval = setInterval(checkBackgroundColor, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, [pathname]);

  // Scroll-based header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHeaderVisible(true);
      } 
      // Hide header when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open search with / or Cmd/Ctrl + K
      if (event.key === '/' || (event.metaKey && event.key === 'k') || (event.ctrlKey && event.key === 'k')) {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      
      // Close search with Escape
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Scrim fade-in effect when search opens
  useEffect(() => {
    if (isSearchOpen) {
      const id = requestAnimationFrame(() => setScrimVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setScrimVisible(false);
  }, [isSearchOpen]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  // Dynamic text and icon colors based on background
  const textColor = isDarkBackground ? 'text-white' : 'text-black';
  const iconColor = isDarkBackground ? 'text-white' : 'text-black';
  const hoverColor = isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/brand/depict-brands-logo.svg"
                alt="Depict Brands"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-end mr-8">
              <Link 
                href="/work" 
                className={`${textColor} font-medium uppercase tracking-wide relative group transition-colors duration-200`}
              >
                Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-gold)] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            
              <Link 
                href="/about" 
                className={`${textColor} font-medium uppercase tracking-wide relative group transition-colors duration-200`}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-gold)] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className={`${textColor} font-medium uppercase tracking-wide relative group transition-colors duration-200`}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-gold)] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Icons Group - Search, Instagram, Facebook */}
            <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`${iconColor} hover:text-[var(--brand-gold)] transition-colors duration-200 p-1`}
                aria-label="Open search"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </button>

               {/* LinkedIn Icon */}
               <a
                    href="https://www.linkedin.com/company/depict-brands/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${iconColor} hover:text-[var(--brand-gold)] transition-colors duration-200 p-1`}
                    aria-label="LinkedIn"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" 
                        strokeWidth={2}
                      />
                      <rect x="2" y="9" width="4" height="12" strokeWidth={2}/>
                      <circle cx="4" cy="4" r="2" strokeWidth={2}/>
                    </svg>
                  </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/depictbrands?igsh=MWw1bTM0cmZqODF0bg=="
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconColor} hover:text-[var(--brand-gold)] transition-colors duration-200 p-1`}
                aria-label="Instagram"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2}/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth={2}/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2}/>
                </svg>
              </a>

                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/DepictBrands/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${iconColor} hover:text-[var(--brand-gold)] transition-colors duration-200 p-1`}
                    aria-label="Facebook"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" 
                        strokeWidth={2}
                      />
                    </svg>
                  </a>

                 
            </div>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden ${textColor} ${hoverColor} transition-colors duration-200`}
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Search overlay"
          >
            {/* Full-screen Black Scrim */}
            <button
              type="button"
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${scrimVisible ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
              aria-label="Close search"
            />

            {/* Yellow Drawer on top */}
            <div
              className="absolute top-0 left-0 right-0 h-80 bg-[var(--brand-gold)] flex items-center justify-center transform -translate-y-full animate-slide-down"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-[min(90vw,1000px)] px-6 md:px-0" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { handleSearch(e as any); } }}
                    placeholder="Search for the project by client, service, year"
                    className="w-full text-4xl font-semibold text-left text-black bg-transparent border-none outline-none placeholder-black"
                  />
                  <svg className="w-8 h-8 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black" />
              </div>
            </div>

            {/* Clickable Scrim */}
            <button
              type="button"
              className={`flex-1 bg-black/60 transition-opacity duration-300 ${scrimVisible ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
              aria-label="Close search"
            />
          </div>
        )}
    </>
  );
}
