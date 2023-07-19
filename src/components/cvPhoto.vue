<template>
    <div class="wrapper">
        <img class="photo" src="../assets/img/cardImg.jpg" alt="">
    </div>
</template>
<script>
export default{
    
}
</script>
<style lang="scss" scoped>
.wrapper{
    max-width: 20rem;

    max-height: 30rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .photo{
        width: 100%;
        border-radius: 1rem;
        box-shadow: 10px 10px 10px rgba($color: #000000, $alpha: 0.2);

    }
}
</style>