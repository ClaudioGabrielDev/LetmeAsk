import { useState } from "react";

export function Button (){
    const [counter, maisum] = useState(0)

    function increment(){
        maisum(counter +1)
        console.log(counter)
    }

    return(
        <button onClick={increment}>{counter}</button>
    );
}