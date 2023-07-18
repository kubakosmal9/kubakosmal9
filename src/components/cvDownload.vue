<template>
    <span @click="this.downloadCV()" class="cont">
        <p>Download</p>
    </span>
</template>
<script>
export default{
    methods: {
        downloadCV() {   
            // window.open('https://drive.google.com/uc?export=download&id=1RtOTS6uI5YSACtSp_J_b4KFGBeuuwA_I', '_blank');
            // this.$gtag.event('CV');
            // var options = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'x-apikey': '64b6b8ca86d8c5aed6ed913b' // Replace with your actual API key
//   }
            // };

            // fetch('https://cvdownload-4fef.restdb.io/rest/cvdownload', options)
            //   .then(response => response.json())
            //   .then(body => {
            //     console.log(body);
            //   })
            //   .catch(error => {
            //     console.error('Error:', error);
            //     // Handle errors here
            //   });

            console.log("emiter started")
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