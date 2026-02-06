// how function behave with array
// we can pass array as argument to funciton

let fn = [
  function () {
    console.log("hello");
  },
  function () {
    console.log("world");
  },
];
fn[0]();
fn[1]();

// example 2
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 45, 3];

function getSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }

  return sum;
}
console.log(getSum(array));

function SumOfArray(array) {
  let sum = 0;
  array.forEach((value) => {
    sum = sum + value;
  });
  return sum;
}

let totalSumm = SumOfArray(array);
console.log(totalSumm);
