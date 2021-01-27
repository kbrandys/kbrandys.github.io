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


oblicz.addEventListener("click", obliczWszystko);

function sredniaUcznia(idUcznia) {
    let oceny = document.getElementById("uczen" + idUcznia).querySelectorAll("[type=number]");
    let sum = 0;
    for (let ocena of oceny) {
        sum += parseFloat(ocena.value);
    }
    return (sum / oceny.length).toFixed(2);
};

// function obliczWszystko() {
//     for (let i = 1; i <= uczniowie.length; i++) {
//         let przedmioty = document.getElementById("uczen" + i).querySelectorAll("[type=number]");
//         for (let j = 0; j < przedmioty.length; j++) {
//             if (przedmioty[j].value == 1) {
//                 uczniowie[i].classList.add("red");
//             }
//             for (let k = 1; k < przedmioty.length; k++) {
//                 if (zajeciaDodatkowe[i].value === "") {
//                 }
//                 else if (zajeciaDodatkowe[i].value === przedmioty[j].className) {
//                     przedmioty[j].value = parseFloat(przedmioty[j].value) + 0.5;
//                     przedmioty[j].classList.add("yellow");
//                 }
//                 for (let x = 0; x < przedmioty.length; x++) {
//                     if (zajeciaDodatkowe[i].value.split(", ")[x] == przedmioty[j].className) {
//                         if (przedmioty[j].value == 6) {
//                         } else {
//                             przedmioty[j].value = parseFloat(przedmioty[j].value) + 0.5;
//                             przedmioty[j].classList.add("pink"); 
//                         }
//                     }
//                 }
//             }
//         }
//         srednia[i].innerText = sredniaUcznia(i);
//         if (sredniaUcznia(i) >= 4.75) {
//             uczniowie[i].classList.add("green");
//         }
//     }
// };

function obliczWszystko() {
    for (let i = 1; i <= uczniowie.length; i++) {
        let przedmioty = document.getElementById("uczen" + i).querySelectorAll("[type=number]");
        for (let j = 0; j < przedmioty.length; j++) {
            if (przedmioty[j].value == 1) {
                uczniowie[i].classList.add("red");
            }
            for (let k = 1; k < przedmioty.length; k++) {
                if (zajeciaDodatkowe[i].value === "") {
                }
                else if (zajeciaDodatkowe[i].value === przedmioty[j].className) {
                    przedmioty[j].value = parseFloat(przedmioty[j].value) + 0.5;
                    przedmioty[j].classList.add("dodatkowe");
                }
                for (let x = 0; x < przedmioty.length; x++) {
                    if (zajeciaDodatkowe[i].value.split(", ")[x] == przedmioty[j].className) {
                        if (przedmioty[j].value == 6) {
                        } else {
                            przedmioty[j].value = parseFloat(przedmioty[j].value) + 0.5;
                            przedmioty[j].classList.add("dodatkowe2"); 
                        }
                    }
                }
            }
        }
        srednia[i].innerText = sredniaUcznia(i);
        if (sredniaUcznia(i) >= 4.75) {
            uczniowie[i].classList.add("green");
        }
    }
};
