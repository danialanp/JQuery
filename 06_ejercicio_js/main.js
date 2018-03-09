$("#cerrar").on("click", function(){

    $("#banner").remove();

});

$("img").on("click", function(){

    $(this).replaceWith("<p class='texto'>Agregado al carrito</p>");
});