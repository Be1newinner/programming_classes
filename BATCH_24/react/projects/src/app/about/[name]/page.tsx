import React from "react";

export default async function AboutPage({ params }) {
  const data = await params;

  console.log(data.name);

  return (
    <div>
      <h1>About Detail Page</h1>
      <p>{data.name}</p>
    </div>
  );
}
