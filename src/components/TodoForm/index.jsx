import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmit = () => {
        console.log(this.state.text);
        this.props.addTodo({text:this.state.text,isDone:false});
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.onChange}/>
                <input type="button" onClick={this.onSubmit} value="提交TODO"/>
            </form>
        )
    }
}


export default TodoForm;