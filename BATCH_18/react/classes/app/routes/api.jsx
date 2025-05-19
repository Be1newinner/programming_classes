import { useEffect } from "react";
import { useState } from "react";

export default function ApiIntegration() {
  const [data, setData] = useState({});

  function handleProductAPI() {
    // Method 1: call back chain
    fetch("https://dummyjson.com/products")
      .then((response) => {
        // Promise ko resolve kiya and use convert karr diya response object mein
        return response.json(); // response object ko Promise mein convert kiya
      })
      .then((data) => {
        // Response Promise ko resolve kiya and use convert karr diya data object mein
        setData(data);
        console.log(data);
      });
  }

  useEffect(() => {
    handleProductAPI();
  }, []);
  data;

  return (
    <div>
      <h1>API Integration</h1>
      <h2>Total Products: {data.total}</h2>
      <h2>Product List</h2>
      <ul>
        {data.products.map((e, index) => {
          return (
            <li key={e.id}>
              {index + 1}. {e.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
