$('#move1').click(() => {
    $('#move1').after($(".item").last());
});

$('#move2').click(() => {
    $('#move2').before($(".item").first());
});