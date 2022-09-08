<template>
  <HeaderBar :nbBtn="3">
    <template #logo>
      <div class="logo-placeholder">JD</div>
    </template>
    <template #btn-1>About me</template>
    <template #btn-2>Resume</template>
    <template #btn-3>Contact</template>
  </HeaderBar>

  <section class="fullpage">
    <Home> </Home>
  </section>
  <section class="fullpage">
    <hr />
    <AboutMe> </AboutMe>
  </section>
  <section class="fullpage">
    <hr />
    <Resume></Resume>
  </section>
  <section class="fullpage">
    <hr />
    4
  </section>
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
  <!-- <div @click="onclickbtn">bg</div> -->
</template>

<script>
// export default {
//   name: "bigview",
//   setup() {
//     const onclickbtn = () => console.log("ab");
//     return { onclickbtn };
//   },
// };
import HeaderBar from "../components/HeaderBar.vue";
import Home from "/src/components/Home.vue";
import AboutMe from "/src/components/AboutMe.vue";
import Resume from "/src/components/Resume.vue";
import { useScrollHandler } from "/src/composables/useFullpage.js";
import { ref } from "vue";
import FullPage from "../components/FullPage.vue";

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
    };
  },
  mounted() {
    this.mountHandler();
  },
  unmounted() {
    this.unmountHandler();
  },
  components: { FullPage, HeaderBar, Home, AboutMe, Resume },
};
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

.fullpage__wrapper {
  background: white;
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
  background-color: #fff;
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
