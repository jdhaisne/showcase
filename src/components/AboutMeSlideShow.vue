<template>
  <div ref="root" class="fullpage-slider">
    <button
      class="slider__button slider__button--left"
      @click="changeSlideRef('prev')"
    >
      <i class="fa-solid fa-chevron-left slider__button__icon"></i>
    </button>
    <div class="slides">
      <div class="slide active about_me__slide" data-index="0">
        <AboutMe bgColor="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pretium porta lacus vel pellentesque. Praesent magna sem, lobortis
          vitae consectetur in, cursus at nulla. Vestibulum a massa tincidunt,
          ornare nulla a, placerat nisl. Phasellus sagittis, lorem porttitor
          maximus ornare, neque leo cursus tellus, non commodo diam nibh ut
          tortor. Vestibulum gravida feugiat tortor
        </AboutMe>
      </div>
      <div class="bgred slide next" data-index="1">slide 2</div>
      <div class="bggreen slide" data-index="2">slide 3</div>
      <div class="bgblue slide prev" data-index="3">slide 4</div>
    </div>

    <button
      class="slider__button slider__button--right"
      @click="changeSlideRef('next')"
    >
      <i class="fa-solid fa-chevron-right slider__button__icon"></i>
    </button>
  </div>
</template>

<script>
import { useSlider } from "/src/composables/useFullSlider.js";
import AboutMe from "./AboutMe.vue";
import { ref, onMounted } from "vue";

export default {
  name: "AboutMeSlideShow",
  setup() {
    const root = ref(null);
    const changeSlideRef = ref(null);
    onMounted(() => {
      console.log(root);
      const { slider, start, changeSlide } = useSlider(root.value);
      changeSlideRef.value = changeSlide;
      console.log(slider);
      start();
    });
    return { root, changeSlideRef };
  },
  components: { AboutMe },
};
</script>

<style lang="scss" scoped>
.about_me__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
