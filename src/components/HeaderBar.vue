<script>
export default {
  name: 'HeaderBar',
};
</script>

<template>
<div class="landing-link--wrapper">
    <router-link class="logo-link" to="/"><div class="logo-placeholder">
      JD
    </div></router-link>
    <router-link class="landing-link" to="/portfolio">About me</router-link>
    <router-link class="landing-link" to="/resume">Resume</router-link>
    <router-link class="landing-link" to="/portfolio">Contact</router-link>
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

.landing-link--wrapper {
  position: absolute;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.logo-link {
    text-decoration: none;
    color: black;
}

.landing-link {
  z-index: 1;
  font-family: montserrat;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 1px;
  text-decoration: none;
  color: black;
  text-align: center;
  position: relative;
   font-family: 'Montserrat', sans-serif;

  &::after {
    transition: transform .3s ease-out;
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