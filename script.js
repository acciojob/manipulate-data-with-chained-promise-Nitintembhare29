//your JS code here. If required.
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterOutOddNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredNumbers = numbers.filter((number) => number % 2 === 0);
      resolve(filteredNumbers);
    }, 1000);
  });
}

function multiplyEvenNumbersByTwo(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map((number) => {
        return number % 2 === 0 ? number * 2 : number;
      });
      resolve(multipliedNumbers);
    }, 2000);
  });
}

getNumbers()
  .then(filterOutOddNumbers)
  .then(multiplyEvenNumbersByTwo)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = result.join(", ");
  })
  .catch((error) => {
    console.error(error);
  });
