import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Vite+React+Tailwind</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 overflow-x-auto py-1">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Home</Link>
            <Link to="/navigation" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Navigation</Link>
            <Link to="/page-composition" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Page Composition</Link>
            <Link to="/styling-theming" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Styling & Theming</Link>
            <Link to="/form-handling" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Form Handling</Link>
            <Link to="/performance-optimization" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Performance</Link>
            <Link to="/feature-implementation" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Feature Implementation</Link>
            <Link to="/project-setup" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Project Setup</Link>
            <Link to="/components" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Components</Link>
            <Link to="/troubleshooting" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200 whitespace-nowrap">Troubleshooting</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 rounded-lg mt-2 absolute left-4 right-4">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/navigation" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Navigation
              </Link>
              <Link 
                to="/page-composition" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Page Composition
              </Link>
              <Link 
                to="/styling-theming" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Styling & Theming
              </Link>
              <Link 
                to="/form-handling" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Form Handling
              </Link>
              <Link 
                to="/performance-optimization" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Performance
              </Link>
              <Link 
                to="/feature-implementation" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Feature Implementation
              </Link>
              <Link 
                to="/project-setup" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Project Setup
              </Link>
              <Link 
                to="/components" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Components
              </Link>
              <Link 
                to="/troubleshooting" 
                className="block px-3 py-2 rounded hover:bg-blue-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Troubleshooting
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;