<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/var.css'
</script>

<template>
  <div class="app-cont">
      <RouterView />
  </div>

</template>

<style scoped>
.app-cont{
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
