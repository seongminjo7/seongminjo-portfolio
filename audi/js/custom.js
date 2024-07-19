$(function(){
  /* 메뉴 버튼 클릭 시 */ /* ( a link 무력화 ) */
  $('#menu li').click(function(e){
    e.preventDefault();
    /* 변수 ht에 브라우저의 높이값 저장 */
    let ht = $(window).height()
    /* 변수 i에 클릭한 li의 순서 값을 저장 */
    let i = $(this).index();
    /* 브라우저의 높이값 * index값은 현재 박스의 스크롤 위치값과 동일 */
    let nowTop = i*ht;
    $('html,body').stop().animate({
      scrollTop :nowTop,
    },1400,'easeOutCirc')
  // return false; /* 위에거랑 똑같이 a 무력화 */
  })

/* 스크롤 이벤트 - 메뉴 on class */
  $(window).on('scroll',function(){
    let ht = $(window).height();
    let sct = $(window).scrollTop()
    const sectionLength = $('#wrap section').length;
    for(let i=0; i<sectionLength; i++){
      if(sct >= ht*i && sct<ht*(i+1)){
        $('ul#menu li').removeClass('on')
        $('ul#menu li').eq(i).addClass('on')
      }
    }
  })

/* 마우스 휠 이벤트 */
  $('#wrap section').on('wheel',function(e){
    e.preventDefault();
    let nav;
    if(e.originalEvent.wheelDelta>0 || e.originalEvent.detail<0){
      nav = $(this).prev();
    }else{
      nav = $(this).next();
    }

    if(nav.length){
      let moveTop = nav.offset().top;
      $('html,body').stop().animate({
        scrollTop : moveTop,
      },1400,'easeInOutCubic')
      //console.log(nav)
    }
  })

/* 마우스 무브 이벤트 */
  $('section').on('mousemove',function(e){
    let posX = e.pageX
    let posY = e.pageY
    //console.log(posX + '/' + posY)
    /* 첫번째 박스 이미지 위치값을 마우스 커서의 위치값과 연동 */
    $('.p11').css({
      bottom : 20 - (posY/30),
      right : 20 - (posX/30),
    })
    $('.p12').css({
      bottom : -40 + (posY/20),
      right : 130 + (posX/20)
    })
    $('.p13').css({
      top : 180 - (posY/40),
      right : 60 + (posX/40)
    })

    $('.p21').css({
      bottom : -480 + (posY/40),
      right : -180 + (posX/40)
    })
    $('.p22').css({
      bottom : -40 + (posY/40),
      right : 130 - (posX/40)
    })

    $('.p31').css({
      bottom : 30 + (posY/30),
      right :180 - (posX/30),
    })
    $('.p32').css({
      bottom : -270 + (posY/20),
      right : 110 + (posX/20)
    })
    $('.p33').css({
      bottom : -130 + (posY/40),
      right : -70 + (posX/40)
    })

    $('.p41').css({
      bottom : -120 + (posY/40),
      right : 20 + (posX/40)
    })
    $('.p42').css({
      bottom : -180 + (posY/40),
      right : 0 - (posX/40)
    })

  })

})