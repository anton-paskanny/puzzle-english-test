<script>
    $('body').on('click', '.face-checkbox', function(event) {
        event.preventDefault();
        $(this).siblings('.face-checkbox').find('.face-checkbox__target').removeClass('face-checkbox__target_status_checked');
        $(this).find('.face-checkbox__target').addClass('face-checkbox__target_status_checked');
    });
</script>