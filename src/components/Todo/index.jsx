import React from 'react';
import './todo.css'

class Todo extends React.Component{
    delete = () =>{
        console.log(this.props.index);
        this.props.deleteTodo(this.props.index);
    }
    render(){
        return(
        <div className="outerTodo">
            <div className="everyTodo"><span className="leftTodo">{this.props.todo}</span><span className="rightTodo" onClick={this.delete}><img src="/delete.png" alt="x"/></span></div>
        </div>
        )
    }
}
export default Todo;