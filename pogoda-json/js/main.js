let button = document.querySelector("button");

let getData = () => {

    fetch("https://danepubliczne.imgw.pl/api/data/synop/")
        .then(response => response.json())
        .then(data => {

            let createCityList = document.createElement('ul');
            createCityList.innerHTML = "";
            let body = document.querySelector("body");
            body.appendChild(createCityList);



            for (let i = 0; i < data.length; i++) {
                let createCity = document.createElement('li');
                createCityList.appendChild(createCity);
                createCity.innerText = data[i].stacja + "\n Temperatura: " + data[i].temperatura;

                if (data[i].temperatura >= -10) {
                    createCity.setAttribute('class', 'warm');
                } else { createCity.setAttribute('class', 'cold'); }
            };

        });

}


button.addEventListener("click", getData);




