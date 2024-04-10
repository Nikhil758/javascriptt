//es6

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       const date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   const myCar = new Car("Ford", 2014);
//   console.log("My car is " + myCar.age() + " years old.");

//Function parameter default value

// function sum(a=10,b=20) {
//     return a+b;
// }
// let add=sum()
// console.log(add)
// //Template literal
// const str=`Sum is ${add}`;
// console.log(str);

// Destructing assignment

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// console.log(numbers);

//spread
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// var arr3 = [...arr1, ...arr2];
// var arr4 = arr1.concat(arr2);
// console.log(arr3,arr4)

//es7

//includes()
// let arr = ['react', 'angular', 'vue'];
// if (arr.includes('react'))
// {
//     console.log('react existence');
// }

//index operator**
// console.log(2**10);

//es8//

//async...await

// async function init() {
//     console.log('start');
//     await testSync();
//     console.log('End');
//   }
//   init();
//   async function testSync() {
//     const response = await new Promise(resolve => {
//       setTimeout(() => {
//           resolve("async await test...");
//         }, 5000);
//     });
//     console.log(response);
//   }

// // Object.keys()
// var obj = { foo: "bar", baz: 42 };
// console.log(Object.keys(obj));
// // Object.values()
// console.log(Object.values(obj));
// // Object.entries()
// console.log(Object.entries(obj));

// String padding
// console.log('0.0'.padStart(4,'*'))
// console.log('0.0'.padStart(20))
// console.log('0.0'.padEnd(4,'*')) 
// console.log('0.0'.padEnd(10,'*'))

// const obj = {
//     foo: 123,
//     get bar() { return 'abc' }
//   };
   
//   console.log(Object.getOwnPropertyDescriptors(obj));

  //rest

//   function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
//   }
//   myFun("one", "two", "three", "four", "five", "six");

//es9

// Array.prototype.flat()
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());
// console.log(arr2.flat(2));
// console.log(arr2.flat(Infinity));

// Array.prototype.flatMap()
// arr1.flatMap((x) => [x * 2]);