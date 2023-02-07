import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
    vueI18n()
  ],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'i18n-wrapper',
      // the proper extensions will be added
      fileName: 'i18n-wrapper'
    }
  },
})

