
$(document).ready(function() {
    $('.radio-button').on('click', function(event) {
        if (!($(this).hasClass('is-checked'))) {
            $(this).parents('.radio-button__group').find('.radio-button').removeClass('is-checked');
            $(this).addClass('is-checked');
            $(this).find('input').prop('checked', 'true');
        }
    });
});