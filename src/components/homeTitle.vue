<template>
    <div class="wrapper">
      <p class="name">Jakub Kosmal</p>
      <p class="subtitle">- Network Engineer -</p>
      <photo :photoAnimationTrigger="this.photoAnimation"></photo>
    </div>
  </template>
  
<script>
import anime from 'animejs';
import Photo from '../components/Photo.vue'
export default {
components: {
  Photo
},
data() {
  return {
    photoAnimation: false
  }
},
mounted() {
  var textWrapper = document.querySelector('.name');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  var textWrapperSub = document.querySelector('.subtitle');
  textWrapperSub.innerHTML = textWrapperSub.textContent.replace(/\S/g, "<span class='subtitleLetter'>$&</span>");
  anime({
    targets: '.name .letter ',
    opacity: [0, 0.8],
    easing: "easeInOutQuad",
    delay: (el, i) => 100 * (i + 1)
  });
  anime({
    targets: '.subtitle .subtitleLetter ',
    opacity: [0, 0.8],
    easing: "easeInOutQuad",
    delay: (el, i) => 80 * (i + 1)
  });
  this.animateText()
  setTimeout(() => {
    this.photoAnimation = true;
  }, 3000);
  setTimeout(  setInterval(this.animateText, 10000), 100)
  setTimeout(  setInterval(this.animateLetters, 1000), 2000)

},
methods: {
  animatephoto() {

  },
    animateText() {
        var letters = document.querySelectorAll('.name .letter');
        var delay = 200; // Delay between each letter animation
        var duration = 1500; // Animation duration for each letter
        var colorFrom = '#74c69d';
        var colorTo = '#d8f3dc';
        letters.forEach((letter, index) => {
        anime({
            targets: letter,
            duration: duration,
            color: [colorFrom, colorTo, colorFrom],
            easing: 'easeInOutQuad',
            delay: index * delay,
            update: function(anim) {
                if (anim.direction === 'reverse' && anim.progress === 0) {
                anim.seek(anim.duration);
                }
                }
            });
        });
    },
    animateLetters() {
        var letters = document.querySelectorAll('.name .letter');
        var randomIndex = Math.floor(Math.random() * letters.length);
        var randomLetter = letters[randomIndex];
            anime({
            targets: randomLetter,
            duration: 3000,
            color: ['#74c69d', '#d8f3dc', '#74c69d'],
            easing: 'easeInOutQuad',
            });    
    }
}
};
  </script>
  
  <style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    flex-direction: column;

    .wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1; /* Adjust the opacity value as needed */
    background-image: url(../assets/img/codingBack.jpg);
    background-repeat: none;
    background-size: cover;
    background-position: bottom;
  }
    .name {
      top: 9rem;
      margin: 0;
      color: var(--green1);
      font-size: 16rem;
      font-weight: 00;
      letter-spacing: 1rem;
    }
    .name .letter {
      z-index: 2;

    }

    .subtitle{
        color: white;
        font-style: italic;
        letter-spacing: 0.4rem;
    }
  }
  </style>