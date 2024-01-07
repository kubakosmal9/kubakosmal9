<template>
<div id="infoPage" class="wrapper ">
    <div id="left" class="left">
        <personal-info></personal-info>
    </div>
    <div id="midlle" class="middle">
        <main-description></main-description>
    </div>
    <div id="right" class="right">
        <cv></cv>
    </div>
</div>

</template>

<script>
import cv from './cv.vue';
import anime from 'animejs';
import personalInfo from './personalInfo.vue'
import mainDescription from './mainDescription.vue'

export default {
    components: {
        personalInfo,
        mainDescription,
        cv,
    },
    mounted() {
        setTimeout(() => {
        anime({
            targets: '#left, #midlle, #right',
            translateY: [150, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutSine',
        });
        }, 1500);
    } 

}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    font-family: 'Rubik';
    background-image: linear-gradient(to top, var(--backgroundColor), var(--backgroundLighter));
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
    #left, #midlle, #right{
        transform: translateY(150px);
        background-image: none;
    }
}
</style>