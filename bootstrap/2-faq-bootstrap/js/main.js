let button = document.getElementsByClassName("accordion-button");
let paragraph = document.getElementsByClassName("accordion-collapse");


let showContent = () => {
    paragraph.addClass("show")

};

button.addEventListener("click", showContent);