import React from "react";
import { useContext } from './UseContextjHook'

function NthComponent() {
    return (
        <div>
            <h4>NthComponent Component</h4>

            <div>
                <useContext.Consumer >
                    {value => <div>data from some component:<span style={{ fontWeight: 600 }}>{value}</span></div>}
                </useContext.Consumer >
            </div>
        </div>
    );
}

export default NthComponent;


// Here getting the data from the useContextHook component.
