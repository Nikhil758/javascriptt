//Syntax
// var add = function(x, y) {
//     console.log(x + y);
//   };
// add(2,3);

// let addd = (x, y) => { console.log( x + y )};
// addd(2,4);

//Arguements
// let myFunc = {  
//     showArgs(){ 
//      console.log(arguments); 
//     } 
//    }; 
//    myFunc.showArgs(1, 2, 3, 4);

//    let myFunc = {  
//     showArgs : () => { 
//     console.log(...arguments); 
//    } 
//   }; 
//   myFunc.showArgs(1, 2, 3, 4);

//this keyword
// let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow:() => { 
//     console.log("My name is " + this.name); // no 'this' binding here 
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); // 'this' binding works here 
//     } 
//    };
//    me.thisInArrow(); 
//    me.thisInRegular();
// 
//newkeyword
//let add = (x, y) => console.log(x + y);

// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
// console.log(materials.map((material) => material.length));