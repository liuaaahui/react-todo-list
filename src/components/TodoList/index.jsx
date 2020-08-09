import React from "react";
import TodoContainer from "../../containers/TodoContainer";
import {getTodo} from '../../api'

class TodoList extends React.Component {
    componentWillMount(){
        getTodo().then(response=>{
            response.data.forEach(element => {
                console.log(element)
                this.props.addTodo(element)
            });
        });
    }
    
    render() {
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