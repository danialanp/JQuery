$("document").ready(function() {
    $("h1").show();
    $("#carrete").hide();
});

$(document).on("click", function(){
    $("h1").hide();
    $("#carrete").show();
    
});

$("img").hover( function() {

    $(this).css("width", "300");

}, function() {

    $(this).css("width", "250");

});