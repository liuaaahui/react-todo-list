import React from 'react';
import './todo.css'
import { Card } from 'antd';
import {updateTodo, deleteTodo} from '../../api'

class Todo extends React.Component{
    delete = () =>{
        deleteTodo(this.props.todo.id).then(response=>{
            this.props.deleteTodo(this.props.todo.id)
        })
    }

    changeDone = () =>{
        let requestBody = {
            id:this.props.todo.id,
            content:this.props.todo.content,
            status:!this.props.todo.status
        }
        updateTodo(requestBody).then(response=>{
            this.props.updateTodo(requestBody.id)
        })
    }
    
    render(){
        return(
            <div className="outerCard">
                <Card title="TodoList" hoverable extra={<span onClick={this.delete}><img src="/delete.png" alt="x" /></span>} style={{ width: 300 }}>
                    <span onClick={this.changeDone} className={this.props.todo.status ? "isdone" : "notdone"}>{this.props.todo.content}</span>
                </Card>
            </div>
        )
    }
}

export default Todo;