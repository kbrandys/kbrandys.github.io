/* let pracownicy = document.getElementsByClassName("pracownik");
let godziny = document.getElementsByClassName("czas");
let stawka = document.getElementsByClassName("stawka");
let wyplata = document.getElementsByClassName("wyplata");
let najlepsi = document.getElementById("najlepsi-pracownicy");

for (let i = 0; i < pracownicy.length; i++) {
    let sum = 0;
    if (godziny[i].value > 160) {
        sum = (160 * stawka[i].value) + ((godziny[i].value - 160) * (2 * stawka[i].value));
        wyplata[i].innerText = sum;
    } else {
        sum = godziny[i].value * stawka[i].value;
        wyplata[i].innerText = sum;
    }
    if (godziny[i].value < 100) {
        pracownicy[i].classList.add("red");
    }

    let tablica = [""];
    for (let i = 0; i < pracownicy.length; i++) {
        tablica[i] = godziny[i].value;
    }
    wynik1 = (tablica.sort(function (a, b) { return a - b }).reverse())[0];
    wynik2 = (tablica.sort(function (a, b) { return a - b }).reverse())[1];
    wynik3 = (tablica.sort(function (a, b) { return a - b }).reverse())[2];

    let stworzListe = document.createElement("p");
    najlepsi.appendChild(stworzListe);

    if (wynik1 == godziny[i].value) {
        stworzListe.innerText = `1. ${pracownicy[i].innerText}`;
    }
    if (wynik2 == godziny[i].value) {
        stworzListe.innerText = `2. ${pracownicy[i].innerText}`;
    }
    if (wynik3 == godziny[i].value) {
        stworzListe.innerText = `3. ${pracownicy[i].innerText}`;
    }
}; */


// let pracownicy = document.querySelectorAll("div[id*=pracownik]");

// for (let pracownik of pracownicy) {
//     console.log(pracownik.querySelector(".stawka"))
// }

// let sortedPracownicy = Array.from(pracownicy);
// console.log(sortedPracownicy);
// console.log(pracownicy);

// sortedPracownicy.sort((a, b) => {

//     let czasA = +a.querySelector(".czas").value;
//     let czasB = +b.querySelector(".czas").value;

//     console.log(czasA);
//     return 0;
// });




let pracownicy = document.querySelectorAll("div[id*=pracownik]");
let godziny = document.getElementsByClassName("czas");
let stawka = document.getElementsByClassName("stawka");
let wyplata = document.getElementsByClassName("wyplata");
let najlepsi = document.getElementById("najlepsi-pracownicy");

for (let i = 0; i < pracownicy.length; i++) {
    let sum = 0;
    if (godziny[i].value > 160) {
        sum = (160 * stawka[i].value) + ((godziny[i].value - 160) * (2 * stawka[i].value));
        wyplata[i].innerText = sum;
    } else {
        sum = godziny[i].value * stawka[i].value;
        wyplata[i].innerText = sum;
    }
    if (godziny[i].value < 100) {
        pracownicy[i].classList.add("red");
    }
};

let tablica = [""];
for (let i = 0; i < pracownicy.length; i++) {
    tablica[i] = godziny[i].value;
}
tablica.sort((a, b) => {
    return a - b
}).reverse();


console.log(tablica)
console.log(tablica[0]);
console.log(tablica[1]);
console.log(tablica[2]);


let wynik1=tablica[0];
let stworzListe = document.createElement("p");
    najlepsi.appendChild(stworzListe);

    if (wynik1 == godziny[i].value) {
        stworzListe.innerText = `1. ${pracownicy[i].innerText}`;
    }
    if (wynik2 == godziny[i].value) {
        stworzListe.innerText = `2. ${pracownicy[i].innerText}`;
    }
    if (wynik3 == godziny[i].value) {
        stworzListe.innerText = `3. ${pracownicy[i].innerText}`;
    }



// for (let pracownik of pracownicy) {
//     // let czasPracownika = pracownik.querySelector(".czas").value;

// function compare(a, b) {
//     if (a mniejsze niż b według kryteriów sortowania)
//        return -1
//     if (a większe od b według kryteriów sortowania)
//        return 1
//     // a równe b
// //     return 0

//  https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/sort

// let sortedPracownicy = Array.from(pracownicy);
// sortedPracownicy.sort((a, b) => {

//     let czasA = +a.querySelector(".czas").value;
//     let czasB = +b.querySelector(".czas").value;
//     if (czasA > czasB){
//     console.log(czasA);
//     console.log(czasB);

//      } return 0;
// });