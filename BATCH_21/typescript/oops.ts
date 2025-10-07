// Types of programming
// OOPS = Object oriented programming languages.
// Java, C++, Go, Rust, Python, javascript

// Function based programming languages
// => Java, C, Javascript, python e.g. console.log()

// What is an Object?
// Everything around us except god and ghost is an object.
// Every object has some features, behaviours and properties.

// What is a class?
//  Class is basically a blueprint of an object!


// Class => Being 
// Sub Class => Non Living Beings, Living Beings
// Sub classez => Living Beings ( Non Plants, plants )
// 


// Creating Blank Class
class Human {
    // Identity, 
    // state variables ( attributes, properties ), 
    // behaviour ( METHODS , FUNCTIONS ) 
}

//  Creating an Object or an Instance based on a class.
const vijay = new Human();

// Creating class with states and Methods
// class Car {
//     model = ""
//     year = 0
//     price = 0
//     type = ""
// }

class Car {
    // States ( MEANS CREATING VARIABLES )
    model
    year
    price
    type
    owner

    // constructor is a speical function that define "values" of the "initial state" of an object when creating from a class
    // When Does constructor is called? : When the object is created for the first time. Constructor is run only for one time!
    // do we have to create a constructor to run in at creating instance of object?
    // No. Constructor is always created "autmatically" or "manually" at the time of creating class.

    constructor(iOwner, iModel, iYear, iType, iPrice = 0) {
        this.model = iModel;
        this.price = iPrice;
        this.year = iYear;
        this.type = iType;
        this.owner = iOwner;

    }
}

const marutiSuzuki = new Car("RITU", "SUZUKI", 2025, "AUTOMATIC", 500000,);
const defender = new Car("LALIT", "DEFENDER", 2026, "MANUAL", 5000000,);
const audi = new Car("ROHIT", "AUDI", 2027, "MANUAL", 4900000,);
const jaguar = new Car("AMAR", "JAGUAR", 2028, "MANUAL", 6000000);
const scooty = new Car("VIJAY", "JUPITER", 2029, "MANUAL");

console.log(scooty);

console.log(
    marutiSuzuki.model,
    marutiSuzuki.price,
    marutiSuzuki.type,
    marutiSuzuki.year
);