// src/app/work/yosep-skin-care/page.tsx
'use client';

import { useEffect } from 'react';
import Hero from './components/hero';
import Introduction from './components/Introduction';
import Challenge from './components/Challenge';
import BrandStrategy from './components/BrandStrategy';
import VisualIdentity from './components/VisualIdentity';
import ProductPresentation from './components/ProductPresentation';
import Ecommerce from './components/Ecommerce';
import Impact from './components/Impact';

export default function YosepPage() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fade-in animation styles
    const style = document.createElement('style');
    style.textContent = `
      .animate-fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      
      .animate-fade-in.animate-fade-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Smooth scroll for the entire page */
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <Hero />
      
      {/* Introduction Section */}
      <Introduction />
      
      {/* Challenge Section */}
      <Challenge />
      
      {/* Brand Strategy Section */}
      <BrandStrategy />
      
      {/* Visual Identity Section */}
      <VisualIdentity />
      
      {/* Product Presentation Section */}
      <ProductPresentation />
      
      {/* Ecommerce Section */}
      <Ecommerce />
      
      {/* Impact Section */}
      <Impact />
      
      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 font-inter">
              Ready to transform your brand?
            </h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mb-8 font-inter">
              Let's create something beautiful together.
            </p>
            <a 
              href="/work" 
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 font-inter"
            >
              View More Work
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
