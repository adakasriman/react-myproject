import React from "react";

function Todo(props) {

    return (
        <div className="todo_item displayFlex_spacebetween">
            <h5 className="" style={{ textDecoration: props.todo.complete ? "line-through" : null }}>
                {props.todo.title}
            </h5>
            <div className="displayFlex_center gap_10">
                <button className="todo_complete" onClick={() => props.completeTodo(props.todo.id)}>Complete</button>
                <button className="todo_delete" onClick={() => props.deleteTodo(props.todo.id)}>X</button>
            </div>
        </div>
    );
}

export default Todo;