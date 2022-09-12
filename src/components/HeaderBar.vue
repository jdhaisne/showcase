<script>
export default {
  name: "HeaderBar",
  //   emits: ["scrollTo"],
  props: {
    nbBtn: Number,
  },
  setup(props, context) {
    console.log(props);
    const onclickbtn = () => console.log("ab");

    return { onclickbtn };
  },
};
</script>

<template>
  <div class="headerBar headerBar__wrapper">
    <div class="headerBar__logo">
      <!-- <router-link class="logo-link" to="/"> -->
      <slot name="logo"></slot>
      <!-- </router-link> -->
    </div>
    <div class="headerBar__wrapper headerBar__btn__wrapper">
      <slot name="headerBar-btn"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.logo-placeholder {
  padding: 4px;
  font-size: 18px;
  padding-left: 8px;
  padding-right: 6px;
  letter-spacing: 1px;
  border: 2px solid black;
  font-weight: 700;
  border-radius: 4px;
}

.headerBar {
  position: fixed;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  padding: 1rem;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;
  }
}

.logo-link {
  text-decoration: none;
  color: black;
}

.headerBar__btn {
  z-index: 1;
  font-family: montserrat;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 1px;
  text-decoration: none;
  color: black;
  text-align: center;
  position: relative;
  font-family: "Montserrat", sans-serif;

  &::after {
    transition: transform 0.3s ease-out;
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    height: 2px;
    width: 100%;
    background-color: black;
    transform-origin: left;
    transform: scaleX(0);
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
}
</style>
