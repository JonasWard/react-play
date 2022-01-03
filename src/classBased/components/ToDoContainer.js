import React from "react";

import ToDosList from "./ToDosList";
import Header from "./Header";
import InputToDo from "./InputToDo";
import { v4 as uuidv4 } from "uuid";

class ToDoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    onDelete = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }

    handleChange = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }))
    };

    addToDo = title => {
        const newToDo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newToDo]
        })
    }

    setUpdate = (updateText, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updateText;
                }
                return todo
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
    }

    componentDidMount() {
        const temp = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(temp);
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputToDo
                        addToDo={this.addToDo}
                    />
                    <ToDosList
                        todos={this.state.todos}
                        handleChangeProps = {this.handleChange}
                        onDelete={this.onDelete}
                        setUpdate = {this.setUpdate}
                    />
                </div>
            </div>
        );
    }
}

export default ToDoContainer;