"use client";
import React, { useEffect, useState } from 'react'

export default function UseEffectPage() {
 
    const [CounterA, setCounterA] = useState({
        name: "Vijay",
        value: 0
    })
    const [CounterB, setCounterB] = useState(0)
 
    // alert("Hello")

    // useEffect(()=>{
    // //    Component Did Mount Stage: Page Load
    //     alert("Hello"); 
    // }, [])

    useEffect(() => {
        // Component Did Update
    console.log(CounterA);


    // Component did unmount
    return () => {
        alert("EXITING")
    }
    }, [CounterA]);

 
    return (
      <div>
        <h1>UseEffectPage</h1>
        {/* <p>Counter A = { CounterA}</p> */}
        <p>Counter B = {CounterB}</p>
        <button onClick={() => setCounterB(CounterB + 1)}>Increase Counter B</button>
        <button onClick={() => setCounterA({...CounterA, value: CounterA.value + 1})}>Increase Counter A</button>
      </div>
    );
}
