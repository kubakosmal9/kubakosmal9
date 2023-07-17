<template>
    <div class="wrapper">
      <p class="name">Jakub Kosmal</p>
    </div>
  </template>
  
  <script>
  import anime from 'animejs';
  
  export default {
    mounted() {
  var textWrapper = document.querySelector('.name');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime({
    targets: '.name .letter',
    opacity: [0, 0.6],
    easing: "easeInOutQuad",
    delay: (el, i) => 100 * (i + 1)
  });
  setTimeout(  setInterval(this.animateText, 10000), 2000)
  setTimeout(  setInterval(this.animateLetters, 2000), 2000)

},
methods: {
  animateText() {
    var letters = document.querySelectorAll('.name .letter');
    var delay = 200; // Delay between each letter animation
    var duration = 1500; // Animation duration for each letter
    var colorFrom = '#74c69d';
    var colorTo = '#d8f3dc';
    console.log("całość")
    letters.forEach((letter, index) => {
      anime({
        targets: letter,
        duration: duration,
        color: [colorFrom, colorTo, colorFrom],
        easing: 'linear',
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
        console.log("pojedyncze")
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
    align-items: center;
    position: relative;
  
    .name {
      position: absolute;
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
  }
  </style>