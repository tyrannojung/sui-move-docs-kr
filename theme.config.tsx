import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useTheme } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: () => {
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === 'system' ? resolvedTheme : theme;

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
    defaultMenuCollapseLevel: 2,
    autoCollapse: false,
  },
  darkMode: true,
};

export default config;
