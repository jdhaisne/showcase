<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
    name: "Home",
    components: { HeaderBar }
};
</script>

<template>
  <section class="container presentation-section">
    <div class="info-wrapper">
      <h1 class="title">Julien Dhaisne</h1>
      <p class="subtitle">Full-Stack Developer</p>
    </div>
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