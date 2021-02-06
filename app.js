let tl = anime.timeline({
    loop: true,
    easing: 'easeInOutBack',
    duration: 800,
  });
  
  tl
  .add({
    targets: '.red-circle',
    translateY: '50px',
    translateX: '25px',
  }, 100)
  .add({
    targets: '.red-circle',
    translateY: '50px',
    translateX: '-25px',
  }, 1100)
  .add({
    targets: '.red-circle',
    translateY: '0px',
    translateX: '0px',
  }, 2200)
  .add({
    targets: '.border-circle-one',
    translateY: '0px',
    translateX: '50px',
  }, 100)
  .add({
    targets: '.border-circle-one',
    translateY: '-50px',
    translateX: '25px',
  }, 1100)
  .add({
    targets: '.border-circle-one',
    translateY: '0px',
    translateX: '0px',
  } ,2200)
  .add({
    targets: '.border-circle-two',
    translateY: '-50px',
    translateX: '-25px',
  }, 100)
  .add({
    targets: '.border-circle-two',
    translateY: '0px',
    translateX: '-50px',
  }, 1100)
  .add({
    targets: '.border-circle-two',
    translateY: '0px',
    translateX: '0px',
  }, 2200)
  .add({
    targets: '.border-circle-three',
    translateY: '50px',
    translateX: '-25px',
  }, 100)
  .add({
    targets: '.border-circle-three',
    translateY: '50px',
    translateX: '25px',
  }, 1100)
  .add({
    targets: '.border-circle-three',
    translateY: '0px',
    translateX: '0px',
  }, 2200)
  
  window.addEventListener('load', () => {
    loaderContainer = document.querySelector('.loader-container');
    loaderContainer.classList.add('fadeout');
  });