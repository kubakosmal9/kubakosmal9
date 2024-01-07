<template>

    <div class="wrapper">
        <div class="title">Contact Form</div>
        <div class="form">
            <span class="text">If you want Me to contact You. Leave your email address below</span>
            <div data-customgform="clr2vdaqe002ywnitqvhwwggx"></div>
            </div>

    </div>
</template>
<script>
export default{


}
</script>
<style scoped lang="scss">
.wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    color: var(--light);
    font-family: "QuickSand";
    align-items: center;
    padding: 4rem 0rem 3rem;
    z-index: 100000;
    .form{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: 3rem;
        background-color: rgba($color: #1c352a, $alpha: 0.7);
        .text{
            width: 100%;
            padding-bottom: 2rem;
            padding-top: 3rem;
            text-align: center;
        }
        
    }
    
}
</style>