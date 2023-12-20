
//  Initialize Swiper 
var swiper = new Swiper(".menu-list-slide", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});