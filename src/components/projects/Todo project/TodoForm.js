import React, { useState } from "react";

function TodoForm(props) {
    const [todoText, setTodoText] = useState("");

   function addingTodo(e) {
        e.preventDefault();
        props.addTodo(todoText);
        setTodoText("");
    }

    return (
        <div className="content">
            <div className="displayJustify_center gap_15">
                <h5 className="" style={{ marginBottom: "2px" }}>Add Todo Here:</h5>
                <div>
                    <form className=" displayFlex_center gap_15" onSubmit={addingTodo}>
                        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Enter Todo" />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TodoForm;