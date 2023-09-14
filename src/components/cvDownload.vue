<template>
    <a  download @mouseenter="this.animateArrowEnter()" @mouseleave="this.animateArrowLeave()" @click="this.downloadCV()" class="cont">
        <svg height="32" viewBox="0 -960 960 960" width="48" xmlns="http://www.w3.org/2000/svg">
            <path id="ok" opacity="0" d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" class="svg-ok"/>
            <path id="arrow" d="M 287 -506 L 330 -549 L 450 -429 L 450 -800 L 510 -800 L 510 -429 L 630 -549 L 673 -506 L 480 -313 L 287 -506 Z" style=""/>
            <path d="M 220 -160 C 204 -160 190 -166 178 -178 C 166 -190 160 -204 160 -220 L 160 -363 L 220 -363 L 220 -220 L 740 -220 L 740 -363 L 800 -363 L 800 -220 C 800 -204 794 -190 782 -178 C 770 -166 756 -160 740 -160 L 220 -160 Z" style=""/>
        </svg>
     </a>
</template>
<script>
import anime from 'animejs';
import emitter from '../mitt.js'; 
export default{
    data() {
        return{
            block: false,
            aniamtionBLocker: false
        }
    },
    mounted() {
        if(localStorage.getItem("BlockUpdating")) {
            this.block = true
        }
        emitter.on("blockUpdating", () =>{
            this.block = true
            localStorage.setItem("BlockUpdating", true);
        });
    },
    methods: {
        animateArrowEnter(){
            if(this.aniamtionBLocker === false){
                anime({
                    targets: '#arrow',
                    translateY: [
                    { value: '-150px', duration: 500, easing: 'easeInOutElastic' },
                    ],
                });  
            }
        },
        animateArrowLeave(){
            if(this.aniamtionBLocker === false){
                anime({
                    targets: '#arrow',
                    translateY: [
                    { value: '0px', duration: 500, easing: 'easeInOutElastic' },
                    ],
                });
            }
        },
        animateDownloadArrow(){
            this.aniamtionBLocker = true
            const t1 = anime.timeline({})
            t1.add({
                targets: '#arrow',
                translateY: [
                { value: '1000px', duration: 800, easing: 'easeInOutElastic' },
                ],
            });
            t1.add({
                targets: '#ok',
                duration: 1000,
                translateY: [-1000, -150],
                translateX: [0, '10rem'],
                opacity: [0, 1],
                complete: () => {
                    this.animationBlocker = false;
                },
            });                
        },
        downloadCV() {   
            this.$gtag.event('CV');
            this.animateDownloadArrow()
            if(this.block === false) {
                emitter.emit("updateCounter");
            } return

        }
    }
}
</script>
<style lang="scss" scoped>
.cont{
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 2rem;
    background-color: var(--light);
    width: 80%;
    height: 3rem;
    color: var(--green1);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    p{
        margin: 0;
        transition: color 0.1s ease-in-out;
    }
}

.svg-ok{
    transform: translate(10rem);
    scale: 0.8;
}
.cont:hover{
    cursor: pointer;
    background-color: var(--green2);
}
.cont:hover p{
    color: var(--light);
}
</style>