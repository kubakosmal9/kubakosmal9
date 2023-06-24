<template>
<div :style="{ opacity: animationEnd ? '1' : '0' }" class="cont">
    <div class="icon-cont">
        <a id="icon" href="https://pl-pl.facebook.com/people/Jakub-Kosmal/pfbid0mkDxyYwy9iZqjsmeJrC62DCivX7FcgzwZrGnHFxk72RpWRRXnQrjKSxemv35Aw2gl/"> 
        <div class="icon">
            <img class="svg" src="../assets/svg/fb.svg" alt="FB">
        </div>            
        </a>

        <a id="icon" href="https://github.com/kubakosmal9"> 
        <div class="icon">
            <img class="svg" src="../assets/svg/github.svg" alt="FB">
        </div>            
        </a>        
        <a id="icon" href="tel:728558742"> 
        <div class="icon">
            <img style="width: 28px;" class="svg" src="../assets/svg/phone.svg" alt="FB">
        </div>            
        </a>
    </div>
</div>


</template>

<script>
export default{
    data() {
        return {
            animationEnd: false,
            icons: null,
            containerWidth: 0,
        }
    },
    methods: {
        animation() {
            console.log("cipa")
            const icons = document.getElementsByClassName('icon');
            for (let i = 0; i < icons.length; i++) {
                setTimeout(() => {
                    icons[i].style.transform = 'translateY(78px)';
                    setTimeout(() => {
                        icons[i].style.transform = 'translateY(70px)';
                    },400)
                }, i * 400);
            }
        }
        },
    mounted() {
        setTimeout(() => {
            this.containerWidth = document.querySelector('.home-cont').clientWidth;
            this.animationEnd = true
            if (this.containerWidth > 400) {
            this.animation()
            }
            },4900)
    }
}
</script>

<style scoped lang="scss"> 

.animate{
    top: 10px !important;
}
.cont{
    display: flex;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    transition: opacity 1s ease-in;
    top: -60px;
    .icon-cont{
        display: flex;
        height: 120px;
        gap: 20px;
    }
    .icon:hover{
        box-shadow: 0 0 20px rgb(136, 136, 136);
        transition: box-shadow 2s ease-in-out;
    }
    .icon{
        width: 35px;
        box-shadow: 0 0 10px rgb(136, 136, 136);
        display: flex;
        align-items: center;
        transition: transform 0.4s ease-in-out;
        justify-content: center;
        border-radius: 50%;
        height: 35px;
        background-color: var(--cardColor);
        background-image: url('../assets/img/cardboardTexture.jpg');
        background-blend-mode: multiply;

    }
}
@media screen and (max-width: 480px) {
    .cont{
        display: flex;
        flex-direction: row;
        z-index: 10;
        transition: opacity 1s ease-in;
        position: absolute;
        top: 55%;
        left: 50%;
        display: flex;
        transform: translateX(-50%);
        .icon-cont{
            height: 30px;
        }

    }
}

</style>