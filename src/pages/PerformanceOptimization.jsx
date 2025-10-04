import React from 'react';

function PerformanceOptimization() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">성능 최적화</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. React.memo를 사용한 렌더링 최적화</h2>
          <p className="text-gray-700 mb-3">불필요한 리렌더링을 방지하기 위한 React.memo 사용법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// 불필요한 리렌더링이 발생하는 컴포넌트 (비효율적인 예시)
function UserProfile({ user }) {
  console.log('UserProfile 렌더링:', user.name);
  return (
    <div className="p-4 border">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

// React.memo를 사용한 최적화된 컴포넌트
const OptimizedUserProfile = React.memo(({ user }) => {
  console.log('UserProfile 렌더링:', user.name);
  return (
    <div className="p-4 border">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// React.memo의 커스텀 비교 함수 사용
const CustomMemoUserProfile = React.memo(({ user, isActive }) => {
  console.log('UserProfile 렌더링:', user.name, isActive);
  return (
    <div className={\`p-4 border \${isActive ? 'bg-green-100' : 'bg-gray-100'}\`}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  // 사용자 정보나 활성 상태가 동일하면 리렌더링하지 않음
  return prevProps.user.id === nextProps.user.id && 
         prevProps.user.name === nextProps.user.name && 
         prevProps.user.email === nextProps.user.email && 
         prevProps.isActive === nextProps.isActive;
});

// 사용 예시
function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: '홍길동', email: 'hong@example.com' },
    { id: 2, name: '김철수', email: 'kim@example.com' },
  ]);
  const [activeUserId, setActiveUserId] = useState(1);

  return (
    <div>
      {users.map(user => (
        <CustomMemoUserProfile 
          key={user.id} 
          user={user} 
          isActive={activeUserId === user.id}
        />
      ))}
      <button onClick={() => setActiveUserId(2)}>두 번째 사용자 활성화</button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. useCallback과 useMemo 사용</h2>
          <p className="text-gray-700 mb-3">함수와 값의 재생성을 방지하여 불필요한 리렌더링을 줄이는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState, useEffect, useCallback, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');

  // useCallback: 함수 재생성을 방지
  const handleAddItem = useCallback(() => {
    const newItem = {
      id: Date.now(),
      name: \`Item \${Date.now()}\`,
      value: Math.random() * 100
    };
    setItems(prevItems => [...prevItems, newItem]);
  }, []);

  // useMemo: 계산 비용이 큰 연산 결과를 기억
  const expensiveValue = useMemo(() => {
    console.log('계산 수행 중...');
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  // 필터링된 아이템 목록 계산 (메모이제이션)
  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // 자식 컴포넌트에 메모이제이션된 값 전달
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">성능 최적화 예시</h2>
      
      <div className="mb-4">
        <p>카운트: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          카운트 증가
        </button>
        <button 
          onClick={handleAddItem}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          아이템 추가
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="필터 검색..."
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <p>총합: {expensiveValue}</p>
      </div>

      <div>
        <h3 className="font-bold mb-2">아이템 목록 ({filteredItems.length}개)</h3>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id} className="p-2 border-b">
              {item.name} - {item.value.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <MemoizedChildComponent 
        count={count} 
        onIncrement={handleAddItem}
      />
    </div>
  );
}

// 메모이제이션된 자식 컴포넌트
const MemoizedChildComponent = React.memo(({ count, onIncrement }) => {
  console.log('ChildComponent 렌더링');
  
  return (
    <div className="mt-4 p-3 bg-gray-100 rounded">
      <p>부모의 카운트: {count}</p>
      <button 
        onClick={onIncrement}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        아이템 추가 (자식에서)
      </button>
    </div>
  );
});`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. lazy와 Suspense를 사용한 코드 분할</h2>
          <p className="text-gray-700 mb-3">필요할 때만 컴포넌트를 로드하여 번들 크기를 줄이는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { lazy, Suspense, useState } from 'react';

// 느리게 로드할 컴포넌트들
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Reports = lazy(() => import('./Reports'));
const UserProfile = lazy(() => import('./UserProfile'));

function AppRouter() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={\`px-3 py-2 rounded \${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}\`}
            >
              대시보드
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('settings')}
              className={\`px-3 py-2 rounded \${activeTab === 'settings' ? 'bg-blue-600' : 'hover:bg-gray-700'}\`}
            >
              설정
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('reports')}
              className={\`px-3 py-2 rounded \${activeTab === 'reports' ? 'bg-blue-600' : 'hover:bg-gray-700'}\`}
            >
              보고서
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('profile')}
              className={\`px-3 py-2 rounded \${activeTab === 'profile' ? 'bg-blue-600' : 'hover:bg-gray-700'}\`}
            >
              프로필
            </button>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        <Suspense fallback={<div className="text-center py-8">로딩 중...</div>}>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'settings' && <Settings />}
          {activeTab === 'reports' && <Reports />}
          {activeTab === 'profile' && <UserProfile />}
        </Suspense>
      </main>
    </div>
  );
}

// 동적 임포트를 사용한 조건부 로딩
function ConditionalComponent({ shouldLoad }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (shouldLoad) {
      import('./HeavyComponent').then(module => {
        setComponent(() => module.default);
      });
    }
  }, [shouldLoad]);

  if (shouldLoad && Component) {
    return <Component />;
  }

  return <div>조건부 컴포넌트</div>;
}

// 라우트 수준에서의 코드 분할
// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center py-8">로딩 중...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. 가상 스크롤링 (Virtual Scrolling)</h2>
          <p className="text-gray-700 mb-3">대량의 데이터를 효율적으로 렌더링하기 위한 가상 스크롤링 기법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState, useCallback } from 'react';

// 가상 스크롤링 구현 (단순화된 예시)
function VirtualList({ items, itemHeight = 50, containerHeight = 400 }) {
  const [scrollTop, setScrollTop] = useState(0);

  // 보여줄 아이템 계산
  const visibleStartIndex = Math.floor(scrollTop / itemHeight);
  const visibleEndIndex = Math.min(
    visibleStartIndex + Math.ceil(containerHeight / itemHeight) + 5, // 여유 분량
    items.length
  );

  // 상단 여백 계산
  const topPadding = visibleStartIndex * itemHeight;
  // 하단 여백 계산
  const bottomPadding = (items.length - visibleEndIndex) * itemHeight;

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  return (
    <div 
      className="overflow-y-auto border rounded"
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: topPadding }}></div>
      
      {items.slice(visibleStartIndex, visibleEndIndex).map((item, index) => (
        <div 
          key={item.id || visibleStartIndex + index}
          style={{ height: itemHeight }}
          className="flex items-center border-b px-4"
        >
          {item.name || item}
        </div>
      ))}
      
      <div style={{ height: bottomPadding }}></div>
      
      <div style={{ height: 1, marginTop: -1 }} ref={scrollRef}>
        {/* 스크롤 전체 높이를 위한 요소 */}
      </div>
    </div>
  );
}

// 실제 사용 예시
function VirtualizedListExample() {
  const [items] = useState(() => 
    Array.from({ length: 10000 }, (_, i) => ({ 
      id: i, 
      name: \`아이템 \${i + 1}\` 
    }))
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">가상 스크롤링 예제 (10,000개 아이템)</h2>
      <VirtualList items={items} />
    </div>
  );
}

// react-window를 사용한 고급 가상 스크롤링 (npm install react-window 필요)
import { FixedSizeList as List } from 'react-window';

function ReactWindowExample({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="border-b p-2">
      {items[index].name}
    </div>
  );

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">성능 최적화 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>React DevTools Profiler를 사용하여 느린 컴포넌트를 식별하세요</li>
            <li>React.memo는 props가 자주 변경되지 않는 컴포넌트에 사용하세요</li>
            <li>useCallback은 콜백 함수이면서 자식 컴포넌트의 props로 사용될 때만 적용하세요</li>
            <li>useMemo는 계산 비용이 큰 연산이나 자식 컴포넌트에 전달되는 객체 생성에 사용하세요</li>
            <li>코드 분할은 사용 빈도가 낮거나 큰 기능에 적용하세요</li>
            <li>가상 스크롤링은 대량의 목록 데이터(100개 이상)에 적용하세요</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700 mb-3">React 애플리케이션의 성능을 최적화하는 다양한 기법들이 있습니다. 컴포넌트 리렌더링, 메모이제이션, 코드 분할, 가상 스크롤링 등을 적절히 활용하면 사용자 경험을 크게 향상시킬 수 있습니다.</p>
          <p className="text-gray-700">성능 문제는 항상 실제 사용자 환경에서 테스트하고, 필요에 따라 위의 기법들을 적용하여 최적의 성능을 유지하세요.</p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceOptimization;