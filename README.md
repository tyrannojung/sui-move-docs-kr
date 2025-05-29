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

### 번역 규칙

- 경어체 사용 ("~세요" 체)
- 고유명사는 원문 그대로 (예: Sui, Move)
- 기술용어는 음역 표기 (예: 스마트 컨트랙트)
- 일관된 용어 사용을 위해 glossary.md 참조

### 기여 방법

1. Issue 등록
   - 번역하고자 하는 섹션의 Issue를 먼저 등록해주세요
   - Issue 제목 형식: `[번역] 섹션명 - 파일명`

2. Pull Request
   - 2명 이상의 리뷰어 승인 필요
   - PR 템플릿에 따라 작성

### Issue 양식

```
📋 섹션
- (문서상 섹션명)
- (파일명)

📅 마감일
- (년도.월.일)

💬 추가 내용
```

## 기술 스택

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Nextra](https://nextra.site/) - 문서 사이트 프레임워크
- [pnpm](https://pnpm.io/) - 패키지 매니저

## 라이선스

원본 문서의 라이선스를 따릅니다.