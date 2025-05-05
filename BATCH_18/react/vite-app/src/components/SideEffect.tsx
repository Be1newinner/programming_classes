import { useEffect, useState } from "react"

export default function SideEffect() {

    const [count, setCount] = useState(5)
    const [countA, setCountA] = useState(0)

    function increase() {
        setCount(count + 1)
    }
    function increaseA() {
        setCountA(countA + 1)
    }

    // Part 1
    useEffect(() => {
        console.log("COUNT IS CHANGED!", count)
    }, [count, countA])
    // 
    // Part 2
    // useEffect(() => {
    //     console.log("COUNT IS CHANGED!", count)
    // }, [count, countA])
    // 
    // Part 3
    // useEffect(() => {
    //     console.log("COUNT IS CHANGED!", count)
    //     console.log("COUNTA IS CHANGED!", countA)
    // }, [count, countA])
    // 
    // Part 4
    // useEffect(() => {
    //     console.log("COUNT IS CHANGED!", count)
    //     console.log("COUNTA IS CHANGED!", countA)
    // }, [count])

    // useEffect(() => {
    //     console.log("countA IS CHANGED!", countA)
    // }, [countA])

    // Use Effect will have 2 arguments 1. Call BAck function 2. Dependecy array
    // Useeffect will be called only at the time of mount phase
    // any code inside react componenet which is directly being called will be called at every mount and update phase 
    // if we want to call a function at update phase when a useState changes then we will pass that useState inside depencey array of useEffect

    // console.log("hello in Side Effect")
    // console.log("count ", count)
    // console.log("countA ", countA)
    // API CALL

    return (
        <div className="todo_container max-h-[calc(100dvh-100px)] overflow-y-auto">
            <h1>USE Effect</h1>
            <p>Count: {count}</p>
            CountA: {countA}
            <button onClick={increase}>increase</button>
            <button onClick={increaseA}>increase A</button>
        </div>
    )
}