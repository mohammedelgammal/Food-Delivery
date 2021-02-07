let tl = anime.timeline({
    loop: true,
    easing: 'easeInOutBack',
    duration: 800,
  });
let scrollTopButton = document.querySelector('.scroll-top');
let increaseButton = document.querySelectorAll('.increase');
let decreaseButton = document.querySelectorAll('.decrease');
let countNumber = document.querySelectorAll('.countnumber');
let removeButton = 

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
  
window.onscroll = () => {
  if (window.pageYOffset >= 1000){
    scrollTopButton.classList.add('showup');
  } else {
    scrollTopButton.classList.remove('showup');
  }
};

scrollTopButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

console.log(decreaseButton)

for(let i = 0; i < countNumber.length; i++){
  countNumber[i].innerText = '0';
increaseButton[i].addEventListener('click', () => {
  countNumber[i].innerText++;
});
decreaseButton[i].addEventListener('click', () => {
  if(countNumber[i].innerText > 1){
    countNumber[i].innerText--;
  }
});
}