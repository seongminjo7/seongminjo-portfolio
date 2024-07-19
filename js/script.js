$(function () {

  $('.ham').click(function () {
    $('.all_menu').toggleClass('on')
    $('.ham img').toggleClass('on')
  })


  /* 타이핑 효과 */
  let typingTxt = $('.typing-txt').text().split(''); // 한 글자씩 자르기
  console.log(typingTxt)
  let typingIndex = 0;
  let typingInter;

  function typing() {
    if (typingIndex < typingTxt.length) {
      $('.typing').append(typingTxt[typingIndex])
      typingIndex++;
    } else {
      clearInterval(typingInter); // 타이핑 한번만 나오게
      typingIndex = 0;
    }
  }
  // 인터벌 설정 및 타이핑 시작
  typingInter = setInterval(typing, 120); // 150ms마다 typing 함수 실행


  /* 변수 ht에 브라우저 높이값을 저장 */
  let ww = $(window).width();
  let ht = $(window).height();
  //console.log('ready', ht);
  // 브라우저가 리사이즈 될 때 마다 브라우저 높이값 재 저장
  $(window).on('resize', function () {
    ht = $(window).height();
    ww = $(window).width();
    mediaWidth();
    // console.log(ht);
  });

  mediaWidth();
  function mediaWidth() {
    if (ww <= 1024) {
      $('.wrap >.page:visible').off('wheel');
    } else {
      /* 마우스 휠 이벤트 시작 */
      $('.wrap >.page').on('wheel', function (e) {
        e.preventDefault();
        let nav;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          nav = $(this).prev();
        } else {
          nav = $(this).next();
        }
    
        if (nav.length) {
          let moveTop = nav.offset().top;
          $('html,body').stop().animate({
            scrollTop: moveTop,
          }, 1200, 'easeInOutCubic')
          //console.log(nav)
        }
      })
      /* 마우스 휠 이벤트 끝 */
    }
  }

  /* 스크롤 이벤트 시작 */
  let sc;
  let sectionI = $('.wrap>.page:visible').length;
  let textArr = ['Website', 'App', 'Design', '©Seongmin_Jo']
  // console.log(sectionI)
  $(window).scroll(function () {
    sc = $(window).scrollTop();
    if (sc == 0) {
      typingInter = setInterval(typing, 100)
    } else {
      clearInterval(typingInter)
      $('.typing').empty()
    }
    
    for (let i = 0; i < sectionI; i++) {
      if (sc >= ht * i && sc < ht * (i + 1)) {
        let aa = $('.wrap > .page:visible').removeClass('on').eq(i).addClass('on');
        let $textH2 = $('.slide_h2 h2');
        $('.slide_nav_wrap').addClass('on');
        $('.slide_nav_all').removeClass('on');
        $('.slide_h2').removeClass('contact');
        if (aa.hasClass('web')) {
          $textH2.text(textArr[0]);
          $('.web_nav').addClass('on');
          let len = ('.slide_nav_all .web_nav .slide_nav').length;
          for (let ind = 0; ind < len; ind++) {
            if (ind == i) {
              // console.log(i - 1);
              let offleft = $('.web_nav .slide_nav').eq(i - 1).find('p').width();
              // console.log(offleft);
              $('.web_nav .slide_nav').eq(i - 1).css({ 'transform': `translateX(${offleft - 30}px)` }).siblings().css({ 'transform': `translateX(0)` });
            }
          }
        } else if (aa.hasClass('app')) {
          let len = ('.slide_nav_all .app_nav .slide_nav').length;
          $textH2.text(textArr[1]);
          $('.app_nav').addClass('on');
          for (let inde = 0; inde < len; inde++) {
            if (inde == i) {
              //console.log(i - 8);
              let offleft = $('.app_nav .slide_nav').eq(i - 7).find('p').width();
              //console.log(offleft);
              $('.app_nav .slide_nav').eq(i - 7).css({ 'transform': `translateX(${offleft - 30}px)` }).siblings().css({ 'transform': `translateX(0)` });
            }
          }
        } else if (aa.hasClass('design')) {
          $textH2.text(textArr[2]);
        }
        else if (aa.hasClass('contact')) {
          $textH2.text(textArr[3]);
          $('.slide_h2').addClass('contact')
          $('.slide_nav_all').removeClass('on');
        }
        else {
          //console.log('bb');
          $('.slide_nav_wrap').removeClass('on');
          $('.slide_nav_all').removeClass('on');
        }
      }
    }
  });
  /* 스크롤 이벤트 끝 */

  /* slide_nav 클릭 이벤트 시작 */
  $('.all_menu ul li').click(function () {
    let i = $(this).index()
    ht = $(window).height()
    let page;
    switch (i) {
      case 0: page = $('.web1').offset().top; break;
      case 1: page = $('.app1').offset().top; break;
      case 2: page = $('.design').offset().top; break;
      case 3: page = $('.contact').offset().top; break;
    }
    $('html,body').stop().animate({
      scrollTop: page,
    }, 1200, 'easeInOutCubic')
    $('.all_menu, .ham img').toggleClass('on')
  })

  $('.web_nav .slide_nav').click(function () {
    let i = $(this).index()
    ht = $(window).height()


    let offleft = $(this).find('p').width();
    console.log(offleft);
    $(this).css({ 'transform': `translateX(${offleft - 30}px)` }).siblings().css({ 'transform': `translateX(0)` });


    let page;
    switch (i) {
      case 0: page = $('.web1').offset().top; break;
      case 1: page = $('.web2').offset().top; break;
      case 2: page = $('.web3').offset().top; break;
      case 3: page = $('.web4').offset().top; break;
      case 4: page = $('.web5').offset().top; break;
      case 5: page = $('.web6').offset().top; break;
    }
    $('html,body').stop().animate({
      scrollTop: page,
    }, 1200, 'easeInOutCubic')
  })

  $('.app_nav .slide_nav').click(function () {
    let i = $(this).index()
    ht = $(window).height()

    let offleft = $(this).find('p').width();
    console.log(offleft);
    $(this).css({ 'transform': `translateX(${offleft - 30}px)` }).siblings().css({ 'transform': `translateX(0)` });

    let page;
    switch (i) {
      case 0: page = $('.app1').offset().top; break;
      case 1: page = $('.app2').offset().top; break;
    }
    $('html,body').stop().animate({
      scrollTop: page,
    }, 1200, 'easeInOutCubic')
  })
  /* slide_nav 클릭 이벤트 끝 */


  /* design swiper */
  const swiper1 = new Swiper('.design', {
    speed: 400,
    // spaceBetween: 30,
    // slidesPerView: 2.5,
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
      clickable: true,
    },
    breakpoints: {
/*       640: {
        slidesPerView: 2,
        spaceBetween: 20,
      }, */
      428: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      1024: {
        slidesPerView: 1.1,
        spaceBetween: 150,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
      3000: {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
    },
  });

  /* design modal */
  $('li.swiper-slide .box .info .more_btn').click(function () {
    let mi = $(this).closest('li').index()
    console.log(mi)

    $('.modal').eq(mi).addClass('on').siblings().removeClass('on')
  })

  $('.close_btn').click(function () {
    $('.modal').removeClass('on')
  })

  $(document).mouseup(function (e) {
    var LayerPopup = $(".modal");
    if (LayerPopup.has(e.target).length === 0) {
      LayerPopup.removeClass("on");
    }
  });


  AOS.init();
})