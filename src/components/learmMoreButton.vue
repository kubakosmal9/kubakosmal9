<template>
    <div class="container">
        <router-link to="/about"><span class="button">Przejdź dalej!</span></router-link>
    </div>

</template>

<script>
export default{
    name: "learn-more-button",

}
</script>

<style scoped>
.container{
    width: 200px;
    height: 50px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cardColor);
    background-image: url('../assets/img/cardboardTexture.jpg');
    background-blend-mode: multiply;
    opacity: 0.7;
    box-shadow: 0 0 30px rgb(136, 136, 136);
}
.container:hover{   
    box-shadow: 0 0 30px rgb(75, 75, 75);
    transition: all 0.4s ease-in-out;
}

.container a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 20px;
    letter-spacing: 2px;
}
button{
    width: 100%;
    height: 100%;
    opacity: 1 !important;
}

</style>