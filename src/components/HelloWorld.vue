<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>

    <button v-on:click="isActive = !isActive" type="button">色が変わります</button>
    <p v-bind:class="classColorSet">クラスによる色の変更</p>
  </div>
</template>

<style scoped>
/* ここにこのページのcss書く */
</style>
