let form = document.getElementById("form");

let submitRequest = (event) => {
    event.preventDefault();
    let name = document.querySelector('[name="fname"]');
    let surname = document.querySelector('[name="lname"]');
    console.log(`Imię: ${name.value}, Nazwisko: ${surname.value}`);
}

form.addEventListener("submit", submitRequest); 