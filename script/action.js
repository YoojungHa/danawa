$('.hamburger').click(function(){
    $('nav .all_menu_wrap').toggleClass('on');
    $('.hamburger').toggleClass('on')
})

// $('.hamburger.on').click(function(){
//     $('.all_menu_wrap').hide();
//     $('.hamburger').removeClass('on')
// })



// .all_menu_wrap을 제외한 화면 어느곳을 클릭하든 .all_menu_wrap이 닫히게

$(document).click(function(event){
    if(!$(event.target).closest('.hamburger').length && !$(event.target).closest('.all_menu_wrap').length){
        $('nav .all_menu_wrap').removeClass('on');
        $('.hamburger').removeClass('on')
    }
})


let recentTop = parseInt($('.floating_menu').css('top'));
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop)
    if(scrollTop > recentTop){
        $('.floating_menu').stop().animate({top: scrollTop + recentTop})
    } else {
        $('.floating_menu').stop().animate({top: '30%'})
    }
    
})

$('.gotop').click(function(){
    $('html, body').animate({scrollTop:0})
})