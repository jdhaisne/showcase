<template>
    <HeaderBar>
        <slot name="header">
            
        </slot>
    </HeaderBar>
    <div class="fullpage__wrapper">
        <slot></slot>
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
import HeaderBar from '/src/components/HeaderBar.vue';
import Home from '/src/components/Home.vue';
import AboutMe from '/src/components/AboutMe.vue';
import Resume from '/src/components/Resume.vue';
import{ useScrollHandler } from '/src/composables/useFullpage.js'
import { ref } from 'vue';

export default {
    name: 'BigView',
    setup () {

        const {mountHandler, unmountHandler, offsets, scrollToSection} = useScrollHandler();
        // let inMove = false;
        // let activeSection = 0;
        // let offsets = [];
        // let lastScroolTop = 0;
        // let stouchStartY = 0;

        

        // function calculateSectionOffsets() {
        //     console.log('calculate')
        //     let sections = document.getElementsByClassName('fullpage');
        //     console.log(sections)
        //     let length = sections.length;
        //     console.log(length)
        //     for (let i=0;i < length;i++) {
        //         let sectionOffset = sections[i].offsetTop;
        //         offsets.push(sectionOffset)
        //     }
        // };

        // function scrollToSection(id, force=false) {
        //     console.log(id)
        //     if (inMove && !force) return false

        //     activeSection = id;
        //     inMove = true;

        //     document.getElementsByTagName('section')[id].scrollIntoView({
        //         behavior: 'smooth'
        //     });

        //     setTimeout(() => { inMove = false; }, 400);
        // };

        // function handleScroll(e) {
        //     console.log(e)
        // }

        // function handleWheel(e) {
        //     console.log('handleWheel', inMove, e.target, e.target.scrollTop)
        //     if(e.deltaY > 50 && !inMove) {
        //         moveUp();
        //     }
        //     else if(e.deltaY < 50 && !inMove) {
        //         moveDown();
        //     }

        //     e.preventDefault();
        //     return false;
        // }

        // function moveDown() {
        //     console.log('down')
        //     inMove = true;
        //     activeSection--;

        //     if(activeSection < 0)
        //         activeSection = offsets.length - 1;
            
        //      scrollToSection(activeSection, true);
        // }

        // function moveUp() {
        //     console.log('up')
        //     inMove = true;
        //     activeSection++;

        //     if (activeSection > offsets.length - 1)
        //         activeSection = 0;

        //     scrollToSection(activeSection, true);
        // }



        // function created () {
        //     calculateSectionOffsets();
        //     window.addEventListener('wheel', handleWheel, {passive: false});
        //     // window.addEventListener('scroll', handleScroll, {passive: false})
        // }

        // function destroyed() {
        //     window.removeEventListener('wheel', handleWheel, {passive: false});
        //     // window.removeEventListener('scroll', handleScroll, {passive: false});
        // }


        return {
            mountHandler,
            unmountHandler,
            offsets,
            scrollToSection,
            component: {HeaderBar, Home, AboutMe, Resume},
            
        }
    },

    mounted() {
        this.mountHandler();
    },
    unmounted() {
        this.unmountHandler();
    }
}
</script>

<style lang="scss" scoped> 

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
    background-color: black;
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