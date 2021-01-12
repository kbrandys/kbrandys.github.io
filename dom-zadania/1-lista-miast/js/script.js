let createCityList = document.createElement('ol');
createCityList.innerHTML = "";

let body = document.querySelector("body");
body.appendChild(createCityList);

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

for (let i=0; i<(cities.length); i++) {
    let createCity = document.createElement('li');
    createCityList.appendChild(createCity);
    createCity.innerText = `${cities[i]}`;
    createCity.setAttribute('class', 'city');
};

console.log(createCityList);