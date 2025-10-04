import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">Vite+React+Tailwind</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Home</Link>
            <Link to="/navigation" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Navigation</Link>
            <Link to="/page-composition" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Page Composition</Link>
            <Link to="/styling-theming" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Styling & Theming</Link>
            <Link to="/form-handling" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Form Handling</Link>
            <Link to="/feature-implementation" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Feature Implementation</Link>
            <Link to="/project-setup" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Project Setup</Link>
            <Link to="/components" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Components</Link>
            <Link to="/troubleshooting" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200">Troubleshooting</Link>
          </div>
          <div className="flex items-center">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;