# Sui Move 한국어 문서

Sui Move 공식 문서의 한국어 번역 프로젝트입니다.

## 프로젝트 소개

이 프로젝트는 Sui 블록체인의 스마트 컨트랙트 언어인 Move의 공식 문서를 한국어로 번역하여 제공합니다.

## 시작하기

### 개발 환경 설정

1. 저장소 클론
```bash
git clone https://github.com/tyrannojung/sui-move-docs-kr.git
cd sui-move-docs-kr
```

2. 패키지 설치
```bash
pnpm install
```

3. 개발 서버 실행
```bash
pnpm dev
```

4. 브라우저에서 http://localhost:3000 접속

### 빌드

```bash
pnpm build
```

## 기여하기

### 📋 번역 가이드라인

#### 기본 원칙

| 구분 | 권장 규칙 |
|------|----------|
| **문체** | - 독자가 친근하게 느끼는 경어체 사용 ("~세요" 체)<br>- 불필요한 대문자와 영문 혼용 지양 |
| **고유명사** | - Sui, Move, object, module 등은 원문 그대로<br>- 제품·기관·프로토콜 이름도 동일 원칙 적용 |
| **기술용어** | - 첫 등장 시: 음역 + 원문 (예: "스마트 컨트랙트(smart contract)")<br>- 이후: 음역만 사용 가능 |
| **코드·CLI** | - 코드 블록, 터미널 예시는 절대 번역 금지<br>- 주석만 한글화 |
| **마크다운** | - 원문의 제목 레벨과 순서 유지<br>- 표/목록/링크 문법 원형 보존 |

#### 📝 주요 용어집

| 영문 | 한글 번역 | 비고 |
|------|----------|------|
| function | 함수 | |
| variable | 변수 | |
| constant | 상수 | |
| struct | 구조체 | |
| module | 모듈 | 원문 유지 |
| ability | ability | 첫 등장시 "능력" 병기 |
| resource | 리소스 | |
| transaction | 트랜잭션 | |
| entry function | 진입점 함수 | |
| package | 패키지 | |

> 전체 용어집은 `glossary.md` 파일을 참조하세요.

### 🔄 프로세스

누구나 해당 repository에 pull request를 통해 참여하실 수 있습니다.
Sui Move 문서 번역에 도움을 주실 분들은 이 코드저장소를 Fork하셔서 수정하시고 pull request를 보내주세요.

#### Translation Issue

여러 사람이 같은 부분을 동시에 번역하는 상황을 피하기 위해 번역을 시작하기 전, 이슈를 등록하여 assign 한 후 PR을 올리는 방식으로 진행합니다. 해당 이슈는 PR이 merge 된 후, close 합니다.

가독성을 위해 제목 앞에 다음 중 하나의 태그를 작성 해주세요. [번역], [오탈자 수정], [제안], [공지], [기타]

## 기술 스택

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Nextra](https://nextra.site/) - 문서 사이트 프레임워크 (v3.0.13)
- [pnpm](https://pnpm.io/) - 패키지 매니저

## 원본 문서와의 차이점

이 프로젝트는 [MystenLabs/move-book](https://github.com/MystenLabs/move-book)의 한국어 번역입니다.

### 구조적 차이
- **프레임워크**: 원본은 Docusaurus, 번역본은 Nextra 사용
- **디렉토리 구조**: 
  - 원본: `site/` (문서), `packages/` (코드 샘플)
  - 번역본: `pages/` (통합 구조)
- **네비게이션**: 상단 탭으로 The Move Book과 Move Reference 분리

### 추가된 기능
- 한국어 UI 및 네비게이션
- Sui 브랜드 컬러를 활용한 커스텀 테마
- 반응형 탭 네비게이션

## 라이선스

원본 문서의 라이선스를 따릅니다.