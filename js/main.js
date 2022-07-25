// firstSwipper

let firstSwiper = new Swiper(".secondSwiper", {
  slidesPerView: 1,
  speed: 400,
  direction: "horizontal",
  // spaceBetween: 20,
  navigation: {
    nextEl: ".firstSwiper-button-next",
    prevEl: ".firstSwiper-button-prev",
  },
});

// Swipper

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  speed: 400,
  direction: "horizontal",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// play audio
const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", (e) => {
 
  let audio = document.querySelector('.audio');
  
    audio.play();
});



// navbar toggle 
const navbarBtn = document.querySelector('.navbar-toggle');
navbarBtn.addEventListener('click', (e) => {
    document.querySelector('.navbar').classList.toggle('navbar-mobile-hide');
});