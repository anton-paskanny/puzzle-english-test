$('.checkbox-line_js').on('click', function(event) {
    event.preventDefault();

    if ($(this).find('input').attr('checked')) {
        $(this).find('input').removeAttr('checked');
        $(this).find('.check-box__target').removeClass('check-box__target_checked');
    } else {
        $(this).find('input').attr('checked', 'checked');
        $(this).find('.check-box__target').addClass('check-box__target_checked');
    }
});