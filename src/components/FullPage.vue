<template>
  <div class="fullpage__wrapper--header">
    <slot name="header"> </slot>
  </div>

  <div class="fullpage__wrapper">
    <slot></slot>
  </div>
  <div class="section-menu">
    <span
      class="menu-point"
      v-bind:class="{ active: activeSection == index }"
      @click="scrollToSection(index)"
      v-for="(offset, index) in offsets"
      v-bind:key="index"
    >
    </span>
  </div>
</template>

<script>
import HeaderBar from "/src/components/HeaderBar.vue";
import Home from "/src/components/Home.vue";
import AboutMe from "/src/components/AboutMe.vue";
import Resume from "/src/components/Resume.vue";
import { useScroll } from "/src/composables/useFullScroll.js";
import { ref } from "vue";

export default {
  name: "BigView",
  setup() {
    const { mountHandler, unmountHandler, offsets, scrollToSection } =
      useScrollHandler();

    return {
      mountHandler,
      unmountHandler,
      offsets,
      scrollToSection,
      component: { HeaderBar, Home, AboutMe, Resume },
    };
  },

  //   mounted() {
  //     this.mountHandler();
  //   },
  //   unmounted() {
  //     this.unmountHandler();
  //   },
};
</script>

<style lang="scss" scoped>
.fullpage__wrapper {
  background: white;
  &--header {
    position: fixed;
    left: 50%;
  }
}

.fullpage {
  height: 100vh;
  width: 100%;
}

.section-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.section-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: black;
  display: block;
  margin: 1rem 0;
  opacity: 6;
  transition: 0.4s ease all;
}

.section-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
</style>
