let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* $(function () {
  let bigSwiper = new Swiper(".big_peatlist .slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    on: {
      slideChange: function () {
        //이벤트 또는 조건문으로 이용하면 된다.
        console.log(this.activeIndex);
        $('.peat_txtbox .peattxt').removeClass('on').eq(this.activeIndex).addClass('on');
      },
    },

  });
}) */

$(function () {
  AOS.init();
  // 슬라이드의 인덱스를 0부터 시작하도록 변경
  $('.big_peatlist .slide .peatli').each(function (index) {
    $(this).attr('data-swiper-slide-index', index);
  });

  let bigSwiper = new Swiper(".big_peatlist .slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    initialSlide: 0, // 처음에 0번 슬라이드가 보이도록 설정
    on: {
      init: function () {
        let initialIndex = this.realIndex;
        $('.peat_txtbox .peattxt').removeClass('on').eq(initialIndex).addClass('on');
      },
      slideChange: function () {
        let realIndex = this.realIndex;
        let textIndex = realIndex % 6;
        $('.peat_txtbox .peattxt').removeClass('on').eq(textIndex).addClass('on');
      },
    },
  });
});