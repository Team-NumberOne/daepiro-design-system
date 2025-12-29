# Changelog

모든 주요 변경사항은 이 파일에 문서화됩니다.

형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)를 따르며,
이 프로젝트는 [Semantic Versioning](https://semver.org/lang/ko/)을 준수합니다.

## [Unreleased]

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

[Unreleased]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/Team-NumberOne/daepiro-design-system/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Team-NumberOne/daepiro-design-system/releases/tag/v0.1.1
