//Promises
// let promise = new Promise(function (resolve, reject) {
//     const x = "gg";
//     const y = "gg"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });
// promise.
//     then(function () {
//         console.log('Success');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });

    

// let promise = new Promise(function (resolve, reject) {
//     reject('Promise Rejected')
// })
 
// promise
//     .then(function (successMessage) {
//         console.log(successMessage);
//     }, function (errorMessage) {
//         //error handler function is invoked 
//         console.log(errorMessage);
//     });



// let promise = new Promise(function (resolve, reject) {
//     reject('Promise Rejected')
// })
 
// promise
//     .then(function (successMessage) {
//         console.log(successMessage);
//     })
//     .catch(function (errorMessage) {
//         console.log(errorMessage);
//     });

// function getData1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("Success");
//         },4000);
//     });
// }
// function getData2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("Success");
//         },4000);
//     });
// }
// console.log("Fetching Data1....")
// getData1().then((res)=>{
//     console.log("Fetching Data2....")
//     getData2().then((res)=>{})
// })

//promise chain

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },3000);
    });
}
console.log("Fetching data1......")
getData(1).then((res)=>{
    console.log("Fetching data2......")
    return getData(2);
}).then((res)=>{
    
});