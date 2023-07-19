<template>
    <span @click="this.downloadCV()" class="cont">
        <p>Download</p>
    </span>
</template>
<script>
import emitter from '../mitt.js'; 
export default{
    data() {
        return{
            block: false
        }
    },
    mounted() {
        if(localStorage.getItem("BlockUpdating")) {
            this.block = true
        }
        emitter.on("blockUpdating", () =>{
            console.log("blockUpdating")
            this.block = true
            localStorage.setItem("BlockUpdating", true);
        });
    },
    methods: {
        downloadCV() {   
            window.open('https://drive.google.com/uc?export=download&id=1RtOTS6uI5YSACtSp_J_b4KFGBeuuwA_I', '_blank');
            this.$gtag.event('CV');
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
    justify-content: center;
    align-items: center;

    p{
        margin: 0;
    }
}
</style>