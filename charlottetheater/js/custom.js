$(function () {

    $('ul.gnb>li,.nav_bg').hover(function(){
        $('ul.sub,.nav_bg').stop().slideDown()
    },function(){
        $('ul.sub,.nav_bg').stop().slideUp()
    })

    $('header .ham,header .hamclose').click(function(){
      $('header .m_nav').toggle()
      $('header .ham, header .hamclose').toggleClass('on')
    })

    // location click start
    $('.location .loc .way ul.list li:nth-child(1)').click(function () {
        $('.location .loc .way ul.list li, .info>div').removeClass('on')
        $(this).addClass('on')
        $('.subway').addClass('on')
    })
    $('.location .loc .way ul.list li:nth-child(2)').click(function () {
        $('.location .loc .way ul.list li, .info>div').removeClass('on')
        $(this).addClass('on')
        $('.bus').addClass('on')
    })
    $('.location .loc .way ul.list li:nth-child(3)').click(function () {
        $('.location .loc .way ul.list li, .info>div').removeClass('on')
        $(this).addClass('on')
        $('.car').addClass('on')
    })
    // location click end


    let swiper = new Swiper(".main_visual", {
      slidesPerView: 1,
      spaceBetween: 0,
      rewind: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

    let swiper2 = new Swiper(".poster", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
})