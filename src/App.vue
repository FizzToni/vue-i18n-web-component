<template>
  <form>
    <label for="locale-select">select language: </label>
    <select id="locale-select" v-model="locale">
      <option value="en">en</option>
      <option value="de">de</option>
      <option value="at">at</option>
    </select>
  </form>
  <i18n-wrapper .locale="locale">
    <web-component />
  </i18n-wrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const locale = ref<string>('de')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
