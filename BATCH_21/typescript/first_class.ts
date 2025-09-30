// to install tsx use this command:   npm i tsx -g

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