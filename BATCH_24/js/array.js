let name1 = "Vijay";
let name2 = "Ajay";
let name3 = "Sonu";
let name4 = "Monu";
let name5 = "Rajat";

//1. Create array with elements
const names2 = [
				"Vijay", 
				"Ajay", 
				"Sonu", 
				"Monu", 
				"Rajat"
				];

//2. Create array without elements
const names = [];

//3. add single item in array in last
names.push("Vijay")
names.push("Ajay")


//4. add multiple items in array in last
names.push("Sonu", "Monu", "Rajat")
// method

/*
//5. remove last item from array
names.pop()
names.pop()
names.pop()
*/


//6. Read all items of array
console.log(names);

//7. Read single item of array based on 0-index
console.log(names[3]);

//8. Count number of items in array
console.log(names.length)


//9. Update single item of array in an index
// names[2] = "Sonu Kumar";
// names[1] += " Kumar";



console.log(names);



//10. Loop through an array
for(let i = 0;i < names.length; i++){
	// console.log(names[i]);
	names[i] += " Kumar"
}


console.log(names);