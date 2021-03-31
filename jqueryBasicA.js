$(document).ready(function(){
    $('#addClass button').click(function(){
        $('#paragraph1').css("color", "red");
    })
    $('#slideToggle button').click(function(){
        $( '#slideToggle img' ).slideToggle( "slow" );
    })
    $('#append button').click(function(){
        $( '#append p' ).append( "Hello!");
    })
})