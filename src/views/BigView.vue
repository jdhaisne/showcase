<template>
  <HeaderBar :nbBtn="3">
    <template #logo>
      <button class="logo-placeholder" @click="scrollToSection(0, true)">
        JD
      </button>
    </template>
    <template #headerBar-btn>
      <button @click="scrollToSection(1, true)">About me</button>
      <button @click="scrollToSection(2, true)">Resume</button>
      <button @click="scrollToSection(3, true)">Contact</button>
    </template>
    <!-- <template #btn-1></template>
    <template #btn-2></template>
    <template #btn-3></template> -->
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
import { useScroll } from "/src/composables/useFullpage.js";
import { ref } from "vue";
import FullPage from "../components/FullPage.vue";

export default {
  name: "BigView",
  setup() {
    const {
      mountHandler,
      unmountHandler,
      offsets,
      activeSection,
      scrollToSection,
    } = useScroll();

    return {
      mountHandler,
      unmountHandler,
      offsets,
      activeSection,
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
