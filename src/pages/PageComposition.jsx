import React from 'react';

function PageComposition() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">페이지 구성</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. 라우팅 구조 설계</h2>
          <p className="text-gray-700 mb-3">React Router DOM을 사용한 애플리케이션의 라우팅 구조를 설계하는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// App.jsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. 메인 페이지 구조</h2>
          <p className="text-gray-700 mb-3">기본적인 메인 페이지의 구조를 구성하는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CtaSection from '../components/CtaSection';

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <CtaSection />
    </div>
  );
}

export default Home;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. 컴포넌트 기반 페이지 설계</h2>
          <p className="text-gray-700 mb-3">재사용 가능한 컴포넌트를 조합하여 페이지를 구성합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">회사 소개</h1>
          <p className="text-lg text-gray-600">저희 회사에 대해 알아보세요</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">비전</h2>
            <p className="text-gray-700">사용자 중심의 혁신적인 솔루션을 제공합니다.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">미션</h2>
            <p className="text-gray-700">기술을 통해 삶의 질을 향상시키는 것</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">팀 소개</h2>
          <p className="text-gray-700 mb-4">저희 팀은 열정적이고 창의적인 개발자들로 구성되어 있습니다.</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm w-48">
              <h3 className="font-medium">개발 팀</h3>
              <p className="text-sm text-gray-600">5명</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-48">
              <h3 className="font-medium">디자인 팀</h3>
              <p className="text-sm text-gray-600">3명</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. 동적 라우팅</h2>
          <p className="text-gray-700 mb-3">파라미터를 사용한 동적 라우팅 설정 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// App.jsx에 동적 라우트 추가
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/user/:id" element={<UserProfile />} />
  <Route path="/category/:categoryId" element={<CategoryPage />} />
  <Route path="/product/:productId" element={<ProductDetail />} />
</Routes>

// 동적 라우트 사용 예시 (UserProfile.jsx)
import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">사용자 프로필 #{id}</h1>
      <p>사용자 ID: {id}</p>
    </div>
  );
}

export default UserProfile;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">페이지 구성 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>라우트는 사용자 흐름에 따라 논리적으로 구성하세요</li>
            <li>404 페이지를 구현하여 존재하지 않는 경로에 대한 처리를 하세요</li>
            <li>레이아웃 컴포넌트(헤더, 푸터 등)는 공통 컴포넌트로 분리하세요</li>
            <li>페이지 레벨 상태는 해당 페이지에서 관리하고, 전역 상태는 Context API나 상태 관리 라이브러리를 사용하세요</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700 mb-3">페이지 구성은 사용자 경험을 결정짓는 중요한 요소입니다. React Router를 사용하여 명확한 URL 구조를 만들고, 컴포넌트 기반으로 재사용 가능한 UI를 설계하세요.</p>
          <p className="text-gray-700">적절한 레이아웃 구조와 동적 라우팅을 통해 사용자 친화적인 웹 애플리케이션을 구성할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default PageComposition;