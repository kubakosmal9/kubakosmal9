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
    <main-card></main-card>
    <main-description class='main-description'></main-description>
        <socialIcons></socialIcons>
        <svg :style="{ opacity: animationEnd ? '0.2' : '0' }" class="tag" fill="#B1885F" viewBox="0 -960 960 960">
          <path filter="url(#blur)" d="M813-61 279-595 166-482l197 197-43 43L80-482l156-156L61-813l43-43 752 752-43 43Zm-91-263-43-43 115-115-197-197 43-43 240 240-158 158Z"/>
        </svg>
  </section>
  <section  id="work">
    <work-view></work-view>
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



@media screen and (max-width: 480px) {

.tag{
    left: 0 !important;
    width: 400px !important
  }
}
.home-cont{
  background-color: var(--backgroundColor);
}
.tag{
  transition: opacity 2s;
  bottom: 50px;
  left: 50%;
  width: 500px;
  position: absolute;
  opacity: 0.2;
}
.wrapper{
  width: 100%;
  height: 100vh;
}
@media screen and (max-width: 480px) {
  .wrapper{
    margin-top: 55px;
  }
}
.home-cont{
    height: 100%;
    width: 100%;
    position: relative;
  }
.workView{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
