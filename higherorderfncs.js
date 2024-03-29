// const radius = [1, 2, 3];
// const area = function(radius){
//     return Math.PI * radius * radius;
// }
// const diameter = function(radius){
//     return 2 * radius;
// }
// const calculate = function(radius, logic){ 
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
// const circumeference = function(radius){
//     return 2 * Math.PI * radius;
// }
// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));


// const users = [
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Doe', age: 30},
//     {firstName: 'Jack', lastName: 'Doe', age: 35},
//     {firstName: 'Jill', lastName: 'Doe', age: 40},
//     {firstName: 'Joe', lastName: 'Doe', age: 45},
// ]
// const result = users.map((user) => user.firstName + ' ' + user.lastName)
// console.log(result);


const arr = [1, 2, 3, 4, 5];
const output = arr.filter((num) => num % 2==0) 
console.log(arr);
console.log(output);