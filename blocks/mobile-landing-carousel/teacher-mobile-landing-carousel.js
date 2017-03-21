jQuery(function($){
  'use strict';
  // -------------------------------------------------------------
  //   Force Centered Navigation
  // -------------------------------------------------------------
  (function () {
    var $frame = $('#mobileLandingCarousel');
    //var $wrap  = $(this);
    var $wrap  = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      //itemNav: 'forceCentered',
      itemNav: 'basic',
      smart: 1,
      //activateMiddle: 1,
      activateOn: 'click',
      pagesBar: $frame.siblings('.mobile-landing-carousel__pages'),
      activatePageOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      // scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 800,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      // prev: $wrap.find('.prev'),
      // next: $wrap.find('.next')
    });
  }());

});