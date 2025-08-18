// fetch function by default returns a promise in pending state
// const response = fetch("https://jsonplaceholder.typicode.com/todos/");

// console.log(response)

// How to resolve a Promise 
// method 1
fetch("https://jsonplaceholder.typicode.com/todos/").then((response)=>{
	// here response variable will have response object
	// convert response into text/string
	// return response.text()
	
	// convert response into javascript data type
	return response.json()
}).then((data)=>{
	console.log(data.filter((item,index)=>item.completed === true).length);
}).catch((error)=>{
	console.log("ERROR OCCURED!", error.message);
}).finally(()=>{
	console.log("something happend!")
})

console.log("API is called!");