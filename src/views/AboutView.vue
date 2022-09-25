<template>
  <div class="l-container">
    <div class="about">
      <h1>This is an about page</h1>
      <div class="color" :style="this.backgroundColor" :class="this.class"></div>
    </div>
  </div>
  <!-- /.l-container -->
</template>

<script>
// export default {
//   name: 'color',
//   beforeRouteEnter(to, form, next) {
//     console.log('component:beforeRouteEnter ビフォールートエンタ');
//     console.log('---------');
//     next();
//   },
//   beforeRouteUpdate(to, form, next) {
//     console.log('component:beforeRouteUpdate ビフォールートアプデ');
//     next();
//   },
//   beforeRouteLeave(to, form, next) {
//     console.log('component:beforeRouteLeave ビフォールートリーブ');
//     next();
//   }
// };
</script>
