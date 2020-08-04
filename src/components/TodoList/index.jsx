import React from "react";
import TodoContainer from "../../containers/TodoContainer";

class TodoList extends React.Component {
    render() {
        console.log(this.props.todoList)
        return (
            <div>
                {this.props.todoList.map((value, index) => {
                    return (<TodoContainer todo={value} key={index} index={index}/>)
                })
                }
            </div>
        )
    }
}
export default TodoList;