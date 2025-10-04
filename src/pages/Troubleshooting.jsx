import React from 'react';

function Troubleshooting() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">에러 처리 및 트러블슈팅</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. JSX 문법 오류</h2>
          <p className="text-gray-700 mb-3">JSX 내에서 자바스크립트 객체나 특수 문자를 표현할 때는 적절한 이스케이프가 필요합니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>
                // 잘못된 예:<br/>
                export default {"{"}<br/>
                  content: [<br/>
                  ],<br/>
                {"}"}<br/><br/>
                // 올바른 예:<br/>
                export default {"{"}<br/>
                  content: [<br/>
                  ],<br/>
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. 라우팅 문제</h2>
          <p className="text-gray-700 mb-3">React Router를 사용할 때 컴포넌트가 제대로 표시되지 않는 문제의 해결책입니다.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">해결 방법</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>App.js에 BrowserRouter로 앱을 감싸는지 확인</li>
              <li>Routes와 Route 컴포넌트가 올바르게 import 되었는지 확인</li>
              <li>페이지 컴포넌트가 올바르게 import되고 있는지 확인</li>
              <li>path 설정이 정확한지 확인</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Tailwind CSS 적용 문제</h2>
          <p className="text-gray-700 mb-3">Tailwind 클래스가 제대로 적용되지 않을 때 확인할 사항입니다.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">해결 방법</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>tailwind.config.js 파일의 content 섹션에 올바른 경로가 포함되어 있는지 확인</li>
              <li>src/index.css 파일에 @tailwind 지시문이 정확히 포함되어 있는지 확인</li>
              <li>postcss.config.js 파일이 올바르게 설정되어 있는지 확인</li>
              <li>개발 서버를 재시작하여 변경 사항을 적용</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. 의존성 관련 문제</h2>
          <p className="text-gray-700 mb-3">패키지 설치나 버전 관련 문제 발생 시 대처법입니다.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">해결 방법</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>node_modules 폴더와 package-lock.json 삭제 후 재설치 (npm install)</li>
              <li>npm audit 및 npm audit fix로 보안 문제 해결</li>
              <li>의존성 호환성 문제 시 개별 패키지 업데이트</li>
              <li>React Router DOM과 같은 라이브러리의 버전 호환성 확인</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. 개발 서버 문제</h2>
          <p className="text-gray-700 mb-3">포트 충돌이나 서버 시작 실패 문제의 해결책입니다.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">해결 방법</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>vite.config.js에서 다른 포트로 변경 (server: {"{"} port: 5174 {"}"})</li>
              <li>이미 사용 중인 포트의 프로세스 종료 (lsof -ti:5173 | xargs kill -9)</li>
              <li>방화벽이나 보안 설정 확인</li>
              <li>npm run dev 명령어 실행 전 캐시 정리 (npm cache clean --force)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. 드롭다운 메뉴 이벤트 처리 문제</h2>
          <p className="text-gray-700 mb-3">드롭다운 메뉴가 사용자 상호작용에 따라 안정적으로 동작하지 않는 문제입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>
                // 드롭다운 메뉴가 너무 빨리 사라지는 문제<br/>
                onMouseEnter로 드롭다운을 열고,<br/>
                onMouseLeave로 드롭다운을 닫는 구조에서<br/>
                드롭다운 영역 밖으로 마우스가 이동하면<br/>
                드롭다운이 즉시 사라지는 문제가 발생
              </code>
            </pre>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">해결 방법</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>드롭다운을 hover 이벤트 대신 click 이벤트로 제어</li>
              <li>click 이벤트를 사용하여 드롭다운 열기/닫기 토글</li>
              <li>click outside 기능을 사용하여 드롭다운 외부 클릭 시 닫기</li>
              <li>event bubbling 문제를 방지하기 위해 e.stopPropagation() 사용</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">7. 빌드 시 템플릿 리터럴 문법 오류</h2>
          <p className="text-gray-700 mb-3">템플릿 리터럴 문법이 JSX 코드 예제에 포함되어 빌드 시 오류가 발생하는 문제입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>
                ERROR: Expected "}" but found "w"<br/>
                파일 내의 코드 예제에서 템플릿 리터럴 문법 (백틱 및 ${} 표현식)이<br/>
                JSX에서 해석되어 문법 오류가 발생한 경우입니다.
              </code>
            </pre>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">해결 방법</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>코드 예제 내에서 className 속성에 템플릿 리터럴 문법 사용 피하기</li>
              <li>JSX 내에서 코드 예제를 보여줄 때는 일반 문자열로 표현</li>
              <li>템플릿 리터럴 표현이 필요한 경우 적절히 이스케이프 처리하거나 설명으로 대체</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">예방 팁</h2>
          <p className="text-gray-700 mb-3">에러를 미리 방지할 수 있는 몇 가지 팁:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>코드 작성 시 ESLint 및 Prettier 설정으로 문법 오류 자동 감지</li>
            <li>의존성 설치 후 변경 사항 발생 시 서버 재시작 습관</li>
            <li>JSX 내에서 특수문자나 자바스크립트 코드 표현 시 이스케이프 방법 숙지</li>
            <li>React 컴포넌트 이름은 항상 대문자로 시작</li>
            <li>모든 엘리먼트는 정확하게 닫혀 있어야 함 (예: &lt;br /&gt;)</li>
            <li>드롭다운 메뉴 등 상호작용 요소는 hover보다 click 이벤트가 안정적임</li>
            <li>코드 예제를 포함할 때 템플릿 리터럴 문법이 빌드 오류를 유발할 수 있음을 인지</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Troubleshooting;