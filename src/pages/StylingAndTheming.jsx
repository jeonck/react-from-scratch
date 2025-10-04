import React from 'react';

function StylingAndTheming() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">스타일링 및 테마 관리</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Tailwind CSS 고급 기능</h2>
          <p className="text-gray-700 mb-3">Tailwind CSS의 고급 기능과 사용자 정의 테마를 구현하는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        secondary: {
          500: '#8b5cf6',
          900: '#581c87',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. 다크 모드 구현</h2>
          <p className="text-gray-700 mb-3">사용자 설정에 따라 다크 모드를 전환하는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// App.jsx 또는 index.html에 다음 설정 필요
// index.html
<html lang="ko" class="dark:bg-gray-900 dark:text-white">
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <div id="root"></div>
  </body>
</html>

// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // 또는 'media'를 사용하여 시스템 설정 기반
  theme: {
    extend: {},
  },
  plugins: [],
};

// 컴포넌트 내에서의 사용
import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // 사용자의 시스템 설정 또는 저장된 설정 확인
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button 
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. CSS 변수와 테마 전환</h2>
          <p className="text-gray-700 mb-3">CSS 변수를 사용한 동적 테마 전환 기능 구현 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// src/styles/themes.css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-background: #ffffff;
  --color-text: #1f2937;
  --color-card: #f9fafb;
}

[data-theme='dark'] {
  --color-primary: #60a5fa;
  --color-secondary: #a78bfa;
  --color-background: #111827;
  --color-text: #f9fafb;
  --color-card: #1f2937;
}

[data-theme='corporate'] {
  --color-primary: #2563eb;
  --color-secondary: #059669;
  --color-background: #f8fafc;
  --color-text: #0f172a;
  --color-card: #ffffff;
}

// React 컴포넌트에서 사용
import React, { useEffect } from 'react';

function useTheme() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return { setTheme };
}

function ThemeAwareComponent() {
  const { setTheme } = useTheme();

  return (
    <div className="p-4" style={{ 
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)'
    }}>
      <h1 className="text-2xl font-bold mb-4">테마 인식 컴포넌트</h1>
      <button 
        onClick={() => setTheme('default')}
        className="mr-2 px-3 py-1 rounded"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        기본 테마
      </button>
      <button 
        onClick={() => setTheme('dark')}
        className="mr-2 px-3 py-1 rounded"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        다크 테마
      </button>
      <button 
        onClick={() => setTheme('corporate')}
        className="px-3 py-1 rounded"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        회사 테마
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Tailwind 플러그인 사용</h2>
          <p className="text-gray-700 mb-3">Tailwind CSS 플러그인을 사용하여 기능을 확장하는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// 플러그인 설치
npm install @tailwindcss/typography @tailwindcss/forms

// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    forms,
    // 사용자 정의 플러그인 예시
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        }
      })
    }
  ],
};

// 사용 예시
// <p className="prose dark:prose-invert"> // typography 플러그인
// <button className="text-shadow-lg"> // 사용자 정의 유틸리티
// <input type="text" className="form-input"> // forms 플러그인`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">스타일링 및 테마 관리 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>테마는 사용자의 시스템 설정을 우선 고려하여 구현하세요</li>
            <li>CSS 변수를 사용하면 동적 테마 전환이 더 쉬워집니다</li>
            <li>tailwind.config.js에서 사용자 정의 테마 값은 의미 있는 이름으로 정의하세요</li>
            <li>플러그인 사용 시 성능 영향을 고려하고 불필요한 기능은 제거하세요</li>
            <li>테마 관련 상태는 Context API나 전역 상태 관리 라이브러리를 사용하여 관리하는 것이 좋습니다</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700 mb-3">Tailwind CSS를 사용한 스타일링과 테마 관리는 웹 애플리케이션의 사용자 경험을 향상시키는 중요한 요소입니다.</p>
          <p className="text-gray-700">사용자 정의 테마 설정, 다크 모드 구현, CSS 변수를 활용한 동적 테마 전환, 플러그인을 통한 기능 확장을 통해 다양한 디자인 요구사항을 만족시킬 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default StylingAndTheming;