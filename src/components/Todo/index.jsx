import React from 'react';
import './todo.css'

class Todo extends React.Component{
    delete = () =>{
        console.log(this.props.index);
        this.props.deleteTodo(this.props.todo.id);
    }
    changeDone = () =>{
        this.props.updateTodo(this.props.todo.id);
    }
    render(){
        return(
        <div className="outerTodo" onClick={this.changeDone}>
            <div className="everyTodo"><span className={this.props.todo.status?"isdone":"notdone"}>{this.props.todo.content}</span><span className="rightTodo" onClick={this.delete}><img src="/delete.png" alt="x"/></span></div>
        </div>
        )
    }
}
export default Todo;