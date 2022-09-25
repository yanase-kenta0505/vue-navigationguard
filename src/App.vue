<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import { reactive, ref } from 'vue';
import { computed } from '@vue/reactivity';
import Color from './components/Color.vue';

// let isDrawerActive = ref(false);
</script>

<template>
  <Header />
  <Color />
</template>

<style scoped>
.btn .active {
  color: yellow;
  background-color: #000;
}
</style>
