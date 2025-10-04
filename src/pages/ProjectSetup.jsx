import React from 'react';

function ProjectSetup() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Vite+React+Tailwind 프로젝트 생성 절차</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Node.js 설치 확인</h2>
          <p className="text-gray-700 mb-4">프로젝트를 생성하기 전에 Node.js가 설치되어 있는지 확인합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>node --version<br/>
npm --version</code>
            </pre>
          </div>
          <p className="text-gray-600 mt-2">Node.js 14.18+ 또는 16+ 버전이 필요합니다.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Vite를 사용한 프로젝트 생성</h2>
          <p className="text-gray-700 mb-4">npx를 사용하여 Vite 프로젝트를 생성합니다. React 템플릿을 선택합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>npm create vite@latest my-project -- --template react</code>
            </pre>
          </div>
          <p className="text-gray-600 mt-2">위 명령어는 my-project 디렉터리에 React 템플릿을 기반으로 새 프로젝트를 생성합니다.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. 의존성 설치</h2>
          <p className="text-gray-700 mb-4">생성된 디렉터리로 이동하고 필요한 의존성을 설치합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>cd my-project<br/>
npm install</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Tailwind CSS 설치</h2>
          <p className="text-gray-700 mb-4">Tailwind CSS와 관련 도구들을 설치합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>npm install -D tailwindcss postcss autoprefixer<br/>
npx tailwindcss init -p</code>
            </pre>
          </div>
          <p className="text-gray-600 mt-2">두 번째 명령은 tailwind.config.js 및 postcss.config.js 파일을 생성합니다.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. Tailwind 구성 파일 설정</h2>
          <p className="text-gray-700 mb-4">tailwind.config.js 파일을 다음과 같이 수정합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. CSS 파일에 Tailwind 지시문 추가</h2>
          <p className="text-gray-700 mb-4">src/index.css 파일에 다음 Tailwind 지시문을 추가합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>@tailwind base;<br/>
@tailwind components;<br/>
@tailwind utilities;</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">7. 개발 서버 시작</h2>
          <p className="text-gray-700 mb-4">설정이 완료되면 개발 서버를 시작합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>npm run dev</code>
            </pre>
          </div>
          <p className="text-gray-600 mt-2">기본적으로 http://localhost:5174 에서 애플리케이션이 실행됩니다.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">추가 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>VS Code 사용 시 'Tailwind CSS IntelliSense' 확장을 설치하면 클래스 자동 완성 기능을 사용할 수 있습니다.</li>
            <li>생산성을 높이기 위해 ESLint와 Prettier를 설정하는 것을 고려해 보세요.</li>
            <li>Git 저장소를 초기화하고 초기 커밋을 하는 것을 잊지 마세요: <code className="bg-blue-100 px-1 rounded">git init</code></li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700 mb-3">Vite+React+Tailwind 조합은 현대적인 웹 개발을 위한 강력한 스택입니다. 빠른 빌드 시간, 효율적인 모듈 시스템, 직관적인 스타일링 기능을 제공하여 개발 생산성을 크게 향상시킵니다.</p>
          <p className="text-gray-700">이 설정을 통해 빠르게 시작하고 확장 가능한 애플리케이션을 구축할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSetup;