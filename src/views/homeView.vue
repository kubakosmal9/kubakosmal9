<script setup>
  import mainCard from '../components/mainCard.vue';
  import mainDescription from '../components/mainDescription.vue';
  import socialIcons from '../components/socialIcons.vue';
  import aboutView from '../views/AboutView.vue';
  import contackView from '../views/contactView.vue';
</script>

<template>
<div class="wrapper">
  <section id="home" class="home-cont">  
    <main-card></main-card>
    <main-description class='main-description'></main-description>
        <socialIcons></socialIcons>
        <svg :style="{ opacity: animationEnd ? '0.2' : '0' }" class="tag" fill="#B1885F" viewBox="0 -960 960 960">
          <path filter="url(#blur)" d="M813-61 279-595 166-482l197 197-43 43L80-482l156-156L61-813l43-43 752 752-43 43Zm-91-263-43-43 115-115-197-197 43-43 240 240-158 158Z"/>
        </svg>
  </section>
  <section class="aboutView" id="about">
    <about-view></about-view>
  </section>
  <section class="kontakt" id="kontakt">
    <contack-view></contack-view>
  </section>
</div>

</template>

<script>
  import mitt from 'mitt'
  const emitter = mitt()
export default{
  name: 'home-view',
  data() {
    return {
      animationEnd: false,
      // Variable parsing the current hash of the displayed section
      hash: '',
    };
  },
  mounted() {
    setTimeout(() => {

            this.animationEnd = true
            },4900)
    // A function that adds in the url Hash of the currently displayed section on the page. 
    const updateHash = () => {
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 81 + 65.188 && rect.bottom > 65.188;
      });
      // Check if the current section is NOT the first one
      const isNotFirstSection = currentSection > 0;

      if (isNotFirstSection) {
        // Only add hash if it's not the first section
        const hash = `${sections[currentSection].id}`;
        if (history.replaceState) {
          history.replaceState(null, null, hash);
          emitter.emit('rootUrl', true)
        } else {
          location.hash = hash;
          emitter.emit('rootUrl', false)
        }
        this.hash = hash; // update the hash data property
        // Send emit to menu to activate active section
        emitter.emit('updateSectionHash', hash)

      } else {
        // If the first section is visible, remove the hash from the URL
        if (history.replaceState) {
          history.replaceState(null, null, '/');
        } else {
          location.hash = '';
        }
        this.hash = ''; // update the hash data property
        emitter.emit('updateSectionHash', this.hash)
      }
    };
    // Call updateHash once after the component is mounted to set the initial hash value
    window.addEventListener('scroll', updateHash);
    updateHash();
  }
}

</script>

<style scoped>
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
  .aboutView{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
