<script lang="ts">
import { defineComponent, provide, watchEffect } from 'vue'
import { createI18n, I18nInjectionKey } from 'vue-i18n'

const i18n = createI18n<false>({
  legacy: false, // must set to `false`
  locale: 'en',
  messages: {
    en: {
      "help": "This should help you quickly build a custom vue-web-component that supports vue-i18n.",
      "host": {
        "json_files": "Right now, i only managed to host the locale messages in the wrapper, but i am planning to migrate everything to json files in the src/locale folder that you see"
      },
      "how_to": {
        "fifth1": "Now simply link it in the header like so:",
        "fifth2": "and use your new custom html-tags:",
        "first1": "Simply edit or create your own files like",
        "first2": "Afterwards edit your translations in",
        "fourth": "Finally, export the files from the newly created dist-Folder and import them where ever you may need them.",
        "second1": "Look at the main.ce.ts file and edit the config accordingly, to define all elements you created.",
        "second2": "Every component has to be defined as a custom element.",
        "third": "Build your component with: ",
        "title": "How to use:"
      }
    },
    de: {
      "help": "Dieses Template soll helfen, schnell eine benutzerdefinierte vue-web-Komponente zu erstellen, die vue-i18n unterstützt.",
      "host": {
        "json_files": "Derzeit konnte ich die \"locale-messages\" nur im Wrapper hosten, aber ich plane, alles in Json-Dateien in den \"src/locale\"-Ordner zu migrieren."
      },
      "how_to": {
        "fifth1": "Nun die Datein im header wie folgt verknüpfen:",
        "fifth2": "und die neuen benutzerdefinierten html-Tags verwenden:",
        "first1": "Bearbeiten oder erstelle einfach eigenen Dateien wie",
        "first2": "Bearbeite anschließend hier Ihre Übersetzungen",
        "fourth": "Schließlich exportiere die Dateien aus dem neu erstellten dist-Ordner und importieren sie, wo immer Sie sie benötigen.",
        "second1": "Sieh dir die Datei main.ce.ts an und bearbeite die Konfiguration entsprechend, um alle erstellten Elemente zu definieren.",
        "second2": "Jede Komponente muss als benutzerdefiniertes Element definiert werden.",
        "third": "Die Komponente erzeugen: ",
        "title": "Anwendung:"
      }
    },
    at: {
      "help": "Da Titel sog eigentlich eh ois oda? I denk scho. Sche dassd do bist. :)",
      "host": {
        "json_files": "Iagndwonn mecht i de gonzn Üwasetzungen in eigene Datein haun, weil des scho a stickal geila war."
      },
      "how_to": {
        "fifth1": "Iwasche om im header vaknüpfn: ",
        "fifth2": "und nuamea so heanemma... feschtig.",
        "first1": "Du beoawatst de sochn oafoch so, wia do",
        "first2": "Donn haust die Üwastzungen do eini",
        "fourth": "Schiabst ois vom dist-Ordna hint ent umi, wost as braugsch.",
        "second1": "Schau ins main.ce.ts noa checkst scho wos zan doa is.",
        "second2": "genau...",
        "third": "Noa schreibsch des in de Konsoin:",
        "title": "Wia mas heanimmb:"
      }
    }
  }
})

export default defineComponent({
  props: {
    locale: {
      type: String,
      default: 'en'
    }
  },
  setup(props) {
    /**
     * provide i18n instance with `I18nInjectionKey` for other web components
     */
    provide(I18nInjectionKey, i18n)

    watchEffect(() => {
      i18n.global.locale.value = props.locale
    })
    return {}
  }
})
</script>

<template>
  <slot />
</template>
