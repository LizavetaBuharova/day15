//setTimeout и setInterval
setTimeout(() => {
  console.log("Привет через 3 секунды!");
}, 3000);

const setInt = setInterval(() => {
  console.log("Привет каждые 2 секунды!");
}, 2000);

setTimeout(() => {
  clearInterval(setInt);
}, 6000);

let colors = [
  "red",
  "pink",
  "coral",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "grey",
  "brown",
];

const setColors = setInterval(() => {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}, 5000);
setTimeout(() => {
  clearInterval(setColors);
}, 20000);

//Коллбэки
function fetchData(callback) {
  setTimeout(() => {
    console.log("Получаем данные...");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Данные получены!");
});

function divide(a, b, callback) {
  callback(a, b);
}
divide(10, 1, (a, b) => {
  b === 0 ? console.log("Ошибка деление на ноль") : console.log(a / b);
});

function step1(callback) {
  setTimeout(() => {
    callback("Шаг 1 завершен");
  }, 1000);
}
function step2(str) {
  console.log(str);
}
step1(step2);

//Promises
const promiseMy = new Promise((resolve) => {
  setTimeout(() => resolve("Промис выполнен"), 2000);
});

promiseMy.then((result) => {
  console.log(result);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Ошибка");
  }, 3000);
});

promise.catch((error) => {
  console.error("Невозможно выполнить операцию:", error);
});

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Первый промис");
  }, 1000);
});

promise1
  .then((data) => {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Второй промис");
      }, 1000);
    });
  })

  .then((result) => {
    console.log(result);
  });
