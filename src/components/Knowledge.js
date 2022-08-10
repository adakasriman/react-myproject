import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
function Knowledge() {
    const [apiData, setApiData] = useState([]);
    const [isLogedIn] = useState(sessionStorage.getItem("loginvalue"));
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setApiData(data);
            });
    }, [])
    console.log(apiData);


    return (
        <div>
            <div className='loopContent'>
                {apiData.map(item => {
                    return <div  key={item.id}>
                        <h5>
                            {item.title}
                        </h5>
                        <hr/>
                        <p>{item.body}</p>
                    </div>;
                })
                }
            </div>
            {isLogedIn === null && <Navigate to={'/login'} />}
        </div >
    );
}

export default Knowledge;