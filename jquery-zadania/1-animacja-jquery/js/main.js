$('#click').click(function () {
    $(".square").animate({ "margin-left": "100px" }, 1500, function () {
        $(".square").animate({ "height": "100px", "width": "100px" }, 1500, function () {
                $(".square").css({"background-color": "blue", "transition": "5s"});
        });
    });
});

setTimeout(function () {
    $(".square").append('<h2>Animacja zakoń- czona :)</h2>')
}, 8000);