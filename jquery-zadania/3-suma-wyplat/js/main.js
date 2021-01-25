
$("#count-sum").click(() => {
    let sum = 0;
    $(".salary").each((index) => {
        let wyplata = $(parseInt($(".salary", "#person" + (index + 1)).text()));
        sum += wyplata[0];
    });
    $("#sum").empty().append(sum);
});


 