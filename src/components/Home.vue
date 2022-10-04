<script>
import HeaderBar from "../components/HeaderBar.vue";
import { useSlider } from "/src/composables/useSlider.js";
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  setup() {
    const root = ref(null);
    const changeSlideRef = ref(null);

    onMounted(() => {
      const { slider, start, changeSlide } = useSlider(root.value);
      changeSlideRef.value = changeSlide;
      start();
    });
    return { root, changeSlideRef };
  },
  components: { HeaderBar },
};
</script>

<template>
  <div ref="root" class="fullpage-slider">
    <button class="slider__button-left" @click="changeSlideRef('prev')">
      &lt;
    </button>
    <div class="slides">
      <div class="slide active" data-index="0">
        <section class="container presentation-section">
          <div class="info-wrapper">
            <h1 class="title">Julien Dhaisne</h1>
            <p class="subtitle">Full-Stack Developer</p>
          </div>
        </section>
      </div>
      <div class="slide next" data-index="1">slide 2</div>
      <div class="slide" data-index="2">slide 3</div>
      <div class="slide prev" data-index="3">slide 4</div>
    </div>

    <button class="slider__button-right" @click="changeSlideRef('next')">
      >
    </button>
  </div>
</template>

<style lang="scss">
$main-font: "Muli", sans-serif;
$offset: 2rem;
$dark-color: #030303;
$main-width: 80%;
$side-width: 100% - $main-width;
$nav-size: 130px;
$title-size: 9vmax;
$easing: cubic-bezier(0.694, 0, 0.335, 1);

%abs {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.fullpage-slider {
  position: relative;
  height: 100vh;
  display: flex;
}

.slider {
}
.slides {
  position: relative;
  flex: 1 1 100%;
  display: flex;
  align-items: flex-end;
  padding: $offset;
  width: 100%;
  overflow: hidden;
}

.slide {
  @extend %abs;
  overflow: hidden;
  will-change: transform;

  // .slide-image {
  //   will-change: transform;
  // }

  &.prev {
    z-index: 5;
    transform: translate3d(-100%, 0, 0);
    transition: 1s $easing;

    // .slide-image {
    //     transition: transform 0s 1s;
    // }
  }

  &.active {
    z-index: 10;
    transform: translate3d(0, 0, 0);
    transition: transform 1s $easing;
    // .slide-image {
    //     transform: scale(1.01);
    //     transition: transform 1s $easing;
    // }
  }
  &.next {
    z-index: 5;
    transform: translate3d(100%, 0, 0);
    transition: 1s $easing;
  }

  &:not(.prev):not(.active):not(.next) {
    z-index: -1;
    display: none;
    transform: translate3d(100%, 0, 0);
  }
}

// .slide {
//   width: 100%;
//   height: 100%;
//   flex-shrink: 0;
//   display: none;
// }
// .active {
//   width: 100%;
//   height: 100%;
//   display: block;
// }

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

.presentation-section {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image-side {
  transform: scaleX(-1);
  z-index: 0;
}

.title {
  font-size: 4rem;
  letter-spacing: 2px;
  font-family: "minipax";
}

.subtitle {
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
}

.info-wrapper {
  width: max-content;
}
</style>
