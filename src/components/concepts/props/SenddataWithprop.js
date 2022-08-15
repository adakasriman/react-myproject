import React from "react";
import ReciveData from "./RecieveDataFromProps";

function SendData() {
    return ( 
        <div>
            <ReciveData title="It's from props" />
        </div>
     );
}

export default SendData;

// sending data to another componet using attribute.