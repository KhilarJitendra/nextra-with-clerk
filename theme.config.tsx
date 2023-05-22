import React from 'react'
import { UserButton } from "@clerk/nextjs";


import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Project Documentation</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template', 
  },
  chat: {
    link: 'https://discord.com',
    icon: <UserButton afterSignOutUrl="/" />
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
