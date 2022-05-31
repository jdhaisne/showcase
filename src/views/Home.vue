<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
    name: "Home",
    components: { HeaderBar }
};
</script>

<template>
  <section class="container presentation-section">
    <svg class="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle fill="#E67870" cx="0" cy="75" r="7.5"/>
      <circle fill="#E67870" cx="30" cy="25" r="15"/>
      <circle fill="#E67870" cx="95" cy="60" r="25"/>
    </svg>
    <div class="info-wrapper">
      <h1 class="title">Julien Dhaisne</h1>
      <p class="subtitle">Full-Stack Developer</p>
    </div>
    <img class="image-side" src="/src/assets/images/plant.png" alt="">
  </section>
</template>

<style lang="scss">


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
  font-family: 'minipax';
}

.subtitle {
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.info-wrapper {
  width: max-content;
}
</style>