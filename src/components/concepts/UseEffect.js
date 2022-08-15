import React, { useState, useEffect } from "react";

function UseEffect() {
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [showName, setShowName] = useState("sriman");
    useEffect(() => {
        setMessage(showName);
    }, [showName])

    function changeNameButton(e) {
        e.preventDefault();
        setShowName(userName);
        setUserName("");
    }
    return (
        <div>
            <h4>Change User Name</h4>
            Name: {showName}
            <br /> message: User Name is <span style={{ fontWeight: 600 }}>{message}</span>
            <br />
            <form onSubmit={changeNameButton}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="enter name" />
                <button type="submit">changes</button>
            </form>
        </div>
    );
}

export default UseEffect;


/*

useEffect: Is is a life cycle hook, If means it call the after return method is render in DOM.
 -->It have two arguments, one is function and second is dependency.
 -->when dependency changes the function argument is call.

 Note: It call only once,

 *--> useMemo work functionality is also same but usememo call during the render to DOM.

*/