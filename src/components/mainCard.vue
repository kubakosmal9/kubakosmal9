<template>
    <div :style="{ left: this.style + 'px' }" :class="{ animation: leftAnimation}" class="flip-card" @click="flipCard">
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
    export default{
        name: 'main-card',
        data() {
            return {
                isFlipped: true, // Flag to track the flipped state of the card
                leftAnimation: false,
                style: 10,
            };
            },
        props: {
            left: {
            type: Number,
            required: true
            },
            calculatedLeft: {
            type: Number,
            required: false
            }
        },
        methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped; // Toggle the flipped state on each click
        },
        },
        mounted() {
            setTimeout(() => {
                this.style = this.left
                console.log(this.left)
            },20)

            setTimeout(() => {
                this.isFlipped = false
            },1000)
            setTimeout(() => {
                this.style = this.calculatedLeft
                this.leftAnimation = true
            },1900)
        },
        
}

</script>

<style scoped lang="scss">

.flip-card{

    background-color: transparent;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) !important;
    height: 350px;

    width: 680px;
    position: absolute;
    perspective: 1000px;
}
.animation{
    transition: left 2s ease-in-out ;
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
    box-shadow: 0 0 30px rgb(136, 136, 136);

}
.back{
    color: white;
    transform: rotateX(180deg);
    transition: transform 1.8s ease-in-out;
    .site-name{
        z-index: 5;
        position: absolute;
        transform: translatey(80px);
        letter-spacing: 5px;
        font-size: 20px;
        font-family:'Courier New', Courier, monospace;
    }
    .qr-cont{
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 120px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
            height: 120px;
          .QR{
            width: 100px;
            height: 100px;
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
    width: 700px;
    top: 30%;
    transform: rotate(50deg);
    height: 100px;
    opacity: 0.6;
    background-color: rgb(0, 0, 0);
    right: -100px;

}
.image-cont{
    position: absolute;
    opacity: 0.85;
    z-index: 10;
    width: 120px;
    height: 120px;
    right: 40px;
    padding: 9px;
    top: 30px;
    border-radius: 50%;
    background-color: white;
}
.card-image{
    width: 120px;
    overflow: hidden;
    border-radius: 50%;
}
.left-side-cont{
    position: absolute;
    color: white;
    z-index: 5;
    left: 30px;
    height: 100%;
    transform: translateY(45%);
    width: 50%;
    font-size: 30px;
    font-family:'Courier New', Courier, monospace;
    .name-text{
        margin: 0px
    }
    .name-text1{
        font-size: 13px;
        margin: 0px;
        margin-left: 3px;
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
        margin-top: 18px;
        width: 50%;
        color: white;
        font-family:'Courier New', Courier, monospace;
    .text{
        margin-top: 3px;
        margin-bottom: 8px;
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
</style>