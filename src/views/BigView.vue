<template>
  <HeaderBar :nbBtn="3">
    <template #logo>
      <button class="logo-placeholder" @click="scrollToSection(0, true)">
        JD
      </button>
    </template>
    <template #headerBar-btn>
      <button class="headerbar__btn" @click="scrollToSection(1, true)">
        About me
      </button>
      <button class="headerbar__btn" @click="scrollToSection(2, true)">
        Resume
      </button>
      <button class="headerbar__btn" @click="scrollToSection(3, true)">
        Contact
      </button>
    </template>
    <!-- <template #btn-1></template>
    <template #btn-2></template>
    <template #btn-3></template> -->
  </HeaderBar>
  <section class="fullpage fullpage--centred">
    <Home> </Home>
  </section>
  <section class="fullpage">
    <hr />
    <AboutMeSlideShow> </AboutMeSlideShow>
  </section>
  <section class="fullpage">
    <hr />
    <Resume></Resume>
  </section>
  <section class="fullpage">
    <hr />
    4
  </section>
  <!-- <div class="section-menu">
    <span
      class="menu-point"
      v-bind:class="{ active: activeSection == index }"
      @click="scrollToSection(index)"
      v-for="(offset, index) in offsets"
      v-bind:key="index"
    >
    </span>
  </div> -->
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
import Resume from "/src/components/Resume.vue";
import { useScroll } from "/src/composables/useFullScroll.js";
import { ref } from "vue";
import FullPage from "../components/FullPage.vue";
import AboutMeSlideShow from "../components/AboutMeSlideShow.vue";

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
  components: { FullPage, HeaderBar, Home, Resume, AboutMeSlideShow },
};
</script>

<style lang="scss" scoped></style>
