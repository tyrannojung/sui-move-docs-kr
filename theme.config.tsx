import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Sui Move 한국어 문서</span>,
  project: {
    link: 'https://github.com/yourusername/sui-move-docs-kr',
  },
  docsRepositoryBase: 'https://github.com/yourusername/sui-move-docs-kr',
  footer: {
    text: 'Sui Move 한국어 문서',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Sui Move 한국어 문서'
    }
  },
  darkMode: true,
  primaryHue: 203, // 대략 #4DA2FF 에 해당하는 hue 값
  primarySaturation: 100,
}

export default config