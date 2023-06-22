<script setup>
  import mainCard from '../components/mainCard.vue';
  import mainDescription from '../components/mainDescription.vue';
</script>

<template>
  <div class="home-cont">  
    <main-card :left="this.left" :calculatedLeft="this.calculatedLeft"></main-card>
    <main-description class='main-description'></main-description>
  </div>

</template>

<script>
export default{
  name: "home-view",
  data() {
    return {
      left: null,
      calculatedLeft: null
    };
  },
  mounted() {
    var containerWidth = document.querySelector('.home-cont').offsetWidth;
    this.left = containerWidth / 2
    this.calculatedLeft = this.left /2
  }
}
</script>

<style scoped>
  .home-cont{
    height: 100%;
    width: 100%;
    position: relative;
  }
</style>
