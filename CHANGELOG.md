# Changelog

모든 주요 변경사항은 이 파일에 문서화됩니다.

형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)를 따르며,
이 프로젝트는 [Semantic Versioning](https://semver.org/lang/ko/)을 준수합니다.

## [Unreleased]

## [0.2.1] - 2025-01-18

### Changed

- CSS 파일 구조 개선
  - `src/styles/tailwind.css`를 관심사별로 분리
  - `tokens/`: CSS 변수 정의 (colors, typography, shadows)
  - `theme/`: Tailwind 테마 설정 (colors, typography)
  - `utilities/`: 커스텀 유틸리티 클래스 (typography)
- 색상 토큰 재구성
  - `:root`에 실제 색상 이름으로 CSS 변수 정의 (`--color-orange-*`, `--color-green-*`, `--color-red-*`)
  - `@theme`에서 시멘틱 색상으로 매핑 (`primary` → Orange, `secondary` → Green, `tertiary` → Red)
  - 실제 색상(`bg-orange-500`)과 시멘틱 색상(`bg-primary-500`) 모두 사용 가능
  - CSS 변수(`var(--color-orange-500)`, `var(--color-primary-500)`) 직접 사용 가능
- README 업데이트
  - 색상 사용 방법 명확화 (실제 색상 vs 시멘틱 색상)
  - Tailwind 테마 커스터마이징 가이드 개선
  - CSS 변수 사용 예시 추가

## [0.2.0] - 2025-01-14

### Added

- Modal 컴포넌트 테스트 추가 및 커버리지 개선
  - 기본 렌더링, 닫기 버튼, actionButton 테스트
  - 오버레이 클릭, ESC 키, 크기 옵션 테스트
  - 애니메이션 및 컴파운드 패턴 테스트
  - 컨텍스트 에러 처리 테스트 (Modal compound components를 Modal.Root 밖에서 사용할 때)
  - 커스터마이징 테스트 (className prop, children 커스터마이징)
  - 총 29개의 테스트 케이스 추가
  - Modal 컴포넌트 테스트 커버리지 100% 달성 (이전: 95.83%)
- Button 컴포넌트 테스트 보완
  - `onFocus`, `onBlur`, `onMouseEnter`, `onMouseLeave` 이벤트 핸들러 테스트 추가
  - 테스트 커버리지 개선: 61.03% → 76.88%

### Fixed

- ModalOverlay에서 children이 렌더링되도록 수정
  - ModalOverlay 컴포넌트에서 children을 props에서 destructure
  - div 내부에 children을 명시적으로 렌더링
  - 컴파운드 패턴에서 Modal.Overlay 내부의 Modal.Content 등이 정상 렌더링되도록 수정

### Documentation

- README에 썸네일 이미지 추가

## [0.1.6] - 2025-01-14

### Added

- Modal 컴포넌트에 `actionButton` prop 추가
  - 프라이머리 버튼을 모달 하단에 표시
  - `label`과 `onClick` 속성 지원
  - `WithActionButton` 스토리 추가

### Changed

- 스타일링 시스템을 vanilla-extract에서 Tailwind CSS로 마이그레이션
  - Button 컴포넌트: `Button.css.ts` (vanilla-extract) 제거, Tailwind 클래스 기반 스타일로 변경
  - Modal 컴포넌트: vanilla-extract 스타일 제거, Tailwind 클래스 기반 스타일로 변경
  - 모든 컴포넌트가 Tailwind CSS v4의 `@theme` 문법과 유틸리티 클래스를 사용하도록 변경
  - 타입 안전성과 개발자 경험 유지하면서 더 간단한 스타일링 방식으로 전환

### Removed

- ModalHeader의 `align` prop 제거
  - `ModalHeaderAlign` 타입 제거
  - `headerAlignLeft`, `headerAlignCenter`, `headerAlignRight` 스타일 제거
  - 관련 스토리 제거 (`CompoundWithCenteredHeader`, `CompoundWithRightAlignedHeader`)

### Fixed

- Button 컴포넌트의 `type` prop이 올바르게 전달되도록 수정
  - `type="submit"` 등 명시적 type prop이 정상 작동

## [0.1.5] - 2025-12-30

### Added

- Typography 토큰을 CSS 변수로 노출
  - 각 typography 스타일(h1-h6, subtitle-1/2, body-1/2, caption, overline)의 fontSize, fontWeight, lineHeight, letterSpacing을 CSS 변수로 노출
  - 사용처에서 Tailwind CSS를 통해 `text-caption`, `text-h1` 등의 클래스를 바로 사용 가능
  - CSS 변수를 통해 런타임에 typography 스타일 커스터마이징 가능

## [0.1.4] - 2025-12-30

### Changed

- 아이콘 색상 시스템 개선
  - 모든 아이콘이 `currentColor`를 사용하도록 변경
  - Logo, NeighborhoodVerification 아이콘의 하드코딩된 색상 제거
  - `svgr.config.cjs`에 `#FF6929`, `#FF8754`를 `currentColor`로 자동 변환하도록 추가
  - 사용처에서 `color` prop으로 아이콘 색상 자유롭게 변경 가능

### Added

- CSS 변수 기반 테마 시스템 도입
  - `createGlobalThemeContract`를 사용한 CSS 변수 계약 정의
  - 사용처에서 CSS 변수를 덮어씌워서 색상 커스터마이징 가능
  - 런타임 테마 변경 지원
  - `themeContract` export로 타입 안전한 CSS 변수 참조
- Storybook GitHub Pages 배포 워크플로우 추가
  - `main` 브랜치 push 시 자동으로 Storybook 빌드 및 배포
  - GitHub Pages를 통한 Storybook 공개
- 테스트 워크플로우 추가
  - PR 및 push 시 자동 테스트 실행
  - 린터 체크, 유닛 테스트, Storybook 테스트, 빌드 검증 포함
- PR 템플릿 추가
  - 표준화된 Pull Request 작성 가이드 제공
- 테마 오버라이드 가이드 문서 추가 (`THEME_OVERRIDE.md`)
  - CSS 변수를 통한 색상 커스터마이징 방법 문서화
  - 사용 예시 및 런타임 테마 변경 가이드

### Changed

- Button 컴포넌트가 CSS 변수 사용
  - `semanticColors` 직접 참조에서 `themeContract` (CSS 변수) 사용으로 변경
  - 사용처에서 CSS 변수만 덮어씌우면 전체 테마 변경 가능
- 테마 구조 단순화
  - `semantic-colors.ts` 파일 제거
  - `theme.css.ts`에서 `colors` 직접 사용

### Fixed

- Storybook에서 버튼이 표시되지 않는 문제 해결
  - `.storybook/preview.ts` 추가하여 테마 CSS 로드

## [0.1.3] - 2025-12-30

### Added

- 시멘틱 컬러 토큰 시스템 도입
  - 팔레트 컬러를 시멘틱 컬러로 래핑 (`semanticColors`)
  - Primary: Orange (O) - `semanticColors.primary[50-900]`
  - Secondary: Green (Gre) - `semanticColors.secondary[50-900]`
  - Tertiary: Red (R) - `semanticColors.tertiary[50-900]`
  - Gray: `semanticColors.gray[50-900]`
  - 팔레트 컬러와 동일한 구조(50-900) 유지
- 자동 배포 워크플로우 추가
  - `main` 브랜치 머지 시 자동으로 린트, 테스트, 빌드, 배포 실행
  - GitHub Packages 자동 배포
  - Git 태그 및 GitHub Release 자동 생성

### Changed

- Button 컴포넌트가 시멘틱 컬러 토큰 사용
  - 팔레트 컬러 직접 사용에서 시멘틱 컬러로 변경
  - `colors.G[50]` → `semanticColors.gray[50]`
  - `colors.O[500]` → `semanticColors.primary[500]`

## [0.1.2] - 2025-12-30

### Added

- Biome 린터 및 포맷터 도입
  - ESLint와 Prettier를 Biome으로 대체하여 통합된 도구 사용
  - `biome.json` 설정 파일 추가
  - 코드 포맷팅 및 린트 스크립트 추가 (`lint`, `lint:fix`, `format`, `format:check`, `check`, `check:fix`)

### Changed

- 코드 포맷팅 스타일 통일
  - Biome 포맷터를 사용하여 전체 프로젝트 코드 포맷팅 적용
  - import 순서 자동 정리
  - 일관된 코드 스타일 유지

### Fixed

- Storybook 설정 파일의 사용하지 않는 파라미터 제거
- 테스트 파일의 사용하지 않는 변수 제거

### Configuration

- Biome 설정 파일 (`biome.json`) 추가
  - 포맷터 설정: 2칸 들여쓰기, 80자 줄 너비, 세미콜론 사용
  - 린터 설정: 권장 규칙 활성화
  - 생성된 아이콘 파일 제외 설정

## [0.1.1] - 2024-XX-XX

### Added

- Button 컴포넌트 구현
- Icon 컴포넌트 시스템 구현
- 디자인 토큰 시스템 (colors, typography, shadows)
- Storybook 설정
- Vitest 테스트 설정

[Unreleased]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.6...v0.2.0
[0.1.6]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Team-NumberOne/daepiro-design-system/releases/tag/v0.1.1
