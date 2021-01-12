let btn = document.querySelector("button");

const addNewItem = (event) => {

let items = document.getElementById("items");
let itemsNumber = items.children.length;
let ul = document.querySelector("ul");

let addItem = document.createElement("li");
ul.appendChild(addItem);
addItem.innerText = "Item " + (itemsNumber+1);
addItem.setAttribute("class","item");
};

btn.addEventListener("click", addNewItem);