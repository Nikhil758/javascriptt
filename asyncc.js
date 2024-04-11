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


// async function myFunction() {
//     console.log( "Hello" );
//   }
// myFunction();


//Waiting for a Timeout
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//         setTimeout(function() {resolve("HELLO !!");}, 3000);
//     });
//     console.log( await myPromise);
//     console.log("Heeeeee");
//   }
  
//   myDisplay();

//async-await

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
// }

// getAllData();

//IIFE
(async function (){
        await getData(1);
        await getData(2);
        await getData(3);
        await getData(4);
        await getData(5);
        await getData(6);
    })();