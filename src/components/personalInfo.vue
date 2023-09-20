<template>
    <div class="wrapper">
           <h1>Personal Info</h1> 
           <div class="content">
            <div class="column">
                <p>Name: Jakub</p>
                <p>Birthday: June 2001</p>
                <p>Website: jakubkosmal.pl</p>
                <p>Phone: 510 447 849</p>
                <p>City: Warsaw</p>
            </div>
            <div class="column">
                <p>Age: 22</p>
                <p>Degree: Technical Specialist</p>
                <p>Mail: kubakosmal2@gmail.com</p>
                <p>Freelance: Anvilable</p>
                <p>Residence: Poland</p>
            </div>
           </div>
    </div>
</template>
<script>
export default{
}
</script>
<style lang="scss" scoped>
.wrapper{
    min-width: 35rem;
    color: var(--light);
    background-image: none !important;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .wrapper h1{
        margin: 0;
            align-self: flex-start;
    }
    .content{
        display: flex;
        font-size: 0.9rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-family: quickSand;
    }
    .column{
        width: 100%;
    }
}
</style>