$(function () {

  /* 메인슬라이드 시작 */
  let slideI = 0;
  const slideLength = $('ul.main_slide li').length - 1;
  $('ul.main_slide li').eq(slideI).siblings().hide();
  let inter = setInterval(goSlide, 3000);

  function goSlide() {
    if (slideI < slideLength) {
      slideI++;
    } else {
      slideI = 0;
    }
    //1 2 3 4 0
    rollingSlide();
  }

  function backSlide() {
    if (slideI == 0) {
      slideI = slideLength;
    } else {
      slideI--;
    }
    //0 4 3 2 1
    rollingSlide();
  }


  function rollingSlide() {
    $('ul.main_slide li').eq(slideI).fadeIn().siblings().fadeOut();
    $('ul.pager li').removeClass('active').eq(slideI).addClass('active');
  }

  $('.main_visual .pause').click(function () {
    clearInterval(inter);
  });

  $('.main_visual .play').click(function () {
    inter = setInterval(goSlide, 3000);
  });

  $('.main_visual .right_btn').click(function () {
    clearInterval(inter);
    goSlide();
    inter = setInterval(goSlide, 3000);
  });

  $('.main_visual .left_btn').click(function () {
    clearInterval(inter);
    backSlide();
    inter = setInterval(goSlide, 3000);
  });

  $('ul.pager li').click(function () {
    clearInterval(inter);
    slideI = $(this).index();
    rollingSlide();
    inter = setInterval(goSlide, 3000);
  });
  /* 메인슬라이드 끝 */

});//ready end