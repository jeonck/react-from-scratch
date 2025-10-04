import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown) {
        const dropdowns = document.querySelectorAll('.dropdown-container');
        const isClickInside = Array.from(dropdowns).some(dropdown => 
          dropdown.contains(event.target)
        );
        if (!isClickInside) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  // Grouped menu items
  const menuGroups = {
    '시작하기': [
      { name: '프로젝트 설정', path: '/project-setup' },
    ],
    '기초 구성': [
      { name: '내비게이션', path: '/navigation' },
      { name: '컴포넌트 설계', path: '/components' },
      { name: '페이지 구성', path: '/page-composition' },
    ],
    '기능 구현': [
      { name: '폼 처리 및 검증', path: '/form-handling' },
      { name: '성능 최적화', path: '/performance-optimization' },
      { name: '기능 구현', path: '/feature-implementation' },
    ],
    '스타일링': [
      { name: '스타일링 및 테마', path: '/styling-theming' },
    ],
    '문서': [
      { name: '트러블슈팅', path: '/troubleshooting' },
    ]
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">Vite+React+Tailwind</Link>
          </div>
          
          {/* Desktop Menu with Dropdowns */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200"
            >
              Home
            </Link>
            
            {Object.entries(menuGroups).map(([groupName, items]) => (
              <div 
                key={groupName} 
                className="relative dropdown-container"
              >
                <button
                  className={`px-3 py-2 rounded transition duration-200 flex items-center ${activeDropdown === groupName ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === groupName ? null : groupName);
                  }}
                >
                  {groupName}
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === groupName ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
                
                {activeDropdown === groupName && (
                  <div className="absolute left-0 mt-2 w-48 bg-blue-700 rounded-md shadow-lg py-1 z-50">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm hover:bg-blue-800 transition duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
              
              {Object.entries(menuGroups).map(([groupName, items]) => (
                <div key={groupName}>
                  <div className="px-3 py-2 font-medium border-b border-blue-600">
                    {groupName}
                  </div>
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-6 py-2 rounded hover:bg-blue-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;