import React from "react";

function ReciveData(props) {
    return (
        <div>
            data from props:<span style={{fontWeight:600}}>{props.title}</span>
        </div>
    );
}

export default ReciveData;

// recieving the data from the props