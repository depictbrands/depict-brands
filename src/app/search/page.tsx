'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Search Results
          </h1>
          
          {query ? (
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Searching for: <span className="font-semibold text-black">"{query}"</span>
              </p>
              
              {/* Placeholder search results */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Search functionality coming soon
                </h3>
                <p className="text-gray-600">
                  We're working on implementing a comprehensive search feature that will help you find projects by client name, industry, location, year, and more.
                </p>
              </div>
              
              {/* Quick links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <a 
                  href="/work" 
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Browse All Work</h4>
                  <p className="text-sm text-gray-600">View our complete portfolio</p>
                </a>
                
                <a 
                  href="/services" 
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Our Services</h4>
                  <p className="text-sm text-gray-600">Learn about what we offer</p>
                </a>
                
                <a 
                  href="/contact" 
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Get In Touch</h4>
                  <p className="text-sm text-gray-600">Start a conversation</p>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                No search query provided
              </p>
              
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Start your search
                </h3>
                <p className="text-gray-600">
                  Use the search bar in the header to find specific projects, clients, or content.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
