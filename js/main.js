// Swipper

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    speed: 400,
    direction: 'horizontal',
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});