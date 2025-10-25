"use client";

import { useState } from "react";

export default function UseStatePage() {
    // let count = 5;

    const countState = useState(5);
    const [count, setCount] = useState(5);

    const [person, updatePerson] = useState({
        name: "Vijay",
        age: 25
    }
    )

    const [names, updateNames] = useState(["Vijay", "Ajay"])

    // countState ek array hai jisme 2 items hote hai. 1st item actual value hai jise hum  countState[0] ese access kr sakte hai.
    // dusra variable ek function hai jiski madat se hum pehle variable ki value ko change kr sakte hai ese access krenge countState[1](updated_value)

    /*
    = Jab bhi aapko ek variable create krna hai jo ki
    1. screen pe use show krna hai
    2. wo change ho sakta hai 
    
    to use useState ki madat se banaenge warna const ya let ki madat se hi banana hai!
    
    */

    return (
        <div>
            <h1>Use State Hook</h1>
            <p id="counter_value">{countState[0]}</p>
            <button onClick={() => {
                const prev = countState[0] + 1;
                countState[1](prev)
            }}>Increase</button>

            <p>Counter2 : {count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increase</button>


            <p>{person.name}</p>
            <p>{person.age}</p>

            <button onClick={() => {
                updatePerson((e) => ({ ...e, name: "Vijay Kumar" }))
            }}>Change Name</button>

            <p>{names.join(" => ")}</p>

            <button onClick={() => {
                updateNames((e) => ["Amar", ...e])
            }}>Change Name</button>
        </div>
    )
}

/*
When we change the values of variables though onclick or any other event directly.
then value is chnaged in js dom ( means in the scope of javascript like alert or console) but it is not reflected in Real or HTML DOM. 

It means only javascript can use the updated value! it will not be reflected in the Real Dom.

*/