<template>
    <div class="cont">
        <div class="title">
            Witaj
        </div>
        <div class="text">
            Witaj na mojej stronie internetowej! Jestem [Twoje imię], a ta strona to moja wizytówka wirtualnego świata. 
            Jestem początkującym 22-letnim informatykiem z doświadczeniem w dziale network engineeringu u operatora telekomunikacyjnego. 
            Moją pasją jest tworzenie stron internetowych. Zapraszam Cię do zapoznania się z moim CV oraz historią zawodową. 
            Chętnie podzielę się moimi umiejętnościami i projektami, które dotychczas zrealizowałem. Jeśli masz jakiekolwiek pytania lub zainteresowanie współpracą, zachęcam do kontaktu. 
            Będzie mi niezmiernie miło, jeśli ocenisz moją stronę i podzielisz się swoją opinią. Dziękuję za odwiedzenie mojej strony i życzę miłego przeglądania!
        </div>
    </div>
</template>

<script>
export default{
    name: 'main-description'

}
</script>

<style>
.cont{
    display: flex;
    font-family:'Open Sans' ;
    flex-direction: column;
    position: absolute;
    right: 0;
    width: 50%;
    height: 50%;
    top: 50%;
    transform: translateY(-50%);
}
.title{

}
</style>