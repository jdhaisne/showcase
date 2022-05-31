<template>
    <div class="timeline--wrapper">
        <div class="timeline--event" v-for="event in events" :key="event">
            <h3> {{event}} </h3>
            <slot :name="`${event}-slot`"></slot>
        </div>
    </div>
    
</template>

<script>
  export default {
    name: 'Timeline',
    props: {
        events: {
          type: Array,
          required: true
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>