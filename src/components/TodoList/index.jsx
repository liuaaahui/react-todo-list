import React from "react";
import Todo from "../Todo";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todoList.map((value, index) => {
                    return (<Todo todo={value} key={index}/>)
                })
                }
            </div>
        )
    }
}
export default TodoList;