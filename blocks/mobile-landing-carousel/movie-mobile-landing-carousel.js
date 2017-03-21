jQuery(function($){
  'use strict';
  // -------------------------------------------------------------
  //   Force Centered Navigation
  // -------------------------------------------------------------
  (function () {
    var $frame1 = $('#mobileLandingCarousel_1');
    var $frame2 = $('#mobileLandingCarousel_2');
    var $wrap  = $(this);

    var resize = function(){
        var iw1 = $('.movie-mobile__screen .mobile-landing-carousel__item img').first().width();
        var iw2 = $('.movie-mobile__screen .mobile-landing-carousel__item_2 img').first().width();
        $('.movie-mobile__screen .mobile-landing-carousel__item').css('width', Math.ceil(iw1 / $(window).width()) * iw1 + Math.ceil(iw1 * 0.2));
        $('.movie-mobile__screen .mobile-landing-carousel__item_2').css('width', Math.ceil(iw2 / $(window).width()) * iw2 + Math.ceil(iw2 * 0.3));
    }
    resize();

    // Call Sly on frame
    $frame1.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      activateMiddle: 1,
      activateOn: 'click',
      pagesBar: $frame1.siblings('.mobile-landing-carousel__pages1'),
      activatePageOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 1,
      speed: 500,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1
    }).sly('toCenter');

    // Call Sly on frame
    $frame2.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      activateMiddle: 1,
      activateOn: 'click',
      pagesBar: $frame2.siblings('.mobile-landing-carousel__pages2'),
      activatePageOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 1,
      speed: 500,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1
    }).sly('toCenter');

    $(window).resize(function(){
        resize();
        $frame1.sly('reload');
        $frame1.sly('toCenter');
        $frame2.sly('reload');
        $frame2.sly('toCenter');
    });


  }());

});