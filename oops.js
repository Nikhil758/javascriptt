// Encapsultion

// class person {
// 	constructor(name, id) {
// 		this.name = name;
// 		this.id = id;
// 	}
// 	add_Address(add) {
// 		this.add = add;
// 	}
// 	getDetails() {
// 		console.log(`Name is ${this.name}, Address is: ${this.add}`);
// 	}
// }
// let person1 = new person('Mukul', 21);
// person1.add_Address('Delhi');
// person1.getDetails();

// Abstraction

// function person(fname, lname) {
// 	let firstname = fname;
// 	let lastname = lname;

// 	let getDetails_noaccess = function () {
// 		return (`First name is: ${firstname} Last name is: ${lastname}`);
// 	}

// 	this.getDetails_access = function () {
// 		return (`First name is: ${firstname}, Last name is: ${lastname}`);
// 	}
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());

// Inheritance

// class person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	toString() {
// 		return (`Name of person: ${this.name}`);
// 	}
// }
// class student extends person {
// 	constructor(name, id) {
// 		super(name);
// 		this.id = id;
// 	}
// 	toString() {
// 		return (`${super.toString()},Student ID: ${this.id}`);
// 	}
// }
// let student1 = new student('Mukul', 22);
// console.log(student1.toString());

// Polymorphism

//Method Overriding

// class firstClass {
// 	add() {
// 		console.log("First Method")
// 	}
// }
// class secondClass extends firstClass {
// 	add() {
// 		console.log(30 + 40);
// 	}
// }
// class thirdClass extends secondClass {
// 	add() {
// 		console.log("Last Method")
// 	}
// }
// let ob = new firstClass();
// let ob2 = new secondClass();
// let ob3 = new thirdClass();
// ob.add();
// ob2.add();
// ob3.add();

// Method Overloading

// function add(a, b) {
//     if (typeof a === "number" && typeof b === "number") {
//       return a + b;
//     } else if (typeof a === "string" && typeof b === "string") {
//       return a + b;
//     } else {
//       return "Invalid arguments";
//     }
//   }
//   console.log(add(2,3));
//   console.log(add('2','3'));
//   console.log(add(true));