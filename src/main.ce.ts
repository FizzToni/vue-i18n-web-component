import { defineCustomElement } from "vue";
import I18nWrapperCE from "./components/i18nWrapper.ce.vue";
import WebComponentCE from './components/WebComponent.ce.vue';

const I18nWrapper = defineCustomElement(I18nWrapperCE)
const WebComponent = defineCustomElement(WebComponentCE)

customElements.define('i18n-wrapper', I18nWrapper)
customElements.define('web-component', WebComponent)
