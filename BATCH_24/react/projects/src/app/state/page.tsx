"use client"
import React, { useState } from 'react'

export default function State() {
    const names = "Vijay";
    const [name2, setName2] = useState("Vijay2")

    const [cars, setCars] = useState(["Maruti", "Volvo", "BMW"])

    const [, setPerson] = useState({
        name: "Vijay",
        age: 25,
        city: "Mumbai"
    }) 

    const [persons, setPersons] = useState([
      {
        id: 1,
        name: "Vijay",
        age: 25,
        city: "Mumbai",
      },
      {
        id: 2,
        name: "Vijay2",
        age: 25,
        city: "Mumbai",
      },
      {
        id: 3,
        name: "Vijay3",
        age: 25,
        city: "Mumbai",
      },
    ]);

    // const [personsModified, setPersonsModified] = useState([
    //   `<p>${persons[0].name} ${persons[0].age} ${persons[0].city}</p>`,
    //   `<p>${persons[1].name} ${persons[1].age} ${persons[1].city}</p>`,
    //   `<p>${persons[2].name} ${persons[2].age} ${persons[2].city}</p>`,
    // ]);
    // const [personsModified, setPersonsModified] = useState([
    //   `<p>${persons[0].name} ${persons[0].age} ${persons[0].city}</p>`,
    //   `<p>${persons[1].name} ${persons[1].age} ${persons[1].city}</p>`,
    //   `<p>${persons[2].name} ${persons[2].age} ${persons[2].city}</p>`,
    // ]);


  return (
    <div>
      page
      <p>Hello {names}</p>
      {/* <p>Hello {name2}</p>
      <div>{cars}</div>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.city}</p> */} 
      {/* <div>{persons[0].name}</div>
      <div>{persons[1].name}</div>
      <div>{persons[2].name}</div> */}
      <ul>
        {persons.map((e)=>{    
    return (
      <li key={e.id}>
        <p>{e.name}</p>
        <p>{e.age}</p>
        <p>{e.city}</p>
      </li>
    );})}
    </ul>
    </div>
  );
}
