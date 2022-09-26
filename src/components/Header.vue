
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { reactive, ref } from 'vue';
import { computed } from '@vue/reactivity';

const isActive = ref(false);

const test = () => {
  isActive.value = !isActive.value;
};

const testClass = computed(() => ({
  'is-drawerActive': isActive.value,
  'aria-expanded': isActive.value ? 'true' : 'false'
}));

const navList = ref([
  {
    to: '/',
    text: 'home'
  },
  {
    to: '/about',
    text: 'about me'
  }
]);
</script>

<template>
  <header class="l-header p-header">
    <div class="l-container">
      <div class="l-header__wrap">
        <div class="p-header__info">
          <h1 class="p-header__title"><a href="/" class="p-logo">Logo</a></h1>
        </div>

        <nav class="p-header__nav">
          <h2 class="screen-reader-text">サイト内メニュー</h2>

          <button
            class="js-drawer c-button p-hamburger"
            @click="test"
            :class="testClass"
            aria-controls="globalNav"
            type="button"
          >
            <span class="p-hamburger__line">
              <span class="screen-reader-text">メニューを開閉</span>
            </span>
          </button>
          <ul id="globalNav" class="p-globalNav" @click="test" :class="testClass">
            <li v-for="(navItem, index) in navList" :key="index">
              <RouterLink :to="{ path: navItem.to }">{{ navItem.text }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 1s ease all;
  /* transform: translateY(50px); */
  /* color: red; */
}

.fade-enter-from,
.fade-leave-to {
  transition: 1s ease all;
  opacity: 0;
  transform: translateY(50px);
  /* transform: translateY(0); */
  color: green;
}
</style>
