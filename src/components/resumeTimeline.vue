<template>
<div class="wrapper">
    <div class="wrapper-2023">
        <span class="year">2023</span>
    </div>
</div>
</template>
<script>
export default{
}
</script>
<style lang="scss" scoped>
.wrapper{
    height: 160vh;
    background-image: linear-gradient(to bottom, var(--green2), var(--green1), var(--backgroundLighter));
    width: 100%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    position: relative;
    .wrapper-2023{
        width: 100%;    
        height: 50rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .year{
            font-size: 20rem;
            letter-spacing: 14rem;
            font-family: "Rubik";
            font-weight: bolder;
            color: var(--backgroundDarker);
            opacity: 0.3;
            width: 100%;
            text-align: center;

        }
    }

  }
</style>