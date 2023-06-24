<template>
    <div :style="{ opacity: animationEnd ? '1' : '0' }" class="cont">
        <div class="text">
            <div class="text-wrapp">
                <p class="writed-text"><span class="title">Witaj</span>  {{ typedText }} </p>

            </div>
        </div>
        <!-- <learn-more-button></learn-more-button>  -->
    </div>
</template>

<script>
  import learnMoreButton from '../components/learmMoreButton.vue';
export default{
    name: 'main-description',
    data() {
        return {
            animationEnd: false,
            text: "mojej stronie internetowej! Jestem Jakub, początkujący 22-letni informatyk z doświadczeniem w dziale network engineeringu. Moją pasją jest tworzenie stron internetowych. Zapoznaj się z moim CV i historią zawodową. Chętnie podzielę się projektami, które zrealizowałem. Skontaktuj się ze mną, jeśli masz pytania lub zainteresowanie współpracą. Dziękuję za odwiedzenie strony!",
            typedText: ""
        }
    },
    components: {
        learnMoreButton
    },
    methods: {
        typeWriter() {
      let i = 0;
      const speed = 20; // Adjust typing speed (milliseconds)

      const type = () => {
        if (i < this.text.length) {
          this.typedText += this.text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };

      type();
    }
        },
    

    mounted() {
        setTimeout(() => {
            this.animationEnd = true
            this.typeWriter();
            },3900)
    }
}
</script>
<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.writed-text {
  overflow: hidden;
    min-height: 158px;
  animation: typing 2s steps(40, end);
}
.cont{
    display: flex;
    font-family:'Open Sans' ;
    flex-direction: column;
    position: absolute;
    right: 0px;
    transform: translateX(100%) ;
    display: flex;
    transition: opacity 1s ease-in;
    justify-content: center;
    align-items: left;
    font-size: 42px;
    width: 50%;
    height: 50%;
    text-align: left;
    top: 50%;
    transform: translateY(-50%);
}
.title{
    font-size: 2em;
    margin-bottom: 10px;
    font-weight: 800;
}
.text{
    font-size: 0.5em;
    margin-top: 0;
    height: 100%;
    min-height: 159;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    line-height: 1.4em;
}

@media screen and (max-width: 400px) {

.cont{
    width: 100%;
    height: 50%;
    position: absolute;
    top: 300px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
}

    
}
</style>