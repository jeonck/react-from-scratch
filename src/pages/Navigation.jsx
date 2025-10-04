import React from 'react';

function Navigation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Navigation Bar 구현</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. 기본 내비게이션 바 구조</h2>
          <p className="text-gray-700 mb-3">React 컴포넌트로 구현하는 기본 내비게이션 바의 구조입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">로고</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">홈</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">소개</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">서비스</a>
          </div>
          <div className="flex items-center">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">
              시작하기
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. 반응형 내비게이션 바</h2>
          <p className="text-gray-700 mb-3">모바일과 데스크탑에서 다르게 동작하는 반응형 내비게이션 바입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';

function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">로고</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">홈</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">소개</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">서비스</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">문의</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">홈</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">소개</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">서비스</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-blue-700">문의</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. React Router와의 통합</h2>
          <p className="text-gray-700 mb-3">React Router를 사용하여 내비게이션 링크를 구현하는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RouterNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">Vite+React+Tailwind</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">홈</Link>
            <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded">소개</Link>
            <Link to="/services" className="hover:bg-blue-700 px-3 py-2 rounded">서비스</Link>
            <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">문의</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded hover:bg-blue-700">홈</Link>
              <Link to="/about" className="block px-3 py-2 rounded hover:bg-blue-700">소개</Link>
              <Link to="/services" className="block px-3 py-2 rounded hover:bg-blue-700">서비스</Link>
              <Link to="/contact" className="block px-3 py-2 rounded hover:bg-blue-700">문의</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">내비게이션 바 구현 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>반응형 디자인을 위해 Tailwind의 반응형 접두사 (md:, lg: 등)를 활용하세요</li>
            <li>모바일 메뉴는 useState를 사용하여 상태를 관리하세요</li>
            <li>hover, focus, active와 같은 의사 클래스를 사용하여 사용자 경험을 향상시키세요</li>
            <li>SVG 아이콘은 접근성을 위해 적절한 aria 레이블을 포함시켜야 합니다</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700 mb-3">내비게이션 바는 모든 웹 애플리케이션의 핵심 구성 요소입니다. React와 Tailwind CSS를 사용하면 유연하고 반응형 내비게이션을 쉽게 구현할 수 있습니다.</p>
          <p className="text-gray-700">기본 구조부터 반응형 기능, React Router 통합까지 단계별로 구현함으로써 사용자 친화적인 내비게이션 경험을 제공할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;