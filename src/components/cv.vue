<template>
    <div class="wrapper">
        <div class="panel">
            <p class="counter">3</p>
            <p class="subtitle">years of experience</p>
        </div>
        <div class="panel">
            <p class="counter">100+</p>
            <p class="subtitle">Happy Clients</p>
        </div>
        <div class="panel cv-count">
            <p class="counter">{{ this.counter }}</p>
            <p class="subtitle">Downloads of CV</p>
        </div>
        <div class="panel button">
            <cv-download></cv-download>
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
            counter: 0,
        }
    },
    methods: {
        initialFetchOfCounter() {
            var options = {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '64b6b8ca86d8c5aed6ed913b' // Replace with your actual API key
                }
            };
            fetch('https://cvdownload-4fef.restdb.io/rest/cvdownload', options)
                .then(response => response.json())
                .then(body => {
                this.counter = body[0].counter
                })
                .catch(error => {
                console.error('Error:', error);
                // Handle errors here
            });
        },
        updateDataBaseCounter() {
            const url = 'https://cvdownload-4fef.restdb.io/rest/cvdownload/64b6b3700c10e2790004c74b';
            const apiKey = '64b6b8ca86d8c5aed6ed913b';
            var value = this.counter
            const data = { counter: value };

            axios.put(url, data, {
                headers: {
                'cache-control': 'no-cache',
                'x-apikey': apiKey,
                'content-type': 'application/json',
            },
            })
            .catch(error => {
                console.error('Error:', error);
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
    height: 200vh;
    display: flex;
    gap: 2rem;
    justify-content: center;
    .button{
        
    }
    .panel{
        background-color: var(--green1);
        width: 20rem;
        height: 8rem;
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
            font-size: 3rem;
            margin: 0;
        }
        .subtitle{
            font-size: 1.5rem;
            margin: 0;
        }
    }
}
</style>