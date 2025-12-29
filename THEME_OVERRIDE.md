# 테마 오버라이드 가이드

디자인 시스템의 색상을 사용처에서 덮어씌워서 커스터마이징할 수 있습니다.

## 기본 사용법

디자인 시스템을 import하면 자동으로 CSS 변수가 `:root`에 설정됩니다.

```typescript
import "@team-numberone/daepiro-design-system";
// 또는
import "@team-numberone/daepiro-design-system/dist/index.css";
```

## 색상 덮어씌우기

사용처에서 CSS 변수를 덮어씌워서 색상을 변경할 수 있습니다.

### 예시 1: Primary 색상 변경

```css
:root {
  --color-primary-500: #007bff; /* 파란색으로 변경 */
  --color-primary-600: #0056b3; /* hover 색상도 변경 */
}
```

### 예시 2: 전체 테마 변경

```css
:root {
  /* Primary 색상 전체 변경 */
  --color-primary-50: #e3f2fd;
  --color-primary-100: #bbdefb;
  --color-primary-200: #90caf9;
  --color-primary-300: #64b5f6;
  --color-primary-400: #42a5f5;
  --color-primary-500: #2196f3;
  --color-primary-600: #1e88e5;
  --color-primary-700: #1976d2;
  --color-primary-800: #1565c0;
  --color-primary-900: #0d47a1;

  /* Secondary 색상 변경 */
  --color-secondary-500: #4caf50;
  --color-secondary-600: #43a047;
}
```

### 예시 3: 특정 클래스에만 적용

```css
.theme-blue {
  --color-primary-500: #007bff;
  --color-primary-600: #0056b3;
}

.theme-green {
  --color-primary-500: #28a745;
  --color-primary-600: #218838;
}
```

```html
<div class="theme-blue">
  <Button variant="primary">Primary Button</Button>
</div>
```

## 사용 가능한 CSS 변수

### Primary 색상
- `--color-primary-50` ~ `--color-primary-900`

### Secondary 색상
- `--color-secondary-50` ~ `--color-secondary-900`

### Tertiary 색상
- `--color-tertiary-50` ~ `--color-tertiary-900`

### Gray 색상
- `--color-gray-50`
- `--color-gray-75`
- `--color-gray-100` ~ `--color-gray-900`

## 런타임 테마 변경

JavaScript로 런타임에 테마를 변경할 수 있습니다:

```typescript
// 특정 색상 변경
document.documentElement.style.setProperty('--color-primary-500', '#007bff');

// 전체 테마 변경
const theme = {
  '--color-primary-500': '#007bff',
  '--color-primary-600': '#0056b3',
  // ...
};

Object.entries(theme).forEach(([key, value]) => {
  document.documentElement.style.setProperty(key, value);
});
```

## TypeScript에서 타입 안전하게 사용

`themeContract`를 export하므로 TypeScript에서 타입 안전하게 사용할 수 있습니다:

```typescript
import { themeContract } from "@team-numberone/daepiro-design-system";

// CSS 변수 이름을 타입 안전하게 참조
const primaryColor = themeContract.primary[500]; // "color-primary-500"
```

