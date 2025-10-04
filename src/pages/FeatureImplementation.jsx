import React from 'react';

function FeatureImplementation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">기능 구현</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. 상태 관리 기본: useState</h2>
          <p className="text-gray-700 mb-3">React의 기본 훅인 useState를 사용한 상태 관리 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="할 일을 입력하세요"
        />
        <button 
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          추가
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center p-2 border-b">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. 복잡한 상태 관리: useReducer</h2>
          <p className="text-gray-700 mb-3">복잡한 상태 로직을 관리하기 위한 useReducer 훅 사용법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useReducer } from 'react';

// 리듀서 함수 정의
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

function TodoWithReducer() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <TodoForm onSubmit={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={(id) => dispatch({ type: 'TOGGLE_TODO', payload: id })}
        onDelete={(id) => dispatch({ type: 'DELETE_TODO', payload: id })}
      />
    </div>
  );
}

// 하위 컴포넌트
const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border rounded-l"
        placeholder="할 일을 입력하세요"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
        추가
      </button>
    </form>
  );
};

export default TodoWithReducer;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. API 연동: useEffect와 fetch</h2>
          <p className="text-gray-700 mb-3">useEffect와 fetch API를 사용한 서버 데이터 연동 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다');
        }
        const userData = await response.json();
        setUsers(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // 빈 배열을 넣어 마운트 시 한 번만 실행

  if (loading) return <div className="text-center py-8">로딩 중...</div>;
  if (error) return <div className="text-center py-8 text-red-500">에러: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">사용자 목록</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. 전역 상태 관리: Context API</h2>
          <p className="text-gray-700 mb-3">Context API를 사용한 전역 상태 관리 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// contexts/UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Context 생성
const UserContext = createContext();

// 리듀서 정의
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    case 'UPDATE_PROFILE':
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

// Provider 컴포넌트
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    isAuthenticated: false
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// 사용자 정의 훅
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// 실제 컴포넌트에서 사용
import { useUser } from './contexts/UserContext';

function Profile() {
  const { state, dispatch } = useUser();

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: { id: 1, name: '사용자', email: 'user@example.com' }
    });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  if (!state.isAuthenticated) {
    return (
      <div>
        <p>로그인 해주세요</p>
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
          로그인
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{state.user.name}님 환영합니다!</h2>
      <p>{state.user.email}</p>
      <button 
        onClick={handleLogout} 
        className="mt-2 bg-red-500 text-white p-2 rounded"
      >
        로그아웃
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">상태 관리 및 API 연동 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>useState는 간단한 상태 관리에, useReducer는 복잡한 상태 로직에 적합합니다</li>
            <li>API 호출 시 항상 로딩 상태와 에러 처리를 포함하세요</li>
            <li>Context API는 전역적으로 공유해야 할 상태에 사용하세요</li>
            <li>API 응답은 항상 유효성 검사를 거쳐야 합니다</li>
            <li>불필요한 API 호출을 방지하기 위해 useEffect의 의존성 배열을 적절히 설정하세요</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700 mb-3">상태 관리와 API 연동은 웹 애플리케이션의 핵심 기능입니다. React의 내장 훅들을 적절히 활용하여 효율적인 상태 관리를 구현할 수 있습니다.</p>
          <p className="text-gray-700">useState, useReducer는 로컬 상태 관리에, Context API는 전역 상태 관리에 효과적입니다. API 연동 시에는 비동기 처리와 에러 관리를 반드시 고려해야 합니다.</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureImplementation;