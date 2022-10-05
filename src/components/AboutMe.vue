<template>
  <div ref="root" class="fullpage-slider">
    <button
      class="slider__button slider__button--left"
      @click="changeSlideRef('prev')"
    >
      <i class="fa-solid fa-chevron-left slider__button__icon"></i>
    </button>
    <div class="slides">
      <div class="slide active" data-index="0">jdbg</div>
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
import { ref, onMounted } from "vue";

export default {
  name: "AboutMe",
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
};
</script>

<style lang="scss" scoped></style>
