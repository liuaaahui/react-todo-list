import React from "react";
import TodoContainer from "../../containers/TodoContainer";
import {getTodo} from '../../api'

class TodoList extends React.Component {
    componentWillMount(){
        getTodo(this.props.updateTodoList);
    }
    
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