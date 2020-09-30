const url = ['I am', 'dont', 'understand', 'what', 'i am', 'doing'];
function request(url) {
  return new Promise((res, rej) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1
    setTimeout(() => res(url), delayTime)
  })
}

function resolver(args) {
  let count = args.length
  return new Promise((res) => {
    const results = {};

    function handler(pres, idx) {
      count--;
      results[idx] = pres;
      if (count == 0) {
        res(Object.values(results))
      }
    }

    args.forEach((url, idx) => {
      const promise = request(url);
      promise.then((pres) => {
        handler(pres, idx);
      })
    })
  })
}

resolver(url).then((res) => {
  return res
})