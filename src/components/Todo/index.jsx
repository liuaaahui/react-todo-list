import React from 'react';
import './todo.css'

class Todo extends React.Component{
    delete = () =>{
        console.log(this.props.index);
        this.props.deleteTodo(this.props.index);
    }
    changeDone = () =>{
        this.props.updateTodo(this.props.index);
    }
    render(){
        return(
        <div className="outerTodo" onClick={this.changeDone}>
            <div className="everyTodo"><span className={this.props.todo.isDone?"isdone":"notdone"}>{this.props.todo.text}</span><span className="rightTodo" onClick={this.delete}><img src="/delete.png" alt="x"/></span></div>
        </div>
        )
    }
}
export default Todo;