
jQuery(function(jQuery) { // DOM is now read and ready to be manipulated
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 jQuery(container).each(function() {

   $el = jQuery(this);
   jQuery($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

jQuery(window).load(function() {
  equalheight('.eq-blocks');
});


jQuery(window).resize(function(){
  equalheight('.eq-blocks');
});

});










function main() {
	
	
	/*====================================
    counter
    ======================================*/

(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+jQuery/.test(i),u=/^[0-9]+\.[0-9]+jQuery/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

	

(function () {
   'use strict';







    /*====================================
    Show Menu on Book
    ======================================*/
   jQuery(window).bind('scroll', function() {
        var navHeight = jQuery(window).height() - 10;
        if (jQuery(window).scrollTop() > navHeight) {
            jQuery('.navbar-default').addClass('on');
        } else {
            jQuery('.navbar-default').removeClass('on');
        }
    });

    jQuery('body').scrollspy({ 
        target: '.navbar-default',
        offset: 10
    })

  	
  


	/*====================================
    top -menu
    ======================================*/

jQuery('.sidenav nav ul li:has(ul)').addClass('menu-item-has-children');



/*====================================
    text center
    ======================================*/


jQuery(window).resize(function(){

    jQuery('#home-banner .content-row').css({
        position:'relative',
        left: (jQuery(window).width() - jQuery('#home-banner .content-row').outerWidth())/2.6,
        top: (jQuery(window).height() - jQuery('#home-banner .content-row ').outerHeight())/4
    });
	
	
	
	
	

	
    jQuery('.single .entry-header .content, #page-banner .content').css({
        position:'relative',
        left: (jQuery(window).width() - jQuery('.single  .entry-header .content, #page-banner .content').outerWidth())/2,
        top: (jQuery(window).height() - jQuery('.single  .entry-header .content, #page-banner .content ').outerHeight())/2
    });
	
	
	 jQuery(' #page-banner .content').css({
        position:'relative',
        left: (jQuery(window).width() - jQuery(' #page-banner .content').outerWidth())/3,
        top: (jQuery(window).height() - jQuery(' #page-banner .content ').outerHeight())/3
    });
	

});

// To initially run the function:
jQuery(window).resize();



//
//
//
//$(function () {
//    $("div.loader-g").slice(0, 4).show();
//    $("#load-More").on('click', function (e) {
//        e.preventDefault();
//        $("div.loader-g:hidden").slice(0, 4).slideDown();
//        if ($("div.loader-g:hidden").length == 0) {
//            $("#load").fadeOut('slow');
//        }
//        $('html,body').animate({
//            scrollTop: $(this).offset().top
//        }, 1500);
//    });
//});
//
//$('a[href=#load-More]').click(function () {
//    $('html,body').animate({
//        scrollTop: 0
//    }, 600);
//    return false;
//});
//
//$(window).scroll(function () {
//    if ($(this).scrollTop() > 50) {
//        $('.totop a').fadeIn();
//    } else {
//        $('.totop a').fadeOut();
//    }
//});
//










  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    jQuery(window).load(function() {
        var $container = jQuery('#lightbox, #pic-block');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        jQuery('.cat a').click(function() {
            jQuery('.cat .active').removeClass('active');
            jQuery(this).addClass('active');
            var selector = jQuery(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	
	
	
	
	



}());


}
main();