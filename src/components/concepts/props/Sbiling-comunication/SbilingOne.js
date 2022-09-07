import React, { useState } from "react";

function SbilingOne({ setUserValue }) {
    // const [value, setvalue] = useState("");
    return (
        <div className="displayFlex_column gap_10">
            <div>
                <u>Sending data to Sbiling from user input</u>
            </div>
            <input className="width_25" placeholder="Enter Text" onChange={(e) => setUserValue(e.target.value)} />
        </div>
    );
}

export default SbilingOne;