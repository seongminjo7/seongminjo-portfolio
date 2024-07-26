$(function () {
  $('.window').click(function () {
    $('.cir ,.win').toggleClass('on')
  })

  $('.clock').click(function () {
    $('.clock_door ,.bird').addClass('on');
    setTimeout(() => {
      $('.clock_door ,.bird').removeClass('on');
    }, 2000); // 2초 뒤에 클래스 제거
  })

  $('.cup_arm').click(function () {
    $('.cup_arm,.eye_drink,.mouth').addClass('on')
    setTimeout(() => {
      $('.cup_arm,.eye_drink,.mouth').removeClass('on');
    }, 4000); // 2초 뒤에 클래스 제거
  })

  $('.mouse_bread').click(function () {
    $('.mouse,.eye_close').addClass('on');
    $('.eye_open').removeClass('on')
    setTimeout(() => {
      $(this).addClass('on');
    }, 3000); // 2초 뒤에 클래스 제거
    setTimeout(() => {
      $('.eye_close').removeClass('on');
    }, 6000);
    setTimeout(() => {
      $('.eye_open').addClass('on');
    }, 6000);
  })

})