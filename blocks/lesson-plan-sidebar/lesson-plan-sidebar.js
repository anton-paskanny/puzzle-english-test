$(document).ready(function() {
    var win = $(window);

    var elMainBlock = $('.b-lesson-plan_small').parent();
    var posMainBlock = elMainBlock.offset().top-35;

    var _animateBlock = function () {
        /*
        var scrolltop = $(document).scrollTop();
        var elPicBlock    = $('.b-lesson-plan_small');
        console.log(scrolltop +' '+ posMainBlock )
        if(scrolltop > posMainBlock ){
            elPicBlock.css({'top' : scrolltop - posMainBlock });
        }
        return;
        */

        var elPicBlock    = $('.b-lesson-plan_small');

        var heightMainBlock    = elMainBlock.height();
        var heightPicBlock     = elPicBlock.height();

        var posEnd = posMainBlock + heightMainBlock - heightPicBlock;
        var scrolltop = $(document).scrollTop();
        var scrollBlock = scrolltop - posMainBlock;

        if ( scrolltop >= posMainBlock && scrolltop < posEnd ) {
            elPicBlock.css({'top' : scrollBlock});
        }
        if ( scrolltop < posMainBlock ) {
            elPicBlock.css({'top' : '40px' });
        }
    }

    win.bind('scroll', _animateBlock);
});