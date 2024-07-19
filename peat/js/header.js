$(function(){
    $('nav ul.gnb li a').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    })

    $('header_wrap').click(function(){
        $('nav ul.gnb li').removeClass('on');
    })

})