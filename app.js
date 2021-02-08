let tl = anime.timeline({
    loop: true,
    easing: 'easeInOutBack',
    duration: 800,
  });
let scrollTopButton = document.querySelector('.scroll-top');
let increaseButton = document.querySelectorAll('.increase');
let decreaseButton = document.querySelectorAll('.decrease');
let countNumber = document.querySelectorAll('.countnumber');
let upLeImg = document.querySelector('.up-le-img img');
let clients = document.querySelectorAll('.client');
let nameCity = document.querySelectorAll('.client-name-city');
let paragraphs = document.querySelectorAll('.paragraphs p');
let dots = document.querySelectorAll('.slider-dots svg');
let counter = 1;
let loveIdeas = document.querySelectorAll('.love, .new-ideas');
let delivery = document.querySelector('.delivery svg');

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
  }, 2200);

anime({
  targets: '.up-le-img img',
  rotateZ: '-35deg',
  translateX: '-5px',
  direction: 'alternate',
  duration: 4000,
  easing: 'linear',
  loop: true
}) 
  
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

loveIdeas.forEach(loveIdea => {
  loveIdea.addEventListener('mouseenter', () => {
    delivery.style.animation = "none";
    delivery.style.fill = "white";
  });
  loveIdea.addEventListener('mouseleave', () => {
    delivery.style.animation = 'scaler 0.4s ease infinite alternate';
    delivery.style.fill = "url('#redgradient')";
  });
});
