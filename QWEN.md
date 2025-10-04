# Vite + React + Tailwind 프로젝트

## 프로젝트 개요
**본 프로젝트는 Vite + React + Tailwind 조합을 사용하여 구축한 현대적인 웹 프론트엔드 프로젝트입니다.** Create React App이나 기타 전통적인 스캐폴딩 도구 대신, Vite의 빠른 빌드 및 개발 환경, React의 컴포넌트 기반 아키텍처, Tailwind CSS의 유틸리티 우선 스타일링을 사용하여 최신 웹 개발 워크플로우를 구현합니다.

## 빌드 및 실행
Vite + React + Tailwind 스택을 기반으로 하므로 다음과 같은 명령어들이 사용됩니다:

### 초기 설정
- `npm create vite@latest` - Vite를 사용하여 프로젝트 생성 (React 템플릿 선택)
- `npm install` - 필요한 모든 의존성 설치
- `npm install -D tailwindcss postcss autoprefixer` - Tailwind CSS 설치
- `npx tailwindcss init -p` - Tailwind CSS 초기화 및 PostCSS 구성

### 일반적인 스크립트
- `npm run dev` - Vite 개발 서버 시작 (핫 모듈 리플레이스먼트 지원, 포트 5173 사용)
- `npm run build` - 프로덕션용 정적 파일 빌드
- `npm run preview` - 로컬에서 빌드 결과 미리 보기
- `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` - Tailwind CSS 파일 실시간 빌드

### 예상되는 프로젝트 구조
- `src/main.jsx` - React 애플리케이션의 주요 진입점
- `src/App.jsx` - 루트 React 컴포넌트
- `public/index.html` - HTML 템플릿 파일
- `vite.config.js` - Vite 구성 파일
- `tailwind.config.js` - Tailwind CSS 구성
- `postcss.config.js` - PostCSS 구성
- `package.json` - 프로젝트 의존성 및 스크립트

## 개발 규칙
1. **컴포넌트 구조**: 훅을 사용하는 함수형 컴포넌트 사용
2. **스타일링**: Tailwind CSS 유틸리티 클래스 사용
3. **파일 명명**: React 컴포넌트에는 파스칼 케이스, 유틸리티에는 캐멀 케이스 사용
4. **빌드 프로세스**: Vite의 빠른 개발 서버 및 빌드 기능 활용

## 주요 기술
- **Vite** (빌드 도구 및 개발 서버) - 빠른 번들링과 HMR 제공
- **React** (v18.x) - 컴포넌트 기반 UI 라이브러리
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **PostCSS** - CSS 변환 도구
- **npm** (패키지 관리)

## 향후 개선 사항
- React Router를 사용한 라우팅 구현
- 상태 관리 솔루션 추가 (Context API, Redux Toolkit 등)
- 테스트 프레임워크 통합 (Vitest + React Testing Library)
- UI 컴포넌트 라이브러리 확장
- 접근성 및 반응형 디자인 최적화
- 배포 파이프라인 구성 (Vercel, Netlify 등)

## 프로젝트 목표
- Vite + React + Tailwind 스택의 장점을 이해하고 활용
- 빠른 개발 주기와 빌드 시간 구현
- 컴포넌트 중심의 UI 아키텍처 구축
- 유틸리티 우선 CSS 방식의 스타일링 익히기
- 현대 웹 개발 워크플로우 경험