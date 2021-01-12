let newsletterForm = document.getElementById("newsletter-form");
let zgodaAll = document.getElementById("zgoda-all");

let validate = (event) => {

    let name = document.getElementById("name");
    let errors = document.getElementById("errors");
    let email = document.getElementById("email");
    let zgoda1 = document.getElementById("zgoda1");

    errors.innerHTML = "";

    if (name.value.trim() === "") {
        let createError = document.createElement("li");
        createError.innerText = "Wpisz imię i nazwisko!";
        errors.appendChild(createError);
    }

    if (email.value.trim() === "") {
        let createError = document.createElement("li");
        createError.innerText = "Wpisz adres email!";
        errors.appendChild(createError);
    }

    if (!email.value.includes("@")) {
        let createError = document.createElement("li");
        createError.innerText = "Email musi zawierać @!";
        errors.appendChild(createError);
    }

    if (!zgoda1.checked) {
        let createError = document.createElement("li");
        createError.innerText = "Musisz wyrazić zgodę 1!";
        errors.appendChild(createError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
}

let wyrazWszystkieZgody = (event) => {
    let zgoda1 = document.getElementById("zgoda1");
    let zgoda2 = document.getElementById("zgoda2");

    zgoda1.checked = event.target.checked;
    zgoda2.checked = event.target.checked;

    zgoda1.disabled = event.target.checked;
    zgoda2.disabled = event.target.checked;
}

newsletterForm.addEventListener("submit", validate);
zgodaAll.addEventListener("change", wyrazWszystkieZgody);



