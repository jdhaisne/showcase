<template>
  <section class="about_me" :style="AboutMeStyle">
    <AboutMePicture
      src="/src/assets/images/head_example.jpg"
      alt="head example"
      isRounded
    >
    </AboutMePicture>
    <p>
      <slot></slot>
    </p>
  </section>
</template>

<script>
import AboutMePicture from "./AboutMePicture.vue";
export default {
  props: {
    bgColor: {
      type: String,
      default: "none",
    },
  },
  setup(props) {
    const AboutMeStyle = {
      "background-color": props.bgColor,
    };
    return { AboutMeStyle };
  },
  components: { AboutMePicture },
};
</script>

<style lang="scss" scoped>
.about_me {
  padding: 15px;

  width: 30%;
  height: 80%;
  border-radius: 10px;
  &__picture {
    border-radius: 4px;
    float: left;
    width: 30%;
    margin: 10px;
    // &--round img {
    //   border-radius: 50%;
    // }
  }
}
</style>
