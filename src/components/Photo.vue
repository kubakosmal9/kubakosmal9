<template>
    <div class="photo-wrapper">
        <img class="photo" src="../assets/img/cardImg.jpg" alt="">
    </div>
</template>
<script>
export default{
    name: 'photo'
}
</script>
<style lang="scss" scoped>
.photo-wrapper{
    max-width: 20rem;
    max-height: 30rem;
    position: absolute;
    display: flex;
    bottom: 5rem;
    align-items: center;
    justify-content: center;
    .photo{
        width: 100%;
        border: 10px solid  var(--green1);
        border-radius: 50%;
        box-shadow: 10px 10px 10px rgba($color: #000000, $alpha: 0.2);

    }
}
</style>