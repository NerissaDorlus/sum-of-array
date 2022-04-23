const myArr = [5, 7, 10, 2, 1];

// function sumOfArray(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i]; // result = result + arr[i]
//   }
//   return result;
// }
// console.log(sumOfArray(myArr));

// //--------------------------------------------------------------------------
// function sumOfArray(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//   }
//   return result;
// }
// console.log(sumOfArray(myArr));

//--------------------------------------------------------------------------
const sumOfArray = (arr) => {
  let result = 0;
  for (let n of arr) {
    result += n;
  }
  return result;
};

console.log(sumOfArray(myArr));
