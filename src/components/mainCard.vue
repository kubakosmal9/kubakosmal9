<template>
    <div :style="`${this.direction}${this.style}px`" :class="{ animation: animation}" class="flip-card" @click="flipCard">
        <div class="flip-card-inner" :class="{ flipped: isFlipped }">
            <div class="front">
                <div class="image-cont">
                    <img src="../assets/img/cardImg.jpg" class="card-image" alt="Zdjęcie profilowe">
                </div>
                <div class="left-side-cont">
                    <div class="name-cont">
                        <p class="name-text">Jakub Kosmal</p>
                        <p class="name-text1">Network Engienier</p>
                    </div>
                </div>
                <div class="bottom-cont">
                    <div class="bottom-side-cont left">
                        <p class="text">510 447 849</p>
                        <p class="text">kubakosmal2@gmail.com</p>

                    </div>
                    <div class="bottom-side-cont right">
                        <p class="text">Praga Południe</p>
                        <p class="text">04-294 Warszawa</p>
                    </div>
                </div>
                <div class="card-cont-line"></div>
                <div class="card-cont"></div> 
            </div>
            <div class="back">
                <div class="qr-cont">
                    <img class="QR" src="../assets/img/QR.png">
                     <p class="site-name">JakubKosmal.pl</p>
                </div>
                <div class="card-cont-line"></div>
                <div class="card-cont"></div> 

            </div>
        </div>
    </div>


</template>

<script>
import { toHandlers } from 'vue';

    export default{
        name: 'main-card',
        data() {
            return {
                isFlipped: true, // Flag to track the flipped state of the card
                animation: false,
                style: 10,
                direction: "left:"
            };
            },
        methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped; // Toggle the flipped state on each click
        },
        cardAnimation() {
            var containerWidth = document.querySelector('.home-cont').clientWidth;
            var containerHeight = document.querySelector('.home-cont').clientHeight;
            var left = containerWidth / 2
            var calculatedLeft = left *0.6

            var containerHeight = document.querySelector('.home-cont').clientHeight;
            var top = containerHeight/2
            if (containerWidth <= 400) {
                this.direction = "top:"
                this.style = top
                setTimeout(() => {
                    this.animation = true
                    this.style = "100"
                },1900)
            } else {
                setTimeout(() => {
                    this.style = left
                },100)
                setTimeout(() => {
                    this.style = calculatedLeft
                    this.animation = true
                },1900)
            }
            setTimeout(() => {
                this.isFlipped = false
            },1000)

        }
        },
        mounted() {
            this.cardAnimation()
        },
        
}

</script>

<style scoped lang="scss">
.flip-card{
    font-size: 10px;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) !important;
    height: 350px;
    width: 680px;
    position: absolute;
    perspective: 1000px;
}
.animation{
    transition: all 2s ease-in-out ;
}
.flip-card-inner{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.8s ease-in-out;
    transform-style: preserve-3d;
}
.flip-card-inner.flipped {
  transform: rotateX(180deg);
}
.front, .back{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    align-items: center;        
    position: absolute;
    text-align: left;
    box-shadow: 0 0 3em rgb(136, 136, 136);

}
.back{
    color: white;
    transform: rotateX(180deg);
    transition: transform 1.8s ease-in-out;
    .site-name{
        z-index: 5;
        position: absolute;
        font-size: 1.5em;
        transform: translatey(80px);
        letter-spacing: 0.5em;
        font-family:'Courier New', Courier, monospace;
    }
    .qr-cont{
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 12em;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 1em;
            height: 12em;
          .QR{
            width: 10em;
            height: 10em;
        }  
    }

}
.card-cont{
    background-color: var(--cardColor);
    height: 100%;
    width: 100%;
    background-image: url('../assets/img/cardboardTexture.jpg');
    background-blend-mode: multiply;
    padding: 10px;
    opacity: 0.7;
}
.card-cont-line{
    position: absolute;
    width: 70em;
    top: 30%;
    transform: rotate(50deg);
    height: 10em;
    opacity: 0.6;
    background-color: rgb(0, 0, 0);
    right: -10em;

}
.image-cont{
    position: absolute;
    opacity: 0.85;
    z-index: 10;
    width: 12em;
    height: 12em;
    right: 4em;
    padding: 0.9em;
    top: 3em;
    border-radius: 50%;
    background-color: white;
}
.card-image{
    width: 12em;
    overflow: hidden;
    border-radius: 50%;
}
.left-side-cont{
    position: absolute;
    color: white;
    z-index: 5;
    left: 1em;
    height: 100%;
    transform: translateY(45%);
    width: 50%;
    font-size: 3em;
    font-family:'Courier New', Courier, monospace;
    .name-text{
        margin: 0px
    }
    .name-text1{
        font-size: 0.5em;
        margin: 0px;
        margin-left: 0.2em;
    }
}
.bottom-cont{
    width: 93%;
    position: absolute;
    height: 38%;
    bottom: 0;
    z-index: 5;
    display: flex;
    border-top: 2px dotted var(--blackColor);
    .bottom-side-cont{
        height: 70%;
        margin-top: 1.8em;
        width: 50%;
        color: white;
        font-family:'Courier New', Courier, monospace;
    .text{
        margin-top: 3px;
        margin-bottom: 8px;
        font-size: 1.5em;
    }
    }
    .right{
        border-left: 2px dotted var(--blackColor);
    }
    .right p {
        margin-left: 20px;
    }
    .left p{
        margin-left: 10px;
    }
}

@media screen and (max-width: 480px) {

    .flip-card{
        font-size: 5px;
        width: 380px;
        height: 190px;
        left: 50%;
    }
    
}
</style>