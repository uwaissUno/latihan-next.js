'use client'

import { useState } from "react"

export default function Template({children} : {children: React.ReactNode}) {
    const [state, setState] = useState(0)
    return (
        <>
        {/* <button onClick={() => setState(state + 1)}>
            Click
        </button>
        <h1>Template : {state}</h1> */}
     {children}
     </>
    )
}