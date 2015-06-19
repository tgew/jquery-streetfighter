$(document).ready(function () {
    $('.ryu').mouseenter(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function () {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function () {
        console.log('mouse down');
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
        // play h sound
        // animate h
    })
    .mouseup(function () {
        console.log('mouse up');
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        
    });
    
});
