$("h1").css("color", "green");
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");

$("button").click(function(button) {
    $(this).css("color", "purple");
    $(this).text("Clicked!");
    $(this).css("background-color", "yellow");
        $("h1").slideToggle(500);
    setTimeout(function() {
        $(this).css("color", "");
        $(this).text("Click me!");
        $(this).css("background-color", "");
    }.bind(this), 500);
});

$("h1").text("Bye!");
$("h1").before("<button>New</button>");
