<script>
import HeaderBar from "../components/HeaderBar.vue";
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  setup() {
    return {};
  },
  components: { HeaderBar },
};
</script>

<template>
  <div class="homepage__wrapper">
    <section class="homepage container">
      <h1 class="homepage__title">Julien Dhaisne</h1>
      <p class="homepage__subtitle">Full-Stack Developer</p>
    </section>
    <div class="homepage__down_arrow">
      Scroll down to discover more about me.
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </div>
</template>

<style lang="scss">
.homepage {
  width: 100%;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  &__title {
    font-size: 4rem;
    letter-spacing: 2px;
    font-family: "minipax";
  }
  &__subtitle {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
  &__down_arrow {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.svg {
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.image-side {
  transform: scaleX(-1);
  z-index: 0;
}
</style>
