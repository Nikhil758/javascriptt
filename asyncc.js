// function f1() {
//     console.log('f1');
// }
// function f2() {
//     console.log('f2');
// }
// function main() {
//     console.log('main');
//     setTimeout(f1, 0);   
//     f2();
// }
// main();


async function myFunction() {
    console.log( "Hello" );
  }
myFunction();


//Waiting for a Timeout
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//         setTimeout(function() {resolve("HELLO !!");}, 3000);
//     });
//     console.log( await myPromise);
//   }
  
//   myDisplay();