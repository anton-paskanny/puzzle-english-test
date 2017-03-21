jQuery(function($){
  'use strict';
  // -------------------------------------------------------------
  //   Force Centered Navigation
  // -------------------------------------------------------------
  (function () {
    var $frame = $('#mobileLandingCarousel');
    var $wrap  = $(this);

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 2,
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