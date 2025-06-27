import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: () => {
    const router = useRouter();
    const { theme, resolvedTheme } = useTheme();
    const pathname = router.pathname;
    const isReference = pathname.startsWith("/reference");
    const isBook = pathname.startsWith("/book") || pathname === "/";
    const currentTheme = theme === 'system' ? resolvedTheme : theme;

    return (
      <div key={pathname} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div 
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => router.push('/book')}
        >
          <img
            src={currentTheme === 'dark' ? '/sui-logo-dark.png' : '/sui-logo.png'}
            alt='Sui'
            style={{ height: 32, marginRight: 12 }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "var(--nextra-text-1)",
            }}
          >
            Sui Move 한국어 문서
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button
            onClick={() => {
              router.push("/book");
              // Reference 섹션 접기
              setTimeout(() => {
                const referenceButton = document.querySelector('.nextra-sidebar-container button[aria-controls*="reference"]');
                if (referenceButton && referenceButton.getAttribute('aria-expanded') === 'true') {
                  referenceButton.click();
                }
              }, 100);
            }}
            style={{
              padding: '0.375rem 0',
              fontSize: '0.875rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              color: isBook ? 'rgb(37, 99, 235)' : 'rgb(107, 114, 128)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!isBook) {
                e.currentTarget.style.color = 'rgb(37, 99, 235)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isBook) {
                e.currentTarget.style.color = 'rgb(107, 114, 128)';
              }
            }}
          >
            The Move Book
          </button>
          <button
            onClick={() => {
              router.push("/reference");
              // Book 섹션 접기
              setTimeout(() => {
                const bookButton = document.querySelector('.nextra-sidebar-container button[aria-controls*="book"]');
                if (bookButton && bookButton.getAttribute('aria-expanded') === 'true') {
                  bookButton.click();
                }
              }, 100);
            }}
            style={{
              padding: '0.375rem 0',
              fontSize: '0.875rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              color: isReference ? 'rgb(37, 99, 235)' : 'rgb(107, 114, 128)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!isReference) {
                e.currentTarget.style.color = 'rgb(37, 99, 235)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isReference) {
                e.currentTarget.style.color = 'rgb(107, 114, 128)';
              }
            }}
          >
            Move Reference
          </button>
        </div>
      </div>
    );
  },
  logoLink: false,
  project: {
    link: "https://github.com/tyrannojung/sui-move-docs-kr",
  },
  docsRepositoryBase: "https://github.com/tyrannojung/sui-move-docs-kr",
  footer: {
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#1a3a52",
            borderRadius: "8px",
            width: "fit-content",
          }}
        >
          <span style={{ color: "#C0E6FF", fontSize: "0.875rem" }}>
            공식 후원사
          </span>
          <img src='/orakle-logo.webp' alt='Orakle' style={{ height: 28 }} />
        </div>
        <div style={{ fontSize: "0.875rem", color: "#666" }}>
          <p>
            © 2025 Sui Move 한국어 문서 기여자들 | 문서는 CC BY 4.0 라이선스를
            따릅니다
          </p>
          <p>© 2025 Orakle 학회. All rights reserved.</p>
          <p>원본 문서의 저작권은 Mysten Labs에 있습니다.</p>
        </div>
      </div>
    ),
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='Sui Move 한국어 문서' />
      <meta
        property='og:description'
        content='Sui 블록체인의 스마트 컨트랙트 언어인 Move에 대한 한국어 문서'
      />
    </>
  ),
  editLink: {
    content: "이 페이지를 GitHub에서 편집하기",
  },
  feedback: {
    content: "피드백을 주세요",
  },
  navigation: true,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  darkMode: true,
};

export default config;
