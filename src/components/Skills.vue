<template>
    <div class="skills">
        <div class="skills__skill" v-for="skill in skills" :key="skill">
            <p>{{ skill }}</p>

        </div>
    </div>
</template>

<script>
export default {
    name: "Skills",
    props: {
        skills: {
            type: Array,
            required: true
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>