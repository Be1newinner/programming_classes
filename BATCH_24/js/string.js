let name = "Vijay Kumar";

/*
console.log(name);
console.log(name[0]);
console.log(name[1]);

// length count
console.log(name.length);

for(let i = 0; i < name.length; i++){
console.log(name[i]);
}

let name2 = "V";
name2 += "i";
name2 += "j";
name2 += "a";
name2 += "y";


let name3 = "";

for(let i = 0; i < name.length; i++){
if(i%2==1){
 name3 += name[i];
} 
}

for(let i = name.length - 1; i >= 0 ; i--){
 name3 += name[i];
}

// console.log(name3)


function reverseName(name){
    let name2 = "";
    for(let i = name.length - 1; i >= 0 ; i--){
        name2 += name[i];
    }
console.log(name2)
}


reverseName("Vijay");
reverseName("Mohit");

*/

// check if a string exist in a big string   
// console.log(name.includes("vijay"));
// console.log(name.includes("Vijay"));

// convert string into lower or upper
// const result = name.toLowerCase();
// const result = name.toUpperCase();


// startsWith and endsWith

// const result = name.toLowerCase().startsWith("vij")

// const result = name.toLowerCase().endsWith("mar")

// indexOf to check index of occurence

// const result = name.includes("Kum");
// const result = name.indexOf("Kum");
// const result = name.indexOf("a");
// const result = name.lastIndexOf("a");


// replace the string
// const result = name.replace("Vi", "A")
// const result = name.replace("a", "_")
// const result = name.replaceAll("a", "_")

// slicing string (last index is not included)
// const result = name.slice(0,6);
// const result = name.slice(4,8);
// substr takes length of new string as second argument
// const result = name.substr(4,5);



// split (string) and join (Array)
// split => converts string into array
// join => converts array into string

// const result = name.split();
// const result = name.split("");
const result = name.split("a");
const result2 = result.join("___");



console.log(result);
console.log(result2);
