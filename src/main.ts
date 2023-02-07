import { createApp, defineCustomElement } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import I18nHost from './components/i18nWrapper.ce.vue'
import HelloI18n from './components/WebComponent.ce.vue'

const I18nHostElement = defineCustomElement(I18nHost)
const HelloI18nElement = defineCustomElement(HelloI18n)
customElements.define('i18n-wrapper', I18nHostElement)
customElements.define('web-component', HelloI18nElement)

const i18n = createI18n<false>({
  legacy: false,
  locale: 'en',
  messages: {}
})

createApp(App).use(i18n).mount('#app')
