/* AOS */
AOS.init();

/* 메인 비주얼의 이미지 자동 슬라이드 */
let slideIdx = 0;
setInterval(function () {
  if (slideIdx < 2) {
    slideIdx++;
  } else {
    slideIdx = 0;
  };
  $('section.main_visual .main_txt div ul').stop().animate({
    left: slideIdx * -100 + '%'
  }, 500)
}, 2300);

/* media 카드 돌리기 */
var swiper = new Swiper(".mymy", {
  slidesPerView: 3,
  spaceBetween: 70,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* quiz */
$('section.quiz .container .in_box ul li').click(function () {
  $(this).addClass('on').siblings().removeClass('on')
});


let upData = [50, 120, 185, 255]
let ht = $(window).height();
$(window).scroll(function () {
  let st = $(window).scrollTop();
  ht = $(window).height();
  let arT = $('section.endangered').offset().top;
  for (let i = 0; i < $('section.endangered article').length; i++) {
    if (st >= arT + (ht * i) && st < arT + ht * (i + 1)) {
      $('section.endangered .left .thermometer .img .up').css(
        {
          height: upData[i],
          transition: '1s',
        })
    }
  }
});

/* endangered 섹션 관련 휠 이벤트 */
$('section.endangered article').on('wheel', function (e) {
  e.preventDefault();

  let nav;
  if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
    nav = $(this).prev(); /* 이전에 section을 저장 */
  } else {
    nav = $(this).next(); /* 다음에 section을 저장 */
  }
  let moveTop;
  if (nav.length) {
    moveTop = nav.offset().top;
  } else {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      moveTop = $('.answer').offset().top; /* 이전에 section을 저장 */
    } else {
      moveTop = $('.media').offset().top;/* 다음에 section을 저장 */
    }
  }
  $('html,body').stop().animate({
    scrollTop: moveTop,
  }, 150,);
});