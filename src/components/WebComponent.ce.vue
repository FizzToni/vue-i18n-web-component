<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="test_wrapper">
    <h1> Vue + i18n Web-Component </h1>
    <span> <p> {{ t('help') }} <br> {{ t('host.json_files') }} </p>
    </span>

    <h2> {{ t('how_to.title') }} </h2>
    <span>
      <p> <b>1.</b> {{ t('how_to.first1') }} <b>WebComponent.ce.vue</b></p>
      <p> {{ t('how_to.first2') }} <b> i18n-wrapper.ce.vue </b></p>
    </span>
    <span>
      <p style="white-space: pre-wrap"> <b>2.</b> {{ t('how_to.second1') }} </p>
      <p> {{ t('how_to.second2') }} </p>
    </span>
    <span>
      <p> <b>3.</b> {{ t('how_to.third') }} </p>
      <p class="code">npm run build</p>
    </span>
    <span>
      <p style="white-space: pre-wrap"> <b>4.</b> {{ t('how_to.fourth') }} </p>
    </span>
    <span>
      <p> <b>5.</b> {{ t('how_to.fifth1') }} </p>
      <p class="code"> &ltscript&gt src="path/to/i18n-wrapper.js" &ltscript&gt </p>
      <p> {{ t('how_to.fifth2') }} </p>
      <p class="code">
        &lti18n-wrapper&gt <br>
        &ltweb-component&gt&lt/web-component&gt <br>
        &lt/i18n-wrapper&gt
      </p>
    </span>
  </div>
</template>

<style>
.test_wrapper {
  border: 2px dotted black;
  border-radius: 10px;
  width: 40vw;
  min-width: 300px;
  margin: auto;
}
span {
  display: block;
  margin-bottom: 2em;
  border: 1px dashed lightgray;
}
.code {
  font-family: monospace;
  width: fit-content;
  margin: 1em auto;
  font-size: larger;
  border-radius: 5px;
  background-color: rgba(54, 128, 88, 0.3);
  padding: 0.5em;
}
</style>