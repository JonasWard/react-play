import React, {useEffect, useState} from "react";

import { v4 as uuidv4 } from "uuid";

import Header from "./Header";
import InputToDo from "./InputToDo";
import ToDosList from "./ToDosList";

function getInitialTodos() {
    const savedToDos = JSON.parse(localStorage.getItem("todos"));
    return savedToDos || [];
}

const ToDoContainer = () => {
    const [todos, setToDos] = useState(getInitialTodos());

    const handleChange = id => {
        setToDos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    const delTodo = id => {
        setToDos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    }

    const addToDoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setToDos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setToDos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputToDo addToDoProps={addToDoItem} />
                <ToDosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate}
                />
            </div>
        </div>
    )
}

export default ToDoContainer;