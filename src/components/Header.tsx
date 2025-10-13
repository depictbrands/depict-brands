'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/brand/depict-brands-logo.svg"
                alt="Depict Brands"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/work" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Work
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-black transition-colors duration-200 p-1"
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
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 hover:text-black transition-colors duration-200"
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search overlay"
          onClick={(e) => {
            // Close search when clicking on the overlay background
            if (e.target === e.currentTarget) {
              setIsSearchOpen(false);
              setSearchQuery('');
            }
          }}
        >
          <div className="flex items-start justify-center pt-20 px-6">
            <div className="w-full max-w-2xl">
              <form onSubmit={handleSearch} className="relative" onClick={(e) => e.stopPropagation()}>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find work by client, type, location, year"
                  className="w-full px-6 py-4 text-xl bg-white rounded-lg border-0 focus:outline-none focus:ring-0 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  aria-label="Search"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
