"use client";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function UseEffect() {
    // Purpose: Lifecycle manage ( What are the stages of Lifecycle in react )
    // 1. Koi action perform krna hai jab mera page/component load hoga ( COMPONENT DID MOUNT )
    // 2. Koi action perform krna jab kisi useState ki value change hoti hai ( COMPONENT DID UPDATE ) => SIDE EFFECT
    // 3. Koi action perform krna ho just before component/page unload/remove hota hai ( COMPONENT DID UNMOUNT ) 


    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)
    //  jo bhi chije humne directly yaha console me likhi hai 
    // 1. wo 2 baar run kregi
    // 2. Wo har baar jab koi bhi state update hpga tb bhi run krega 
    console.log("Hello")


    // jab bhi hume koi function call krna hai jo ki exactly once call hona chahiye jab meri page load hoga na ki jab bhi states update honge use effect ( STAGE = COMPONENT DID MOUNT)

    useEffect(() => {
        //  jo bhi aap likhoge wo ( COMPONENT DID MOUNT KI STAGE ME AAEGA)
        console.log("ENTERING PAGE");

        return () => {
            // jo bhi likhenge wo ( COMPONENT DID UNMOUNT)
            console.log("EXIT PAGE");
        }
    }, [])


    // useEffect(() => {
    //     console.log({ counterA })
    // }, [
    //     // Dependecy Array
    //     counterA,
    //     counterB
    // ])


    console.log({ counterA })


    return (
        <div>
            <h1>Use Effect Hook</h1>
            <p>{counterA}</p>
            <p>{counterB}</p>

            <button onClick={() => setCounterA(prev => prev + 1)}>
                Increase A
            </button>
            <br />
            <button onClick={() => setCounterB(prev => prev + 1)}>
                Increase B
            </button>
            <br />
            <Link href={"/"}>HOMEPAGE</Link>

        </div>
    )
}

