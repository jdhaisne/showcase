<template>
    <div class="fullpage__wrapper">
        <section class="fullpage">
            <home>

            </home>
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
    </div>
    <div class="section-menu">
        <span
        class="menu-point"
        v-bind:class="{active: activeSection == index}"
        @click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        v-bind:key="index">
        </span>
    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Home from '/src/components/Home.vue';
import AboutMe from '/src/components/AboutMe.vue';
import Resume from '/src/components/Resume.vue';
import { ref } from 'vue';

export default {
    name: 'BigView',
    setup () {
        let inMove = false;
        let activeSection = 0;
        let offsets = [];
        let stouchStartY = 0;

        

        function calculateSectionOffsets() {
            console.log('calculate')
            let sections = document.getElementsByTagName('section');
            let length = sections.length;

            for (let i=0;i < length;i++) {
                let sectionOffset = sections[i].offsetTop;
                offsets.push(sectionOffset)
            }
        };

        function scrollToSection(id, force=false) {
            if (inMove && !force) return false

            activeSection = id;
            inMove = false;

            document.getElementsByTagName('section')[id].scrollIntoView({
                behavior: 'smooth'
            });

            setTimeout(() => { inMove = false; }, 400);
        };

        function handleWheel(e) {
            console.log('handleWheel', inMove)
            if(e.deltaY > 0 && !inMove) {
                moveUp();
            }
            else if(e.deltaY < 0 && !inMove) {
                moveDown();
            }

            e.preventDefault();
            return false;
        }

        function moveDown() {
            console.log('down')
            inMove = true;
            activeSection--;

            if(activeSection < 0)
                activeSection = offsets.length - 1;
            
             scrollToSection(activeSection, true);
        }

        function moveUp() {
            console.log('up')
            inMove = true;
            activeSection++;

            if (activeSection > offsets.length - 1)
                activeSection = 0;

            scrollToSection(activeSection, true);
        }

        function created () {
            calculateSectionOffsets();
            window.addEventListener('wheel', handleWheel, {passive: false});
            window.addEventListener('scroll', (e) => { console.log(e)})
        }

        function destroyed() {
            window.removeEventListener('wheel', handleWheel, {passive: false});
        }


        return {
            created,
            destroyed,
            scrollToSection,
            activeSection,
            offsets,
            component: {HeaderBar, Home, AboutMe, Resume},
            
        }
    },
    mounted() {
        this.created();
    },
    unmounted() {
        this.destroyed();
    }
}
</script>

<style lang="scss" scoped> 
body {
    overflow: hidden; 

}

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