$("h1").css("color", "red");

$(document).keypress(function(event) {
    $("h1").text(event.key).css("font-size", "1rem");
});

$("button").on("click", function() {
    $("h1").animate({
        opacity: 0.5,
    }).slideUp().animate({
        opacity: 1,
        fontSize: "3rem",
    }).slideDown();
})