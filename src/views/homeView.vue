<script setup>
  import mainCard from '../components/mainCard.vue';
  import mainDescription from '../components/mainDescription.vue';
  import socialIcons from '../components/socialIcons.vue';
  import workView from '../views/workView.vue';
  import contackView from '../views/contactView.vue';
  import sideMenu from '../components/sideMenu.vue'
</script>

<template>
<div class="wrapper">
  <side-menu class="side-menu" ></side-menu>
  <section id="home" class="home-cont">  
  </section>
  <section  id="work">

  </section>
  <section class="kontakt" id="kontakt">
    <contack-view></contack-view>
  </section>
</div>

</template>

<script>
export default{
  name: 'home-view',
  data() {
    return {
      animationEnd: false,
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
    this.animationEnd = true;
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
  height: 100vh;
}

.home-cont{
    height: 100%;
    width: 100%;
    position: relative;
    background-color: var(--backgroundColor);
  }
.workView{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
