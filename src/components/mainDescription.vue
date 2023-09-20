<template>
    <div class="wrapper">
           <h1>Hi I'm Jakub, </h1> 
           <p>a budding 22-year-old IT professional with 
            Experience in network engineering. 
            My passion is web development. Take a look at my resume and 
            professional history. I will be happy to share the projects I have completed. 
            Contact me if you have questions or interest in working together. 
            Thank you for visiting the site!</p>
    </div>
</template>
<script>
export default{
    
}
</script>
<style lang="scss" scoped>
.wrapper{
    max-width: 35rem;
    display: flex;
    color: var(--light);
    flex-direction: column;
    display: inline;
    .wrapper h1{
        margin: 0;
        align-self: flex-start;
        font-size: 2rem;
    }
    .wrapper p{
        font-size: 1.2rem;
        margin: 0;
        margin-top: 1rem;
    }

}
</style>