<template>
  <div class="aboutme">
    <p class="aboutme__text">
      Passionné depuis longtemps d'informatique, j'ai pu lors de mon passage à
      l'école 42 découvrir la diversité du métier de développeur. Cela m'a
      permis de me former à la fois sur les technologies web que de continuer à
      explorer ce métier a travers l'IA l’or de ma formation a l’école
      Microsoft. Étant, au départ, plutôt tournée vers la tech mon passage au
      sein de Matrice, l'école m'a permis d'apprendre à identifier et à répondre
      au besoin de mes clients de la manière optimale. De nature curieuse, j'ai
      l'habitude de me former en rapidement aux nouvelles technologies qui
      pourrait m'être nécessaire. Ayant longtemps pratiqué seule, je cherche
      aujourd'hui à enrichir mon expérience en rejoignant une équipe, n’hésitez
      pas à me contacter !
    </p>
  </div>
</template>

<script>
import AboutMe from "./AboutMe.vue";

export default {
  name: "AboutMeView",

  components: { AboutMe },
};
</script>

<style lang="scss" scoped>
.aboutme {
  &__text {
    text-align: center;
    width: 80%;
    margin: auto;
  }
}
</style>
