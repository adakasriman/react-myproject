import React, { useState } from "react";
import '../../../TodoProject.css'
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoProject(props) {
    const [todos, setTodos] = useState(
        [
            { id: 1, title: "first", complete: true },
            { id: 2, title: "second", complete: false }
        ]
    )

    function addTodo(todo) {
        if (todo) {
            let todoList = [...todos];
            let newObj = {
                id: todos.length ? todoList.length + 1 : 0,
                title: todo,
                complete: false
            }
            todoList.push(newObj)
            setTodos(todoList);
        }
    }

    function completeTodo(completeId) {
        let todoList = [...todos];
        todoList.filter(item => {
            if (item.id === completeId) {
                item.complete = true;
            }
        });
        setTodos(todoList);
    }

    function deleteTodo(id) {
        let todoList = [...todos];
        let index = todoList.findIndex(item => item.id === id);
        todoList.splice(index, 1);
        setTodos(todoList);
    }
    return (
        <div className="todo_project">
            <div className="content">
                <h3>Todo Project</h3>
                <div className="todoListView">
                    {
                        todos.map(todo => (
                            <div className="todo_items" key={todo.id}>
                                <Todo key={todo.id} todo={todo} completeTodo={(id) => completeTodo(id)} deleteTodo={(id) => deleteTodo(id)} />
                            </div>
                        ))
                    }
                </div>
                <div className="toto_form">
                    <TodoForm addTodo={(todo) => addTodo(todo)} />
                </div>
            </div>
        </div>
    );
}

export default TodoProject;