import {Component} from "react";

class InputToDo extends Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addToDo(this.state.title);
            this.setState({
                title:""
            })
        } else {
            alert("Please enter a none empty text string!");
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Enter your todo"
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Add</button>
            </form>
        )
    }
}

export default InputToDo;