$(document).ready(function () {
    $(".btn").click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                $("body .btn").after('<div id="dane-programisty"></div>');
                $("#dane-programisty").append(
                    `Imię: ${data.imie} <br> 
                    Nazwisko: ${data.nazwisko} <br>
                    Zawód: ${data.zawod}<br>
                    Firma: ${data.firma}`);
        })
    })
});


