let hamburger = document.querySelector(".fa-bars");
let navMenu = document.querySelector(".nav-menu");
let closeMenu = document.querySelector(".fa-times");

openMenu = () => {
    console.log("clicked");
    navMenu.classList.toggle("opened");
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", openMenu);
