// Array methods part 2
const products = [
  { id: "p001", name: "Wireless Mouse", price: 899, category: "Electronics" },
  { id: "p002", name: "Mechanical Keyboard", price: 3499, category: "Electronics" },
  { id: "p003", name: "Water Bottle 1L", price: 499, category: "Home" },
  { id: "p004", name: "Notebook A5", price: 129, category: "Stationery" },
  { id: "p005", name: "Bluetooth Earbuds", price: 1799, category: "Electronics" },
  { id: "p006", name: "T-Shirt Cotton", price: 699, category: "Apparel" },
  { id: "p007", name: "Coffee Mug", price: 299, category: "Home" },
  { id: "p008", name: "USB-C Cable 1m", price: 199, category: "Electronics" },
  { id: "p009", name: "Backpack 20L", price: 1499, category: "Accessories" },
  { id: "p010", name: "Fitness Band", price: 2199, category: "Wearables" }
];

const arr = [4,8,9,50,12,65];

arr.slice(2,4); // output = [9, 50]

arr.splice(3,0,"Vijay");
arr.splice(3,0,"Vijay", "Ajay");
arr.splice(3,0, ...[4,5,8,9,6,60]);
arr.splice(3,4);

arr.includes("vijay");

arr.find((item, index)=>{
    return item > 10;
})


arr.findLast((item, index)=>{
    return item > 10;
})

arr.findIndex((item, index)=>{
    return item > 10;
})


arr.findLastIndex((item, index)=>{
    return item > 10;
})

products.find((item, index)=>{
    return item.price < 700
})

for (const item in products){
    console.log(item)
}

for (const item in products){
    console.log(products[item])
}

for (const item of products){
    console.log(item)
}

products.forEach((item, index)=>{
    console.log(item)
})
