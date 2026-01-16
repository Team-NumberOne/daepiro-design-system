# 대피로 디자인 시스템 (Daepiro Design System)

![Thumbnail](./Thumbnail.png)

React 기반 디자인 시스템 컴포넌트 라이브러리입니다. Tailwind CSS v4를 사용하여 스타일링됩니다.

## 📦 설치

```bash
npm install @team-numberone/daepiro-design-system
# 또는
pnpm add @team-numberone/daepiro-design-system
# 또는
yarn add @team-numberone/daepiro-design-system
```

### GitHub Packages 사용 시

`.npmrc` 파일에 다음을 추가하세요:

```
@team-numberone:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

## 🚀 빠른 시작

```tsx
import { Button, Modal, Icons } from "@team-numberone/daepiro-design-system";
import "@team-numberone/daepiro-design-system/dist/index.css";

function App() {
  return (
    <div>
      <Button variant="primary">버튼</Button>
      <Icons.Close />
    </div>
  );
}
```

## 📚 컴포넌트

### Button

다양한 variant와 크기를 지원하는 버튼 컴포넌트입니다.

```tsx
import { Button } from "@team-numberone/daepiro-design-system";

<Button variant="primary">Primary 버튼</Button>
<Button variant="default">Default 버튼</Button>
<Button variant="gray">Gray 버튼</Button>
<Button disabled>비활성화</Button>
<Button full>전체 너비</Button>
```

**Props:**

- `variant`: `"primary" | "default" | "gray"` (기본값: `"default"`)
- `disabled`: `boolean` (기본값: `false`)
- `full`: `boolean` (기본값: `false`)
- `leftIcon`: `ReactNode`
- `rightIcon`: `ReactNode`
- `type`: `"button" | "submit" | "reset"` (기본값: `"button"`)

### Modal

모달 다이얼로그 컴포넌트입니다. 기본 사용법과 컴파운드 패턴을 지원합니다.

```tsx
import { Modal } from "@team-numberone/daepiro-design-system";

// 기본 사용법
<Modal
  open={isOpen}
  onOpenChange={setIsOpen}
  actionButton={{
    label: "확인",
    onClick: () => console.log("확인 클릭"),
  }}
>
  <h2>모달 제목</h2>
  <p>모달 내용</p>
</Modal>

// 컴파운드 패턴
<Modal.Root open={isOpen} onOpenChange={setIsOpen}>
  <Modal.Overlay>
    <Modal.Content>
      <Modal.Header>제목</Modal.Header>
      <Modal.CloseButton />
      <div>내용</div>
    </Modal.Content>
  </Modal.Overlay>
</Modal.Root>
```

**Props:**

- `open`: `boolean` - 모달 열림/닫힘 상태
- `onOpenChange`: `(isOpen: boolean) => void` - 상태 변경 핸들러
- `size`: `"small" | "medium" | "large"` (기본값: `"medium"`)
- `closeOnOverlayClick`: `boolean` (기본값: `true`)
- `closeOnEscape`: `boolean` (기본값: `true`)
- `showCloseButton`: `boolean` (기본값: `true`)
- `actionButton`: `{ label: string; onClick?: () => void }` - 하단 액션 버튼

### Icon

아이콘 컴포넌트입니다. 정적 컴포넌트와 동적 컴포넌트를 모두 지원합니다.

```tsx
import { Icon, Icons } from "@team-numberone/daepiro-design-system";

// 정적 컴포넌트
<Icons.Close />
<Icons.ArrowDown size="lg" />
<Icons.Plus decorative={false} aria-label="추가" />

// 동적 컴포넌트
<Icon name="Close" size="md" />
<Icon name="ArrowDown" size={24} />
```

**사이즈:**

- `xs`: 12px
- `sm`: 16px
- `md`: 24px (기본값)
- `lg`: 32px
- `xl`: 48px
- 또는 숫자로 직접 지정

**Props:**

- `size`: `"xs" | "sm" | "md" | "lg" | "xl" | number` (기본값: `"md"`)
- `color`: `string` - 아이콘 색상
- `decorative`: `boolean` (기본값: `true`) - 장식용 아이콘 여부
- `aria-label`: `string` - `decorative={false}`일 때 필요

## 🎨 디자인 토큰

### Colors

```tsx
import { colors } from "@team-numberone/daepiro-design-system";

colors.O[500]; // Orange 500
colors.Gre[300]; // Green 300
colors.G[900]; // Gray 900
```

### Typography

```tsx
import { typography } from "@team-numberone/daepiro-design-system";

typography.h1; // h1 스타일
typography["body-1"]; // body-1 스타일
typography.caption; // caption 스타일
```

### Shadows

```tsx
import { shadows } from "@team-numberone/daepiro-design-system";

shadows.small;
shadows.medium;
shadows.large;
```

### Tailwind CSS 테마 커스터마이징

이 디자인 시스템은 Tailwind CSS v4를 사용하며, `@theme` 문법을 통해 테마를 커스터마이징할 수 있습니다.

```css
/* 사용처에서 Tailwind 테마 오버라이드 */
@import "tailwindcss";

@theme {
  /* 색상 커스터마이징 */
  --color-primary-500: #ff0000;
  --color-gray-900: #1a1a1a;
  
  /* 타이포그래피 커스터마이징 */
  --font-family-sans: "Your Font", sans-serif;
}
```

또는 Tailwind 유틸리티 클래스를 직접 사용할 수 있습니다:

```tsx
<div className="bg-primary-500 text-white p-4 rounded-lg">
  커스텀 스타일
</div>
```

## 🛠️ 개발

### 사전 요구사항

- Node.js 18 이상
- pnpm 10.25.0 이상

### 설치

```bash
pnpm install
```

### 스크립트

```bash
# 개발 서버 실행
pnpm dev

# Storybook 실행
pnpm storybook

# 빌드
pnpm build

# 테스트 실행
pnpm test

# 테스트 커버리지
pnpm test:coverage

# 린트 및 포맷 체크
pnpm check

# 린트 및 포맷 자동 수정
pnpm check:fix

# 아이콘 생성 (SVG → React 컴포넌트)
pnpm icons
```

### 프로젝트 구조

```
src/
├── components/     # React 컴포넌트
├── hooks/          # 커스텀 훅
├── icons/          # 아이콘 컴포넌트
├── styles/         # Tailwind CSS 스타일 (tailwind.css)
├── tokens/         # 디자인 토큰 (colors, typography, shadows)
├── utils/          # 유틸리티 함수 (cn 등)
└── core/           # 핵심 유틸리티
```

## 📖 Storybook

컴포넌트 문서와 예제는 Storybook에서 확인할 수 있습니다.

```bash
pnpm storybook
```

## 🧪 테스트

프로젝트는 Vitest를 사용하여 테스트를 작성합니다.

```bash
# 테스트 실행
pnpm test

# 테스트 감시 모드
pnpm test:watch

# 테스트 UI
pnpm test:ui

# 커버리지 리포트
pnpm test:coverage
```

## 📝 기여하기

1. 이슈를 생성하거나 기존 이슈를 확인하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'feat: Add amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

### 커밋 컨벤션

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/)를 따릅니다.

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (포맷팅 등)
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드 설정, 의존성 등

## 📄 라이선스

이 프로젝트는 비공개 프로젝트입니다.

## 🔗 링크

- [GitHub 저장소](https://github.com/Team-NumberOne/daepiro-design-system)
- [Storybook](https://choihooo.github.io/DDS-storybook/)

## 📞 문의

이슈나 질문이 있으시면 GitHub Issues를 통해 문의해주세요.
