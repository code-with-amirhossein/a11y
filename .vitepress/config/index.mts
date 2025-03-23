import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { fa } from './fa.mts'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'فارسی', ...fa }
  }
})