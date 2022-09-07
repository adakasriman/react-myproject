import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Popup from "../../popup-component/Popup";
function CurdOpertaions() {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [buttonType, setButtonType] = useState(true);
    const [obj, setObj] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setApiData(data));
    }, [])
    function viewpost(id) {
        navigate(`/post/${id}`);
    }
    function editPost(id) {
        let obj = apiData.find(item => item.id == id);
        setObj(obj);
        setTitle(obj.title);
        setBody(obj.body);
        setButtonType(false);
        setIsOpen(!isOpen);
    }

    function updatePost(e) {
        e.preventDefault();
        let index = apiData.findIndex(item => item.id == obj.id);
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: obj.id,
                title,
                body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((resData) => {
                apiData.splice(index, 1, resData);
                setIsOpen(!isOpen);
            }
            );
    }
    function deletePost(e, id) {
        e.preventDefault();
        // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
            method: 'DELETE',
            body: JSON.stringify({
                id
            }),
        })
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
            }
            );
    }

    function popup() {
        setButtonType(true);
        setIsOpen(!isOpen);
    }




    function addPost(e) {  // onsubmit 
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                apiData.push(data);
                setTitle("");
                setBody("");
                setIsOpen(!isOpen);
            });
    }


    return (
        <div className="post_container">
            <div className="add_btm">
                <button onClick={() => popup()}>Add Post</button>
            </div>
            <div className="curdOperations">

                {
                    apiData.map(item => {
                        return <div className="item" key={item.id}>
                            <a onClick={() => viewpost(item.id)}>
                                <div>
                                    <h5>
                                        {item.title}
                                    </h5>
                                    <hr />
                                    <p className="">{item.body}</p>
                                </div>
                            </a>
                            <div className="display_bottom">
                                <div>
                                    <button onClick={() => editPost(item.id)}>edit</button>
                                    <button onClick={(e) => deletePost(e, item.id)}>Delete</button>
                                </div>
                            </div>

                        </div>;
                    })

                }
            </div>
            {
                isOpen && <Popup content={<>
                    <h3>Add Post</h3>
                    <div>
                        <form className="displayFlex_column">
                            <label>Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                            <label>body</label>
                            <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="Enter Body" />
                            <div className='addAndUpdate'>
                                {
                                    buttonType ? <button type="submit" onClick={(e) => addPost(e)}>add</button> : <button type="submit" onClick={(e) => updatePost(e)}>Update</button>
                                }
                            </div>
                        </form>
                    </div>
                </>} handleClose={popup} />
            }
        </div>
    );
}

export default CurdOpertaions;