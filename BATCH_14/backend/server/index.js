
// const data = require("./src/offline/products.json");
const express = require("express");

const productsData = [
    {
        "id": "1",
        "title": "Wireless Headphones",
        "description": "High-quality wireless headphones with noise cancellation.",
        "image": "https://via.placeholder.com/150?text=Headphones",
        "stock": 25,
        "sku": "WH-001",
        "price": 59.99,
        "mrp": 79.99
    },
    {
        "id": "2",
        "title": "Smart Watch",
        "description": "Stylish smart watch with fitness tracking and notifications.",
        "image": "https://via.placeholder.com/150?text=Smart+Watch",
        "stock": 15,
        "sku": "SW-002",
        "price": 129.99,
        "mrp": 159.99
    },
    {
        "id": "3",
        "title": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with deep bass and long battery life.",
        "image": "https://via.placeholder.com/150?text=Speaker",
        "stock": 40,
        "sku": "BS-003",
        "price": 39.99,
        "mrp": 49.99
    },
    {
        "id": "4",
        "title": "Digital Camera",
        "description": "Compact digital camera with high resolution and optical zoom.",
        "image": "https://via.placeholder.com/150?text=Camera",
        "stock": 8,
        "sku": "DC-004",
        "price": 299.99,
        "mrp": 349.99
    },
    {
        "id": "5",
        "title": "Laptop Backpack",
        "description": "Durable and spacious backpack with a dedicated laptop compartment.",
        "image": "https://via.placeholder.com/150?text=Backpack",
        "stock": 50,
        "sku": "LB-005",
        "price": 49.99,
        "mrp": 69.99
    },
    {
        "id": "6",
        "title": "Gaming Mouse",
        "description": "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
        "image": "https://via.placeholder.com/150?text=Gaming+Mouse",
        "stock": 30,
        "sku": "GM-006",
        "price": 24.99,
        "mrp": 34.99
    },
    {
        "id": "7",
        "title": "External Hard Drive",
        "description": "1TB external hard drive with fast data transfer speeds.",
        "image": "https://via.placeholder.com/150?text=Hard+Drive",
        "stock": 20,
        "sku": "HD-007",
        "price": 79.99,
        "mrp": 99.99
    },
    {
        "id": "8",
        "title": "Fitness Tracker",
        "description": "Lightweight fitness tracker with heart rate monitoring.",
        "image": "https://via.placeholder.com/150?text=Fitness+Tracker",
        "stock": 45,
        "sku": "FT-008",
        "price": 19.99,
        "mrp": 29.99
    },
    {
        "id": "9",
        "title": "Smartphone Gimbal",
        "description": "3-axis gimbal stabilizer for smooth smartphone video recording.",
        "image": "https://via.placeholder.com/150?text=Gimbal",
        "stock": 12,
        "sku": "SG-009",
        "price": 89.99,
        "mrp": 109.99
    },
    {
        "id": "10",
        "title": "Wireless Charger",
        "description": "Fast wireless charger compatible with various smartphone models.",
        "image": "https://via.placeholder.com/150?text=Charger",
        "stock": 35,
        "sku": "WC-010",
        "price": 29.99,
        "mrp": 39.99
    }
]

const app = express();
const PORT = 8000;

// console.log(data)

app.use(express.json())

app.get("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! GET")
})

app.post("/", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("WELCOME TO MY HOMEPAGE! POST")
})

app.put("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! PUT")
})

app.patch("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! PATCH")
})

app.delete("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! DELETE")
})

app.get("/contact", (X-Powered-Byreq, res) => {
    res.send("WELCOME TO MY CONTACT!")
})

app.get("/about", (req, res) => {
    const query = req.query.name;
    console.log(query);
    res.send("WELCOME TO MY ABOUT!")
})

app.get("/about/:slug/blog/:id", (req, res) => {
    const params = req.params.slug;
    const id = req.params.id;
    // console.log(params)
    res.send(`WELCOME TO MY ABOUT ${params.toUpperCase()}!`)
})

app.get("/products", (req, res) => {
    res.status(200).send({
        data: productsData,
        message: "Products fetched successfully!"
    })
})

app.listen(PORT, () => {
    console.log("HELLO SERVER IS STARTED!")
})
