$(function(){
  $('header .h_left button').click(function(){
    $('header .h_left button').toggleClass('on')
    $('header .mobile_nav').toggle()
  })
})