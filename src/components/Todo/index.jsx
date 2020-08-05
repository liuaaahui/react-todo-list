import React from 'react';
import './todo.css'
import {getTodo} from '../../api'
import axios from 'axios'
const URL = 'https://5e9ec500fb467500166c4658.mockapi.io/todos';

class Todo extends React.Component{
    delete = () =>{
        axios.delete(URL + "/" + this.props.todo.id)
        .then(res=>{
            getTodo(this.props.updateTodoList)
        })
    }
    changeDone = () =>{
        axios.put(URL + "/" + this.props.todo.id,{
            id:this.props.todo.id,
            content:this.props.todo.content,
            status:!this.props.todo.status
        })
        .then(res=>{
            getTodo(this.props.updateTodoList)
        })
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