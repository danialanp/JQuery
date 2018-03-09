
$("document").ready(function() {
    $("#anuncio").text("Haz click aqui").width(300).height(300)
    .hide()
    .fadeIn(3000)
});

$("#anuncio").on("click", function(){

    let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];
    let color = colores [Math.floor(Math.random() * colores.length)];
    $("div").css("background-color", color);

});

