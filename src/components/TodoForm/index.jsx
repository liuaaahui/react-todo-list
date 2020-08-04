import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmit = () => {
        this.props.addTodo(this.state.text);
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange}/>
                <input type="submit"/>
            </form>
        )
    }
}


export default TodoForm;