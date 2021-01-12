class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        if (this.przeczytana) {
            return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`;
        }
        else {
            return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana.`;
        }
    }
};

let ksiazka1 = new Ksiazka("Romeo i Julia", "William Shakespeare", true);
ksiazka1.opiszKsiazke();

let ksiazka2 = new Ksiazka("Zbrodnia i kara", "Fiodor Dostojewski", false);
ksiazka2.opiszKsiazke();

let ksiazka3 = new Ksiazka("Wyznania Gejszy", "Arthur Golden", false);
ksiazka3.opiszKsiazke();


let tablica = [ksiazka1, ksiazka2, ksiazka3];
console.log(tablica);

let iloscPrzeczytanych = (tablica) => {
    let sum = 0;

    for (let i = 0; i < tablica.length; i++) {
        console.log(tablica[i].opiszKsiazke());

        if (tablica[i].przeczytana) {
            sum += 1;
        }
    }
    console.log(sum);
};

iloscPrzeczytanych(tablica);