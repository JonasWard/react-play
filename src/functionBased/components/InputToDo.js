import React, {useState} from "react";
import {FaPlusCircle} from "react-icons/fa";

const InputToDo = props => {
    const [inputText, setInputText] = useState({
        title: "",
    });

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(inputText.title.trim()) {
            props.addToDoProps(inputText.title);
            setInputText({
                title: "",
            });
        } else {
            alert("Please enter anything as an entry");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={"form-container"}>
            <input
                type="text"
                className="input-text"
                placeholder="Add a new todo"
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <button className="input-submit">
                <FaPlusCircle />
            </button>
        </form>
    )
}

export default InputToDo;