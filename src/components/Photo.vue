<template>
    <div class="photo-wrapper">
        <img class="photo" src="../assets/img/cardImg.jpg" alt="">
        <div class="dot-wrapper">
            <div class="dot">
                <div class="dot-dot"></div>
                <div class="dot-second"></div>
                <div class="border-dot"></div>
            </div>
        </div>
    </div>
</template>
<script>
import anime from 'animejs';
export default{
    name: 'photo',
    methods: {
    animate() {
        var t1 = anime.timeline({});
        t1.add({
            targets: '.dot',
            translateX: '-8px',
        })
        t1.add({
            targets: '.dot',
            top: '50%',
            translateY: '-8px',
            duration: 2000,
            easing: 'easeInOutElastic',
        });
        t1.add({
            targets: '.border-dot',
            opacity: [0, 1],
            duration: 100,
        }, '-=400')
        t1.add({
            targets: '.border-dot',
            height: '22rem',
            width: '22rem',
            opacity: [1, 0.7, 0],
            duration: 1000,
            easing: 'easeInOutQuad',
        }, '-=700')
        t1.add({
            targets: '.dot-dot',
            height: '26rem',
            width: '26rem',
            opacity: [1, 0.7, 0],
            duration: 900,
            easing: 'easeInOutQuad',
        }, '-=700')

        t1.add({
            targets: '.dot-second',
            height: '24rem',
            width: '24rem',
            opacity: [
            { value: 1, duration: 10 },   // Opacity 1 in 1ms
            { value: 0.7, duration: 600 }, // Stay at opacity 1 for 700ms
            { value: 0, duration: 200 }, // Stay at opacity 1 for 700ms
            ],
            duration: 800,
            easing: 'easeInOutQuad',
        }, '-=700')
        t1.add({
            targets: '.photo',
            height: '20rem',
            width: '20rem',
            opacity: 1,
            scale: [0, 1],
            duration: 400,
            easing: 'easeInOutQuad',
        }, '-=700')
      
      

    },
  },
  mounted() {
        this.animate();
    },
}
</script>
<style lang="scss" scoped>
.photo-wrapper{
    width: 20rem;
    height: 30rem;
    align-items: flex-start;
    display: flex;
    position: relative;
    bottom: 0;
    opacity: 0.8;
    align-items: center;
    justify-content: center;

    // overflow: hidden;
    .dot-wrapper{
        position: absolute;
        display: flex;
        justify-content: center;

        width: 100%;
        height: 100%;
        .dot {
        width: 1rem;
        
        position: absolute;
        top: 100%;
        left: 50%;
        height: 1rem;        
        transform: translateX(-15px);
        .border-dot{
            border: 1px solid var(--green1);
            opacity: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            transform-origin: center;
            border-radius: 50%;
        }
        .dot-dot{
            background-color: var(--light);
            border-radius: 50%; 
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 1rem;
            height: 1rem;
            transform-origin: center;
            position: absolute;
        }
        .dot-second{
            background-color: var(--green3);
            border-radius: 50%; 
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            opacity: 0;
            width: 1rem;
            height: 1rem;
            transform-origin: center;
            position: absolute;
        }
    }
    }
    .photo{
        opacity: 0;
        transform: translateY(-10rem);
        width: 20rem;
        height: 20rem;
        box-sizing: border-box;
        border: 10px solid  var(--green1);
        border-radius: 50%;
        box-shadow: 10px 10px 10px rgba($color: #000000, $alpha: 0.2);

    }
}
</style>