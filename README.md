# Vite + React + Tailwind CSS 스타터

[![Deploy to GitHub Pages](https://github.com/jeonck/react-from-scratch/actions/workflows/deploy.yml/badge.svg)](https://github.com/jeonck/react-from-scratch/actions/workflows/deploy.yml)

Vite + React + Tailwind CSS 조합을 사용한 현대적인 웹 프론트엔드 개발 스타터 템플릿입니다. 이 프로젝트는 처음부터 설정한 개발 환경으로, 빠른 빌드 및 개발 환경, 컴포넌트 기반 아키텍처, 유틸리티 우선 스타일링을 제공합니다.

## 특징

- ⚡ **Vite**: 초고속 번들링과 개발 서버, 핫 모듈 리플레이스먼트(HMR)
- ⚛️ **React 18**: 최신 React 기능과 hooks API
- 🎨 **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- 🧭 **React Router DOM**: 클라이언트 사이드 라우팅
- 📱 **반응형 디자인**: 모든 디바이스에 최적화
- 🚀 **GitHub Pages 배포**: 자동 빌드 및 배포 설정

## 설치 및 시작

### 전제 조건

- [Node.js](https://nodejs.org/) (v14.18+ 또는 v16+) 설치 필요

### 설치

1. 프로젝트 클론:

```bash
git clone https://github.com/jeonck/react-from-scratch.git
cd react-from-scratch
```

2. 의존성 설치:

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

애플리케이션이 `http://localhost:5174`에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 프리뷰 서버 실행

```bash
npm run preview
```

로컬에서 빌드 결과를 프리뷰합니다.

## 기술 스택

- **Vite**: 빠른 번들러와 개발 서버
- **React**: 컴포넌트 기반 UI 라이브러리
- **React Router DOM**: 클라이언트 사이드 라우팅
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **PostCSS**: CSS 변환 도구

## 프로젝트 구조

```
├── public/
├── src/
│   ├── components/     # 재사용 가능한 UI 컴포넌트
│   ├── pages/          # 라우팅 페이지 컴포넌트
│   ├── App.jsx         # 루트 컴포넌트
│   └── main.jsx        # 애플리케이션 진입점
├── .github/workflows/  # GitHub Actions 워크플로
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 기능

- **페이지별 라우팅**: Home, Navigation, Page Composition, Styling & Theming, Form Handling, Performance Optimization 등
- **반응형 내비게이션 바**: 모바일 및 데스크탑에서 최적화된 내비게이션
- **폼 처리 및 유효성 검사**: React Hook Form 및 커스텀 유효성 검사 구현
- **성능 최적화**: React.memo, useCallback, useMemo, 코드 분할 등
- **테마 관리**: 다크 모드 및 사용자 정의 테마
- **에러 처리**: 일반적인 문제에 대한 트러블슈팅 가이드

## 배포

이 프로젝트는 GitHub Actions를 통해 GitHub Pages로 자동 배포되도록 설정되어 있습니다. `main` 브랜치에 푸시하면 자동으로 빌드 및 배포됩니다.

배포된 애플리케이션은 다음 주소에서 확인할 수 있습니다: [https://jeonck.github.io/react-from-scratch/](https://jeonck.github.io/react-from-scratch/)

## 스크립트

- `npm run dev`: 개발 서버 시작
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 로컬 프리뷰 서버
- `npm run lint`: 코드 린팅 (ESLint)

## 기여

기여는 언제나 환영입니다! 이슈 및 풀 리퀘스트를 통해 기여해주세요.

## 라이선스

MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 저자

jeonck

## 감사의 말

- Vite 팀: 빠른 빌드 도구 제공
- React 팀: 컴포넌트 기반 UI 라이브러리
- Tailwind CSS 팀: 유틸리티 우선 CSS 프레임워크