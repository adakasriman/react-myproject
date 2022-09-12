import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Post() {
    const [idData, setIdData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setIdData(data.find(item => item.id === id));
            });
    })

    return (
        <div>
            <div className="displayJustify_center">
               <span className="font_25">Title : </span> 
                <h3>{idData?.title}</h3>
            </div>
            <div className="displayJustify_center">Body : {idData?.body}</div>
        </div>
    );
}

export default Post;