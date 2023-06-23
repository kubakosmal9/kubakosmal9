<template>
    <div :style="{ opacity: animationEnd ? '1' : '0' }" class="cont">
        <div class="text">
             <span class="title">Witaj</span> na mojej stronie internetowej! Jestem Jakub, początkujący 22-letni informatyk z doświadczeniem w dziale network engineeringu. Moją pasją jest tworzenie stron internetowych. Zapoznaj się z moim CV i historią zawodową. Chętnie podzielę się projektami, które zrealizowałem. Skontaktuj się ze mną, jeśli masz pytania lub zainteresowanie współpracą. Dziękuję za odwiedzenie strony!
        </div>
        <learn-more-button></learn-more-button> 
    </div>
</template>

<script>
  import learnMoreButton from '../components/learmMoreButton.vue';
export default{
    name: 'main-description',
    data() {
        return {
            animationEnd: false,
        }
    },
    components: {
        learnMoreButton
    },

    mounted() {
        setTimeout(() => {
            this.animationEnd = true
            },3900)
    }
}
</script>
<style scoped>
.cont{
    display: flex;
    font-family:'Open Sans' ;
    flex-direction: column;
    position: absolute;
    right: 15%;
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    transition: opacity 1s ease-in;
    justify-content: center;
    width: 34%;
    height: 50%;
    text-align: left;
    top: 50%;
    transform: translateY(-50%);
}
.title{
    font-size: 42px;
    margin-bottom: 10px;
    font-weight: 800;
}
.text{
    font-size: 24px;
    margin-top: 0;
    line-height: 30px;
}
</style>