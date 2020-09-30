const user = {};

const p1 = new Promise(function (resolve) {
  setTimeout(() => resolve("Cherkasy"), 1000)
})

const p2 = function (location) {
  user.city = location;
  return new Promise((resolve) => {
    setTimeout(() => resolve("admin"), 4000)
  })
}

const p3 = function (role) {
  user.role = role;
  user.email = `programmer228${role}.com`;
  return new Promise((resolve) => {
    if (role === "admin") {
      const ID = 2;
      setTimeout(() => resolve(ID), 2000)
    } else {
      throw new Error("в доступе отказано")
    }
  })
}

const p4 = function (x) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ array: ["Саша", "Влад", "Юля", "Андрей", "Богдан"], x: x}), 1000)
  })
}

p1.then(p2)
  .then(p3)
  .then(p4)
  .then((res) => {
    const { array, x } = res
    const numPeople = { 1: 2, 2: 5 }
    if(numPeople[x] <= res.array.length) {
      user.group = res.array;
      return user
    } else {
      throw new Error('превышено число людей в группе')
    }
  })