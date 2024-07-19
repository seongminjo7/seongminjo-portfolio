$(function(){

/*   $('ul.gnb>li').hover(function(){
    $(this).find('ul.sub').stop().slideDown()
  },function(){
    $(this).find('ul.sub').stop().slideUp()
  }) */

  $('ul.gnb>li, .nav_bg').hover(function(){
    $('ul.sub, .nav_bg').stop().slideDown();
  },function(){
    $('ul.sub, .nav_bg').stop().slideUp();
  })


  var swiper = new Swiper(".about", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})