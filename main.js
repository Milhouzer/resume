jQuery(document).ready(function($){
    console.log('jQuery loaded');

    $('#show-curriculum').unbind('click').click(function(){
        if($('.curriculum-content').is(":visible")){
            setTimeout(function(){
                $('.curriculum-content').hide();
            }, 200)

            $('#show-curriculum').removeClass('fa-angle-double-left');
            $('#show-curriculum').addClass('fa-angle-double-right');

        } else {
            setTimeout(function(){
                $('.curriculum-content').show();
            }, 100)

            $('#show-curriculum').removeClass('fa-angle-double-right');
            $('#show-curriculum').addClass('fa-angle-double-left');
            
        }
        $('#curriculum').toggleClass('transform-active');
    });

    $('.skill').unbind('click').click(function(){
        $('.skill-active').removeClass('skill-active');
        $(this).addClass('skill-active');
        console.log($(this))
        $('.skill-content-active').removeClass('skill-content-active')
        $('.skill-' + $(this)[0].dataset.id).addClass('skill-content-active')
    })

    $.getJSON("./text.json", function(text) {
        console.log(text)
    });
});

