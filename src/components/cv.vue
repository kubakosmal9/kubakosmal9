<template>
    <div class="wrapper">
        <div class="cv-panel">
            <p class="title">Download my CV</p>
            <cv-download></cv-download>
            <div class="p-wrapper">
            <p class="text">Total Downloads:</p>   
            <p class="counter"> {{ this.counter }}</p>
            </div>
           
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
            intervalId: null 
        }
    },
    computed: {
        totalCounter() {
        return this.counter;
        },
    },
    methods: {
        randomCounterValue() {
            if (this.intervalId === null) {
                this.intervalId = setInterval(() => {
                    // Generujemy losową liczbę od 1 do 100
                    const randomValue = Math.floor(Math.random() * 100) + 1;
                    
                    // Aktualizujemy wartość counter na losową liczbę
                    this.counter = randomValue;
                }, 80);
            }
        },
        stopRandomCounterValue() {
            // Sprawdź, czy interwał jest uruchomiony, zanim spróbujesz go zatrzymać
            if (this.intervalId !== null) {
            clearInterval(this.intervalId);  // Anuluj interwał za pomocą clearInterval
            this.intervalId = null;  // Zresetuj identyfikator interwału
            }
        },
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
                this.counter = body[0].counter
                this.stopRandomCounterValue()
                })
        },
        updateDataBaseCounter() {
            const objectId = "64b6b3700c10e2790004c74b";
            const url = `https://cvdownload-4fef.restdb.io/rest/cvdownload/${objectId}`;
            const data = {
                counter: this.counter
            };
            const options = {
                method: 'PUT',
                url: url,
                headers: {
                    'cache-control': 'no-cache',
                    'x-apikey': '64bd506e86d8c5a6daed91d5',
                    'content-type': 'application/json'
                },
                data: data
            };

            axios(options)
        }
    },
    
    mounted() {
        this.initialFetchOfCounter()
        emitter.on("updateCounter", () =>{
            this.counter++
            emitter.emit("blockUpdating");
            this.updateDataBaseCounter()
        });
        this.randomCounterValue()
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
        .p-wrapper{
            display: flex;
            gap: 10px;
            justify-content: space-around;
            align-items: center;
            .text{
                font-size: 1rem;
                margin: 0;
                padding: 0.5rem 0 1rem 0;
            }              
            .counter{
                font-size: 1rem;
                width: 1rem;
                margin: 0;
                padding: 0.5rem 0 1rem 0;
            }          
   
        }        

        .title{
            font-size: 2rem;
            padding: 1.5rem 0 1.5rem 0;
            margin: 0;
        }
    }
}
</style>