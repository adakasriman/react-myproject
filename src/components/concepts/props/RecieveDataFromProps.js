import React, { useState } from "react";

function ReciveData(props) {
    return (
        <div>
            <div className="display_flex gap_10">
                data from Parent:
                <span style={{ fontWeight: 600 }}>{props.uservalue}</span>
            </div>
            <br />
            <div className="display_flex gap_10">
                <div>Sending data to parent component</div>
                <input className="width_25" placeholder="Enter Text" onChange={(e) => props.valueToParent(e.target.value)} />
            </div>
        </div>
    );
}

export default ReciveData;

// recieving the data from the props