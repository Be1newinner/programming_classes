// to install tsx use this command:   npm i tsx -g
// typescript = type safety + javascript

let name2: string | number;
name2 = 5 // invalid data type

let names = ["Vijay", "Ajay"];
names.push("some")

let names2: string[] | number[] = [5, 4]
let ages2: number[] = []


type addressType = {
    roomno?: number,
    city?: string
}

type personParams = {
    name: string,
    age: number,
    marks?: number,
    address?: addressType,
}

type personParams2 = {
    name: string,
    age: number,
    marks?: number,
} & addressType;


interface AddressType {
    roomno?: number,
    city?: string
}

interface PersonParams3 extends AddressType {
    name: string,
    age: number,
    marks?: number,
}


const personParams3: PersonParams3 = {
    name: "Vijay",
    age: 27,
    marks: 101,
    roomno: 550,
    city: "delhi"
}



interface PersonParams4 {
    name: string,
    age: number,
    marks?: number,
    address: AddressType
}

const personParams4: PersonParams4 = {
    name: "Vijay",
    age: 27,
    marks: 101,
    address: {
        roomno: 550,
        city: "delhi"
    }
}


interface PersonParams5 {
    name: string,
    age: number,
    marks?: number,
    address: AddressType[]
}


const personParams5: PersonParams5 = {
    name: "Vijay",
    age: 27,
    marks: 101,
    address: [{
        roomno: 550,
        city: "delhi"
    }, {
        roomno: 550,
        city: "delhi"
    }, {
        roomno: 550,
        city: "delhi"
    }]
}

let person: personParams = {
    name: "Vijay",
    age: 25,
    marks: 52
}



let persons: personParams[] = []


function fullname(fname: string, lname: string): string {
    return fname + " " + lname
}

function fullname2(fname: string, lname: string): void {
    console.log(fname + " " + lname)
}

function fullname3({ fname, lname }: personParams): string {
    return fname + " " + lname
}

/*
string
boolean
number
null
undefined
void
 
 */


console.log(person)