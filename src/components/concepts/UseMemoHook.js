import React, { useState, useMemo } from "react";
import GetFormData from "./GetFormData";

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [number, setNumnber] = useState(1);

    let multipleNumber = useMemo(() => {
        return multipleWithFive(number)
    }, [number]);

    return (

        <div>
            <>
                count:{count}
                <br/> 
                <button onClick={() => setCount(count + 1)}>increase count</button>
                <br/> 
            </>

            <button onClick={() => setNumnber(number + 2)}>increase count</button>
            <br/> 
            {multipleNumber}
        </div>

    );
}

export default UseMemoHook;


function multipleWithFive(number) {
    console.log("multipleWithFive function is calling");
    let value = 5;
    return value *= number;
}
/*

useMemo: This hook is help to , when we want render Function or component that time only
 it will be render component or funtion.

 --> It's have Two arguments : One is Function and Second dependency argument.

 --> 

 note: Deffently it call's when the component is render.

*/