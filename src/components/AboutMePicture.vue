<template>
  <div
    class="about_me__picture"
    :class="{ 'about_me__picture--round': isRounded }"
  >
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about_me__picture {
  & img {
    border-radius: 4px;
  }
  &--round img {
    border-radius: 50%;
  }
}
</style>
