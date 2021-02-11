let hamburger = document.querySelector(".fa-bars");
let navMenu = document.querySelector(".nav-menu");
let closeMenu = document.querySelector(".fa-times");

openMenu = () => {
    console.log("clicked");
    navMenu.classList.toggle("opened");
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", openMenu);



const createAppointment = (appointment) => {
    
    const appointmentMessage = document.querySelector('.contact-errors');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json', 
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(resJSON=>{
        console.log(resJSON);
        appointmentMessage.classList.add('send');
        appointmentMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`
    });
}

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const appointmentMessage = document.querySelector('.contact-errors');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('contact-name').value, 
        email: document.getElementById('contact-email').value,
        service: document.getElementById('contact-service').value,
        phone: document.getElementById('contact-phone').value,
        date: document.getElementById('contact-date').value,
        time: document.getElementById('contact-time').value,
        message: document.getElementById('contact-message').value
    }


    for(let i = 0; i<formFields.length; i++) {
        if(formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }


    if(allFields) {
        createAppointment(appointment);
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = `Wypełnij wymagane pola`;
    }

    
})