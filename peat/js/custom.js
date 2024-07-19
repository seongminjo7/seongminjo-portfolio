$(function(){
  var swiper = new Swiper(".animal_cards", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    
  });
});