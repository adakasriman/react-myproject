import React, { createContext,useState } from "react";
import NthComponent from "./NthComponent";


export const useContext = createContext();

function UseContextHook() {
     const [value, setvalue] = useState("");
    return (
        <div>
            <div>
                <div><input className="width_25" placeholder="Enter Text" onChange={(e) => setvalue(e.target.value)} /></div>
                <useContext.Provider value={value}>
                    <NthComponent />
                </useContext.Provider>
            </div>
        </div>
    );
}

export default UseContextHook;



/* 
UseContext : It is use to send data from one component to another component without using the props.
 --> To pass the data with help of provider and consumer.
    provider: use to send the data,
    consumer: use to recieve the data.
 note: To pass the data using some attribute variable.    

 --> Props: using props to send data from  one component to another component, we have to pass 
     that data in between the all components.
    --> Supose we want sent data from first component to nth component, we have pass data between 
       components then only we will get that data.
*/