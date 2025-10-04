import React from 'react';

function FormHandling() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">폼 처리 및 유효성 검사</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. 기본 폼 처리</h2>
          <p className="text-gray-700 mb-3">React의 기본 기능을 사용한 폼 처리 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';

function BasicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // 실시간 유효성 검사
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력해주세요.';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (formData.message.length < 10) {
      newErrors.message = '메시지는 최소 10자 이상이어야 합니다.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // 폼 제출 로직
      console.log('폼 제출:', formData);
      alert('폼이 성공적으로 제출되었습니다!');
      setFormData({ name: '', email: '', message: '' }); // 폼 초기화
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          이름 *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="이름을 입력하세요"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          이메일 *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="이메일을 입력하세요"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          메시지 *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="메시지를 입력하세요"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        제출
      </button>
    </form>
  );
}

export default BasicForm;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. React Hook Form 사용</h2>
          <p className="text-gray-700 mb-3">React Hook Form 라이브러리를 사용한 폼 처리 및 유효성 검사 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { useForm } from 'react-hook-form';

function HookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('폼 데이터:', data);
    alert('폼이 성공적으로 제출되었습니다!');
    reset(); // 폼 초기화
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          이름 *
        </label>
        <input
          id="name"
          {...register('name', {
            required: '이름을 입력해주세요.',
            minLength: {
              value: 2,
              message: '이름은 최소 2자 이상이어야 합니다.'
            }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="이름을 입력하세요"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          이메일 *
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: '유효한 이메일 주소를 입력해주세요.'
            }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="이메일을 입력하세요"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
          나이
        </label>
        <input
          id="age"
          type="number"
          {...register('age', {
            min: {
              value: 18,
              message: '나이는 18세 이상이어야 합니다.'
            },
            max: {
              value: 100,
              message: '나이는 100세 이하여야 합니다.'
            }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="나이를 입력하세요"
        />
        {errors.age && (
          <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            {...register('agreed', { required: '약관에 동의해주세요.' })}
            className="mr-2"
          />
          <span className="text-gray-700">이용 약관에 동의합니다.</span>
        </label>
        {errors.agreed && (
          <p className="text-red-500 text-xs mt-1">{errors.agreed.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        제출
      </button>
    </form>
  );
}

export default HookFormExample;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. 커스텀 유효성 검사 훅</h2>
          <p className="text-gray-700 mb-3">재사용 가능한 유효성 검사 로직을 커스텀 훅으로 구현하는 방법입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`// hooks/useValidation.js
import { useState } from 'react';

export const useValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // 실시간 유효성 검사
    if (errors[name]) {
      const newErrors = validate({ ...values, [name]: type === 'checkbox' ? checked : value });
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const newErrors = validate({ ...values, [name]: values[name] });
    setErrors(prev => ({
      ...prev,
      [name]: newErrors[name]
    }));
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);
    setIsSubmitting(true);

    if (Object.keys(newErrors).length === 0) {
      callback(values);
    }
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  };
};

// 사용 예시
import React from 'react';
import { useValidation } from './hooks/useValidation';

const validateForm = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = '이름을 입력해주세요.';
  }

  if (!values.email.trim()) {
    errors.email = '이메일을 입력해주세요.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '유효한 이메일 주소를 입력해주세요.';
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (values.password.length < 6) {
    errors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
  }

  return errors;
};

function RegisterForm() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useValidation(initialState, validateForm);

  const submitForm = (formData) => {
    console.log('회원가입 데이터:', formData);
    alert('회원가입이 성공적으로 완료되었습니다!');
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          이름 *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="이름을 입력하세요"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          이메일 *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="이메일을 입력하세요"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          비밀번호 *
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="비밀번호를 입력하세요"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
          비밀번호 확인 *
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="비밀번호를 다시 입력하세요"
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        회원가입
      </button>
    </form>
  );
}

export default RegisterForm;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. 동적 폼 필드</h2>
          <p className="text-gray-700 mb-3">필요에 따라 동적으로 폼 필드를 추가/제거할 수 있는 기능입니다.</p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';

function DynamicForm() {
  const [formData, setFormData] = useState([
    { id: 1, name: '', email: '', role: 'user' }
  ]);

  const addField = () => {
    const newField = {
      id: Date.now(),
      name: '',
      email: '',
      role: 'user'
    };
    setFormData([...formData, newField]);
  };

  const removeField = (id) => {
    if (formData.length > 1) {
      setFormData(formData.filter(field => field.id !== id));
    }
  };

  const updateField = (id, field, value) => {
    setFormData(formData.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const validateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formData.every(field => 
      field.name.trim() && field.email.trim() && validateEmail(field.email)
    );

    if (isValid) {
      console.log('폼 데이터:', formData);
      alert('폼이 성공적으로 제출되었습니다!');
    } else {
      alert('모든 필드를 올바르게 입력해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-lg font-medium">사용자 정보</h3>
        <button
          type="button"
          onClick={addField}
          className="bg-green-500 text-white px-3 py-1 rounded-md text-sm"
        >
          + 사용자 추가
        </button>
      </div>

      {formData.map((field, index) => (
        <div key={field.id} className="mb-6 p-4 border rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">사용자 {index + 1}</h4>
            <button
              type="button"
              onClick={() => removeField(field.id)}
              className="text-red-500 hover:text-red-700"
            >
              삭제
            </button>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              이름 *
            </label>
            <input
              type="text"
              value={field.name}
              onChange={(e) => updateField(field.id, 'name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              이메일 *
            </label>
            <input
              type="email"
              value={field.email}
              onChange={(e) => updateField(field.id, 'email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              역할
            </label>
            <select
              value={field.role}
              onChange={(e) => updateField(field.id, 'role', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="user">일반 사용자</option>
              <option value="admin">관리자</option>
              <option value="editor">편집자</option>
            </select>
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        제출
      </button>
    </form>
  );
}

export default DynamicForm;`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">폼 처리 및 유효성 검사 팁</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>사용자 경험을 위해 실시간 유효성 검사를 구현하세요</li>
            <li>React Hook Form과 같은 라이브러리를 사용하면 복잡한 폼 처리가 간편해집니다</li>
            <li>보안을 위해 클라이언트 측 검증 뿐 아니라 서버 측 검증도 반드시 구현하세요</li>
            <li>접근성을 고려하여 레이블과 에러 메시지를 적절히 제공하세요</li>
            <li>성능을 위해 많은 필드가 있는 폼의 경우, 불필요한 리렌더링을 방지하세요</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">요약</h2>
          <p className="text-gray-700 mb-3">폼 처리와 유효성 검사는 사용자 입력을 수집하고 검증하는 핵심 기능입니다. React에서는 다양한 방법으로 폼을 처리할 수 있으며, 사용자 경험을 고려한 적절한 검증 전략이 필요합니다.</p>
          <p className="text-gray-700">기본 React 기능, React Hook Form 라이브러리, 커스텀 훅 등을 적절히 활용하여 다양한 형식의 폼을 효과적으로 구현할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default FormHandling;