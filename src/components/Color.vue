<template>
  <div class="color" :style="this.backgroundColor" :class="this.class"></div>
</template>

<script>
export default {
  name: 'color',
  data() {
    return {
      backgroundColor: '',
      isOpen: true,
      class: '_open'
    };
  },
  created: function () {
    this.backgroundColor = this.getBackGroundColor();
  },
  watch: {
    isOpen: function () {
      this.isOpen ? this.open() : this.close();
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.isOpen = false;
      next();
    });
    this.$router.afterEach((to, from, next) => {
      setTimeout(() => {
        this.isOpen = true;
      }, 800);
    });
  },
  methods: {
    getBackGroundColor: function () {},
    close: function () {
      this.class = '_close';
    },
    open: function () {
      this.backgroundColor = this.getBackGroundColor();
      this.class = '_open';
    }
  }
};
</script>

<style>
.color {
  color: red;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-color: rgb(158, 187, 218);
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.color._open {
  opacity: 0;
  z-index: -1;
}
.color._close {
  opacity: 1;
  z-index: 10000;
}
</style>
