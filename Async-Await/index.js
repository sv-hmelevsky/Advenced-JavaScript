global.fetch = require("node-fetch");

const jsonDataUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Задержка, имулирующая сервер
const delay = (ms) => {
    // r сокращение от resolve, может называться как угодно
    return new Promise(r => setTimeout(() => r(), ms));
}

/* Вариант без Async и Await
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
*/

// По сути данный код повторяет код выше, без лишнего награмождения колбэками
// И выглядит как простой, синхронный код)) Т.к. Async\Await это синт. сахар над promise
async function fetchAsyncTodos() {
    try {
        console.log("Fetch todo's data...");

        await delay(2000);
        const response = await fetch(jsonDataUrl);
        const data = await response.json();

        console.log("Data: ", data);
    } catch(e) {
        console.error("Error: ", e);
    } finally {
        console.info("Finally always here!))");
    }
};

fetchAsyncTodos();