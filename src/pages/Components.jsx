import React from 'react';

function Components() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">React 컴포넌트 제작</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. 컴포넌트 기초</h2>
          <p className="text-gray-700 mb-4">React 컴포넌트는 UI를 구성하는 독립적인 재사용 가능한 파트입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. 함수형 컴포넌트</h2>
          <p className="text-gray-700 mb-4">ES6 화살표 함수를 사용한 컴포넌트 정의</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`const Button = ({ onClick, children }) => (
  <button 
    onClick={onClick} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {children}
  </button>
);`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Hooks 사용</h2>
          <p className="text-gray-700 mb-4">useState 및 useEffect와 같은 React Hooks를 활용</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">컴포넌트 제작 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>작고 단일 책임을 가진 컴포넌트로 분리하세요</li>
            <li>재사용 가능한 UI 컴포넌트는 props를 통해 유연하게 동작하도록 설계하세요</li>
            <li>CSS 클래스는 Tailwind CSS 유틸리티를 활용하여 빠르게 스타일링하세요</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700">React 컴포넌트는 애플리케이션의 UI를 구성하는 기본 단위입니다. 함수형 컴포넌트와 Hooks를 사용하면 간결하고 효과적으로 UI를 구성할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Components;