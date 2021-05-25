global.fetch = require("node-fetch");

const jsonDataUrl = "https://jsonplaceholder.typicode.com/todos/1";
const delay = (ms) => {
    // r сокращение от resolve, может называться как угодно
    return new Promise(r => setTimeout(() => r(), ms));
}

function fetchTodos() {
    console.log("Fetch todo's data...");
    return delay(2000)
    .then(() => fetch(jsonDataUrl))
    .then(response => response.json());
}

fetchTodos()
    .then(result => {
        console.log("Data: ", result);
    })
    .catch(error => {
        console.error("Error: ", error);
    });