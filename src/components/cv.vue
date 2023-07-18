<template>
    <div class="wrapper">
        <div class="panel">
            <p class="counter">3</p>
            <p class="subtitle">years of experience</p>
        </div>
        <div class="panel">
            <p class="counter">100+</p>
            <p class="subtitle">Happy Clients</p>
        </div>
        <div class="panel cv-count">
            <p class="counter">225</p>
            <p class="subtitle">Downloads of CV</p>
        </div>
        <div class="panel button">
            <cv-download></cv-download>
        </div>
    </div>
</template>
<script>
import cvDownload from './cvDownload.vue'
export default{
    components: {
        cvDownload,
    }

}
</script>

<style lang="scss" scoped>
.wrapper{
    background-color: var(--backgroundColor);
    min-width: 100%;
    height: 50vh;
    display: flex;
    gap: 2rem;
    justify-content: center;
    .button{
        
    }
    .panel{
        background-color: var(--green1);
        width: 20rem;
        height: 8rem;
        color: var(--light);
        display: flex;
        margin-top: 1rem;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Rubik';
        border-radius: 1rem;
        .counter{
            font-size: 3rem;
            margin: 0;
        }
        .subtitle{
            font-size: 1.5rem;
            margin: 0;
        }
    }
}
</style>