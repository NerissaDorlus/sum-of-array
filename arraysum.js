const myArr = [5, 7, 10, 2, 1];

function sumOfArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sumOfArray(myArr));
