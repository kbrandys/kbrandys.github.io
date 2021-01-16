let matematyka = document.getElementsByClassName("matematyka");
let polski = document.getElementsByClassName("polski");
let biologia = document.getElementsByClassName("biologia");
let geografia = document.getElementsByClassName("geografia");
let fizyka = document.getElementsByClassName("fizyka");
let chemia = document.getElementsByClassName("chemia");
let informatyka = document.getElementsByClassName("informatyka");
let zajeciaDodatkowe = document.getElementsByClassName("zajecia-dodatkowe");

let srednia = document.getElementsByClassName("srednia");
let oblicz = document.getElementById("oblicz");
let uczniowie = document.getElementsByClassName("uczen");

function sredniaUcznia(idUcznia) {
    let oceny = document.getElementById("uczen" + idUcznia).querySelectorAll("[type=number]");
    let sum = 0;
    for (let ocena of oceny) {
        sum += parseFloat(ocena.value);
    }
    return (sum / oceny.length);
};

for (let i = 1; i <= uczniowie.length; i++) {
    srednia[i].innerText = sredniaUcznia(i);
    if (sredniaUcznia(i) >= 4.75) {
        uczniowie[i].classList.add("green");
    }
    let przedmioty = document.getElementById("uczen" + i).querySelectorAll("[type=number]");
    for (let j = 0; j < przedmioty.length; j++) {
        if (przedmioty[j].value == 1) {
            uczniowie[i].classList.add("red");
        }
    }
};



