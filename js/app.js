$(document).ready(function () {
   
    $('.ryu').mouseenter(function () {
        $('.ryu-still').hide();
//        $('.ryu-cool').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function () {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function () {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function () {
                $(this).hide();
                $(this).css('left', '520px');
            }
        );
    })
    .mouseup(function () {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    
    
    $(document).keydown(function (event) {
        if(event.which==88) {
            $('.ryu-ready').hide();
            $('.ryu-still').hide();        
            $('.ryu-cool').show();
            console.log(event.which);
        }
    })
        .keyup(function () {
            if(event.which==88) {
                $('.ryu-cool').hide();
                $('.ryu-still').show();
//              console.log('keyup seen');
            }
            });
    });


function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}