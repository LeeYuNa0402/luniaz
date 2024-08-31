$(document).ready(function(){
   function secTop() {
       var sec0H = $('#main').offset().top - $(window).height() / 3;
       var sec1H = $('#sec1').offset().top - $(window).height() / 3;
       var sec2H = $('#sec2').offset().top - $(window).height() / 3;
       return [sec0H, sec1H, sec2H];
   };
   function hasScrolled() {
       var cp = $(window).scrollTop();
       var secTops = secTop();
       if (cp < secTops[1]) {
           var i = 0;
       } else if (cp >= secTops[1] && cp < secTops[2]){
           var i = 1;
       } else if (cp >= secTops[2]){
           var i = 2;
       }
       switch (i) {
           case 0 :
               lnbLi(i);
               break;

           case 1 :
               lnbLi(i);
               break;

           case 2 :
               lnbLi(i);
               break;
       }
   }

   function lnbLi(e){ // lnb li on/off
       $('.lnb li').removeClass('on');
       $('.event'+e).addClass('on');
   }

   window.fnGotoSec = function(e){
       var selTop = $(e).offset().top;
       $('html, body').animate({scrollTop: selTop }, 50, 'linear');
   }

   $(window).scroll(function() {
       hasScrolled();
   });

   $(window).on('resize', function() {
       lnbW = $('.lnb').outerWidth(true);
       hasScrolled();
       winWidth = window.innerWidth;
   });

   let winWidth = window.innerWidth;


   window.goSec = function(id) {
       var secTop = $('#'+id).offset().top;
       $('html, body').stop().animate({
           scrollTop : secTop
       }, 100)
   }

   //紐⑤컮�� �ㅻ퉬寃뚯씠��
   window.fnToggleNav = function() {
       
       if(winWidth > 1024 && $('#header').hasClass('') == true){
           $('#header').stop().animate({'right':'-270px'});
           $('#header').addClass('on');
       }

       else if( winWidth > 1024 && $('#header').hasClass('on') == true) {
           $('#header').stop().animate({'right':'0'});
           $('#header').removeClass('on');
       }

       else if( winWidth <= 1024 && $('#header').hasClass('') == true) {
           $('.btn-shadow').fadeIn();
           $('#header').stop().animate({'right':'0'});
           $('#header').addClass('on');
           $('#rnb_control').stop().animate({'right':'230px'});
           $('#rnb_control').addClass('on');
       }

       else if( winWidth <= 1024 && $('#header').hasClass('on') == true) {
           $('.btn-shadow').fadeOut();
           $('#header').stop().animate({'right':'-300px'});
           $('#header').removeClass('on');
           $('#rnb_control').stop().animate({'right':'-18px'});
           $('#rnb_control').removeClass('on');
       }
   }

   window.setNav = function() {
       if(winWidth > 1024) {
           $('#header').css({'right':'0'});
           $('#header').css({'left':'auto'});

       } else {
           $('.btn-shadow').fadeOut();
           $('#header').css({'right':'-300px'});
           $('#header').removeClass('on');
           $('#rnb_control').css({'right':'-18px'});
           $('#rnb_control').removeClass('on');
       }
   }

   window.addEventListener('resize', function() {
       winWidth = window.innerWidth;
       setNav();
   });

});