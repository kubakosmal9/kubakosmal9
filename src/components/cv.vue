<template>
    <div class="wrapper">
        <div class="cv-panel">
            <p class="title">Download my CV</p>
            <cv-download></cv-download>
            <p class="counter">Total Downloads: {{ this.counter }}</p>              
        </div>


    </div>
</template>
<script>
import emitter from '../mitt.js'; 
import axios from 'axios';
import cvDownload from './cvDownload.vue'
export default{
    components: {
        cvDownload,
    },
    data() {
        return {
            counter: "24",
        }
    },
    computed: {
        totalCounter() {
        // You can put any additional logic here if needed
        return this.counter;
        },
    },
    methods: {
        initialFetchOfCounter() {
            var options = {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '64bd506e86d8c5a6daed91d5' // Replace with your actual API key
                }
            };
            fetch('https://cvdownload-4fef.restdb.io/rest/cvdownload', options)
                .then(response => response.json())
                .then(body => {
                    console.log(body[0].counter)
                this.counter = body[0].counter
                })
                .catch(error => {
                console.error('Error while requesting Database:', error);
                // Handle errors here
            });
        },
        updateDataBaseCounter() {
            const url = 'https://cvdownload-4fef.restdb.io/rest/cvdownload/64bd506e86d8c5a6daed91d5';
            var value = this.counter
            const data = { counter: value };

            var options = { 
                method: 'PUT',
                url: 'https://cvdownload-4fef.restdb.io/rest/cvdownload/',
                headers: 
                { 'cache-control': 'no-cache',
                    'x-apikey': '7e0492df4013aab19d4afb683a52c1efd94c5',
                    'content-type': 'application/json' },
                body: { counter: this.counter },
                json: true 
            };
            
            
            axios.put(url, data, {
                headers: {
                'x-apikey': '64bd506e86d8c5a6daed91d5',
                'content-type': 'application/json',
            },
            })
            .catch(error => {
                console.error('Error while requesting Database:', error);
                // Handle errors here
            });
        }
    },
    mounted() {
        this.initialFetchOfCounter()
        emitter.on("updateCounter", () =>{
            this.counter++
            emitter.emit("blockUpdating");
            this.updateDataBaseCounter()
        });
    }

}
</script>

<style lang="scss" scoped>
.wrapper{
    background-color: var(--backgroundColor);
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .cv-panel{
        background-color: var(--green1);
        width: 23rem;
        color: var(--light);
        display: flex;
        margin-top: 1rem;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Rubik';
        border-radius: 1rem;
        .counter{
            font-size: 1rem;
            margin: 0;
            padding: 0.5rem 0 1rem 0;
        }
        .title{
            font-size: 2rem;
            padding: 1.5rem 0 1.5rem 0;
            margin: 0;
        }
    }
}
</style>