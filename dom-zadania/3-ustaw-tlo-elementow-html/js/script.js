let paragraph1 = document.getElementById("p1");
let paragraph2 = document.getElementById("p2");
let button = document.querySelector("button");

let setBackground = () => {
    /* paragraph1.classList.add("yellow");
    paragraph2.classList.add("red"); */
    paragraph1.classList.toggle("yellow");
    paragraph2.classList.toggle("red");
}


button.addEventListener("click", setBackground);