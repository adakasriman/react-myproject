import React from "react";
import { useContext } from './UseContextjHook'

function NthComponent() {
    return (
        <div>
            <h4>from the UseContextHook component </h4>

            <div>
                <useContext.Consumer >
                    {value => <div>{value}</div>}
                </useContext.Consumer >
            </div>
        </div>
    );
}

export default NthComponent;