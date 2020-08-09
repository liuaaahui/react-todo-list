import React from "react";
import { Input, Button, Space } from 'antd';
import { postTodo } from '../../api'
import './index.css'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmit = () => {
        let requestBody = {
            content:this.state.text,
            status:false
        }
        postTodo(requestBody).then(response=>{
            this.props.addTodo(response.data)
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