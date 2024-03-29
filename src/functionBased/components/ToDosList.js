import React from "react";
import ToDoItem from "./ToDoItem";

const ToDosList = props => {
    return (
        <ul>
            {props.todos.map(todo => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
}

export default ToDosList;