import React from "react";
import { Input, Button, Space } from 'antd';
import {getTodo} from '../../api'
import axios from 'axios'
import './index.css'
const URL = 'https://5e9ec500fb467500166c4658.mockapi.io/todos';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmit = () => {
        axios.post(URL,{
            content:this.state.text,
            status:false
        })
        .then(res=>{
            getTodo(this.props.updateTodoList)
        })
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Space>
                    <Input type="text" className="addInput" onChange={this.onChange}/>
                    <Button className="addButton" onClick={this.onSubmit}>add</Button>
                </Space>
            </div>
        )
    }
}


export default TodoForm;