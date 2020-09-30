// Task 1
// Функция multiplier принимает  один параметр - x и возвращает анонимную функцию, которая принимает один параметр - y,
// и возвращает произведение x * y.

function multiplier(x) {
  return function(y) {
    return x * y
  }
}

// Task 2
// Функция makeRandomFn принимает массив чисел и возвращает функцию,
// которая при вызове возвращает любое число, с переданного ей, массива.

function makeRandomFn(someArray) {
  return function() {
    let randomKey = Math.floor(Math.random() * someArray.length);
    return someArray[randomKey]
  }
}

// Task 3
// Функция makeRandomFromArrayAndArgumentsFn принимает массив или аргументы через запятую, из которых создает массив, 
// и вызывает анонимную функции, возвращающую любое число c переданного ей, массива.

function makeRandomFromArrayAndArgumentsFn(someArray) {
  if (Array.isArray(someArray)) {
    return function() {
      let randomKey = Math.floor(Math.random() * someArray.length);
      return someArray[randomKey]
    }
  } else {
    let arr = [].slice.call(arguments);
    return function() {
      let randomKey = Math.floor(Math.random() * arr.length);
      return arr[randomKey]
    }
  }
}