<script setup>
  import homeTitle from '../components/homeTitle.vue';
  import infoPage from '../components/infoPage.vue';
</script>

<template>
<div class="wrapper">
  <!-- <side-menu class="side-menu" ></side-menu> -->
  <section id="home" class="home-cont">  
    <home-title></home-title>
  </section>
    <section class="info-cont" id="about">
      <info-page></info-page>
  </section>
  <section class="Statistic" id="Statistic">
  </section>
</div>

</template>

<script>
export default{
  name: 'home-view',
  data() {
    return {
      // Variable parsing the current hash of the displayed section
      hash: '',
    };
  },
  methods: {
    updateHash()  {
    const sections = document.querySelectorAll('section');
    const currentSection = Array.from(sections).findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 81 + 65.188 && rect.bottom > 65.188;
    });

    const isNotFirstSection = currentSection > 0;

    if (isNotFirstSection) {
      const hash = `${sections[currentSection].id}`;
      if (history.replaceState) {
        history.replaceState(null, null, hash);
        // emitter.emit('rootUrl', true);
      } else {
        location.hash = hash;
        // emitter.emit('rootUrl', false);
      }
      this.hash = hash;
      // emitter.emit('updateSectionHash', hash);
    } else {
      if (history.replaceState) {
        history.replaceState(null, null, '/');
      } else {
        location.hash = '';
      }
      this.hash = '';
      // emitter.emit('updateSectionHash', this.hash);
    }
  },

  },
  mounted() {
  setTimeout(() => {
  }, 4900);
  document.addEventListener('wheel', () => this.updateHash());
  // Call updateHash once after the component is mounted to set the initial hash value
}
}

</script>

<style scoped lang="scss">

.side-menu{
  position: absolute;
  z-index: 999;
}

.wrapper{
  width: 100%;
}

.home-cont{
    height: 90vh;
    width: 100%;
    position: relative;
    background-image: linear-gradient(to bottom, #06140f, #1b4332);
background-size: 100% 200%;  }
.info-cont{
    position: relative;
    width: 100%;

  }
</style>
