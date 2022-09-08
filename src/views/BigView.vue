<template>
    <FullPage>
        <template v-slot:header>
            <HeaderBar
            >
                <template v-slot:logo>
                    <router-link class="logo-link" to="/"><div class="logo-placeholder">
                        JD
                    </div></router-link>
                </template>

                <button class="landing-link">About me</button>
                <button class="landing-link">Resume</button>
                <button class="landing-link">Contact</button>
            </HeaderBar>
            
        </template>
        <section class="fullpage">
            <Home>

            </Home>
        </section>
        <section class="fullpage">
            <hr>
            <AboutMe>

            </AboutMe>
        </section>
        <section class="fullpage">
            <hr>
            <Resume></Resume>
        </section>
        <section class="fullpage">
            <hr>
            4
        </section>
        
    </FullPage>

</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Home from '/src/components/Home.vue';
import AboutMe from '/src/components/AboutMe.vue';
import Resume from '/src/components/Resume.vue';
import { ref } from 'vue';
import FullPage from '../components/FullPage.vue';

export default {
    name: "BigView",
    setup() {
        return {
        };
    },
    components: { FullPage, HeaderBar, Home, AboutMe, Resume }
}
</script>

<style lang="scss" scoped> 
html { overflow: hidden;}

.fullpage__wrapper {
    background: white;

}
        
.fullpage {
    height: 100vh;
    width: 100%;
}

.section-menu {
    position: fixed;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
}

.section-menu .menu-point {
    width: 10px;
    height: 10px;
    background-color: #fff;
    display: block;
    margin: 1rem 0;
    opacity: 6;
    transition: .4s ease all;
}

.section-menu .menu-point.active {
    opacity: 1;
    transform: scale(1.5);
}
</style>