function podniesDoPotegi(podstawa, wykladnik) {
    let wynik = 1;
    for (let i = 0; i < wykladnik; i++) {
        wynik *= podstawa;
    }
    return wynik;
};

console.log(podniesDoPotegi(3, 3));
console.log(podniesDoPotegi(2, 4));
console.log(podniesDoPotegi(3, 2));
console.log(podniesDoPotegi(2, 3));
console.log(podniesDoPotegi(6, 10));

/*
3^3= 3*3*3 = 27
2^4 = 2*2*2*2 = 16
3*3=9
2*2*2=8
6*6*6*6*6*6*6*6*6*6= 60466176*/