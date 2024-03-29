// function myFirst() {
//     myDisplayer("Hello");
//   }
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
//   function myDisplayer(data){
//     console.log(data);
//   }
//   myFirst();
//   mySecond();


// function myDisplayer(some) {
//     console.log(some);
//   }
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
//   myCalculator(5, 6, myDisplayer);


// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// console.log(posNumbers);
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }