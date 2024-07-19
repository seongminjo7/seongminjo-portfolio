$(function () {
  AOS.init();

  /* goods tab_menu */
  $('.goods .container .goods_list .tab_menu li ').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    let i = $(this).index();
    $('.goods .container .goods_list .tab_con>li').eq(i).show().siblings().hide();
  })


  /* goods tab start */
  $('.goods_list article h3 ').click(function () {
    $('.goods_list article h3').parent().removeClass('on')
    $(this).parent().addClass('on')
  })
  /* goods tab end */


  /* swiper start */
  let swiper = new Swiper(".animal_slide", {
    spaceBetween: 300,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 800,
  });
  /* swiper end */




  /* count */
  /*     let countBox = document.querySelector('#count1')
      let count = 0;
      let num = 596;
  
      let counting = setInterval(function(){
          if (count >=num){
              count = num;
              clearInterval(counting);
          }else{
              count += 596;
          }
          countBox.innerHTML = new Intl.NumberFormat().format(count);
      },1000) */



})