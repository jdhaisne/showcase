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
          Passionné depuis longtemps d'informatique, j'ai pu lors de mon passage
          à l'école 42 découvrir la diversité du métier de développeur. Cela m'a
          permis de me former à la fois sur les technologies web que de
          continuer à explorer ce métier a travers l'IA l’or de ma formation a
          l’école Microsoft. Étant, au départ, plutôt tournée vers la tech mon
          passage au sein de Matrice, l'école m'a permis d'apprendre à
          identifier et à répondre au besoin de mes clients de la manière
          optimale. De nature curieuse, j'ai l'habitude de me former en
          rapidement aux nouvelles technologies qui pourrait m'être nécessaire.
          Ayant longtemps pratiqué seule, je cherche aujourd'hui à enrichir mon
          expérience en rejoignant une équipe, n’hésitez pas à me contacter !
        </AboutMe>
        <!-- <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pretium porta lacus vel pellentesque. Praesent magna sem, lobortis
          vitae consectetur in, cursus at nulla. Vestibulum a massa tincidunt,
          ornare nulla a, placerat nisl. Phasellus sagittis, lorem porttitor
          maximus ornare, neque leo cursus tellus, non commodo diam nibh ut
          tortor. Vestibulum gravida feugiat tortor, id vulputate neque semper
          interdum. Proin vitae suscipit felis, at viverra purus. Mauris mollis,
          ex a tempor rutrum, ante ipsum pharetra purus, non aliquam velit velit
          sed libero. Nullam aliquam, erat quis fringilla euismod, nunc neque
          posuere risus, ut pharetra dolor libero et mauris. Etiam et justo eu
          mi porttitor lacinia. Duis malesuada dui a interdum condimentum. Ut
          lectus neque, commodo vitae tincidunt a, condimentum in nisl. Donec ac
          mauris nibh. Nam vehicula volutpat ipsum eget gravida. Nam tellus
          risus, pretium in venenatis quis, ullamcorper non sem. Donec vel
          convallis urna, quis venenatis justo. Quisque molestie lectus turpis,
          in feugiat tellus mollis eu. Morbi id sem non tellus pulvinar gravida
          et vitae lectus. Integer varius imperdiet ligula, non scelerisque nisi
          egestas vitae. Vivamus eget odio at lacus elementum viverra semper nec
          nulla. Nam nisl erat, congue non iaculis vitae, scelerisque sit amet
          diam. Donec suscipit tincidunt massa sit amet tincidunt. Sed consequat
          ultricies nibh vel hendrerit. Mauris at porttitor lacus, vel tincidunt
          mauris. Nunc at lectus nec mauris porttitor cursus. Nunc ullamcorper
          tellus vitae fermentum luctus. Vestibulum tempor sed metus sit amet
          convallis. Vestibulum quis scelerisque sem. Duis a eros a enim blandit
          scelerisque. Donec bibendum vel mauris viverra convallis. Aenean
          commodo mauris ac nibh sollicitudin imperdiet. Pellentesque
          ullamcorper, turpis id vehicula tempor, neque turpis feugiat lorem,
          aliquet commodo enim felis id sapien.
        </p> -->
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
