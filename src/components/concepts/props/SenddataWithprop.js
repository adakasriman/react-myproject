import React, { useState } from "react";
import ReciveData from "./RecieveDataFromProps";

function SendData(props) {
    const [uservalue, setUserValue] = useState();
    const [valueFromparent, setValueFromparent] = useState();

    return (
        <div>
            <div className="displayJustify_center">
                <div className="displayFlex_column gap_10 width_50">
                    <h2>Parent component</h2>
                    <input className="width_25" placeholder="Enter Text" onChange={(e) => setUserValue(e.target.value)} />
                    <div style={{marginTop:15}}>
                        data from Child:<span style={{ fontWeight: 600 }}>{valueFromparent}</span>
                    </div>
                </div>
                <div className="displayFlex_column gap_10 width_50">
                    <h2>child component</h2>
                    <div>
                        <ReciveData uservalue={uservalue} valueToParent={(inputValue) => setValueFromparent(inputValue)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SendData;

// sending data to another componet using attribute.