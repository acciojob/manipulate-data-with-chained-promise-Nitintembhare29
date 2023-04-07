//your JS code here. If required.
function manipulateArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredArr = arr.filter((num) => num % 2 === 0);
        document.querySelector('#output').textContent = filteredArr;
        resolve(filteredArr);
      }, 1000);
    });
  })
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedArr = arr.map((num) => num * 2);
        document.querySelector('#output').textContent = multipliedArr;
        resolve(multipliedArr);
      }, 2000);
    });
  });
}
