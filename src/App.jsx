import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectSetup from './pages/ProjectSetup';
import Components from './pages/Components';
import Troubleshooting from './pages/Troubleshooting';
import Navigation from './pages/Navigation';
import PageComposition from './pages/PageComposition';
import FeatureImplementation from './pages/FeatureImplementation';
import StylingAndTheming from './pages/StylingAndTheming';
import FormHandling from './pages/FormHandling';
import PerformanceOptimization from './pages/PerformanceOptimization';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={
            <main className="container mx-auto px-4 py-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Vite + React + Tailwind 프로젝트 시작하기</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">현대적인 웹 개발을 위한 Vite, React, Tailwind CSS 조합으로 빠르고 효율적인 프론트엔드 개발 환경을 구축해 봅시다.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-blue-600 mb-3">⚡ Vite 특징</h2>
                  <p className="text-gray-700">초고속 번들링과 개발 서버, 핫 모듈 리플레이스먼트(HMR) 기능으로 빠른 개발 경험을 제공합니다.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-blue-600 mb-3">⚛️ React 특징</h2>
                  <p className="text-gray-700">컴포넌트 기반 아키텍처와 선언적 UI로 유지보수성이 뛰어난 애플리케이션을 구축할 수 있습니다.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-blue-600 mb-3">.wind CSS 특징</h2>
                  <p className="text-gray-700">유틸리티 우선 CSS 프레임워크로 빠르고 일관된 UI 개발이 가능합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">시작하기 전에</h2>
                <div className="prose max-w-none">
                  <h3 className="text-lg font-medium text-gray-700">Vite + React + Tailwind 조합의 장점:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>빠른 개발 서버 시작 시간 (Cold start)</li>
                    <li>즉각적인 모듈 갱신 (Hot Module Replacement)</li>
                    <li>생산성을 높이는 유틸리티 중심의 CSS</li>
                    <li>Tree-shaking으로 인한 최적화된 번들 크기</li>
                    <li>ESLint, Prettier 등 개발 도구와의 원활한 통합</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">시작 단계</h2>
                <p className="mb-6 text-blue-100">이제 Vite, React, Tailwind CSS를 조합한 현대적인 웹 애플리케이션 개발을 시작해 봅시다. 아래의 단계별 가이드를 따라가며 프로젝트를 확장해 나갈 수 있습니다.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">1. 프로젝트 세팅</h3>
                    <p className="text-sm">필요한 패키지 설치 및 구성 파일 생성</p>
                  </div>
                  <div className="bg-blue-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">2. 컴포넌트 설계</h3>
                    <p className="text-sm">재사용 가능한 UI 컴포넌트 구조 설계</p>
                  </div>
                  <div className="bg-blue-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">3. 페이지 구성</h3>
                    <p className="text-sm">라우팅 설정 및 주요 페이지 구성</p>
                  </div>
                  <div className="bg-blue-400/20 p-4 rounded-lg">
                    <p className="text-sm">상태 관리 및 API 연동 설정</p>
                    <h3 className="font-semibold mb-2">4. 기능 구현</h3>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-pink-600 rounded-lg shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">추가 단계</h2>
                <p className="mb-6 text-blue-100">프로젝트를 더욱 완성도 높게 만들기 위한 다음 단계를 참고하세요.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">5. 스타일링 및 테마 관리</h3>
                    <p className="text-sm">Tailwind 고급 기능 및 동적 테마 전환 구현</p>
                  </div>
                  <div className="bg-indigo-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">6. 폼 처리 및 유효성 검사</h3>
                    <p className="text-sm">폼 라이브러리 및 클라이언트 검증 구현</p>
                  </div>
                  <div className="bg-indigo-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">7. 성능 최적화</h3>
                    <p className="text-sm">렌더링 최적화 및 코드 분할 전략</p>
                  </div>
                  <div className="bg-indigo-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">8. 테스팅</h3>
                    <p className="text-sm">유닛 테스트 및 컴포넌트 테스트 작성</p>
                  </div>
                  <div className="bg-indigo-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">9. 보안 및 접근성</h3>
                    <p className="text-sm">웹 접근성 및 보안 구현</p>
                  </div>
                  <div className="bg-indigo-400/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">10. 배포 준비</h3>
                    <p className="text-sm">빌드 설정 및 CDN 배포 전략</p>
                  </div>
                </div>
              </div>
            </main>
          } />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/page-composition" element={<PageComposition />} />
          <Route path="/styling-theming" element={<StylingAndTheming />} />
          <Route path="/form-handling" element={<FormHandling />} />
          <Route path="/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/feature-implementation" element={<FeatureImplementation />} />
          <Route path="/project-setup" element={<ProjectSetup />} />
          <Route path="/components" element={<Components />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;