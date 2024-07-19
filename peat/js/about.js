AOS.init();
document.addEventListener('DOMContentLoaded', function() {
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    history: {
      key: "slide",
    },
  });


});