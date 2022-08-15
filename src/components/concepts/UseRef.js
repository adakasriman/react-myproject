import React, { useRef } from "react";

function UseRef() {
    let userInpuData = useRef(null);
    function changeNameButton(e) {
        e.preventDefault();
        console.log(userInpuData.current.value);
        userInpuData.current.value= "";
        userInpuData.current.focus();
    }
    return (
        <div>
            <form onSubmit={changeNameButton}>
                <input ref={userInpuData} type="text" placeholder="enter name" />
                <button type="submit">changes</button>
            </form>
        </div>
    );
}

export default UseRef;



/*
useRef : This hook is help to get value from the input field and also help to not render whole component.

-->It hava more future's then useState.like,
   --> Autofocus the inpu field.
   --> It stores the previous value.
   --> It is not render the whole component.
*/