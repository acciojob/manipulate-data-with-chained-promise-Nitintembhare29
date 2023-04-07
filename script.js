//your JS code here. If required.
function processNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers);
    }, 3000);
  })
    .then((numbers) => {
      const filteredNumbers = numbers.filter((number) => number % 2 === 0);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredNumbers);
        }, 1000);
      });
    })
    .then((filteredNumbers) => {
      const multipliedNumbers = filteredNumbers.map((number) =>
        number * 2
      );
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(multipliedNumbers);
        }, 2000);
      });
    });
}

const outputElement = document.querySelector("#output");

processNumbers([1, 2, 3, 4]).then((result) => {
  outputElement.textContent = result;
});

