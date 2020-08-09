import React from "react";
import { Space  } from 'antd';
import './index.css';

class DoneTodoList extends React.Component {

    render(){
        return (
            <div className="navUI">
                <Space className="SPACE">
                    <button><a href='#/'>go to list page</a></button>
                    <button><a href='#/donepage'>go to done page</a></button>
                </Space>
            </div>
        )
    }

}

export default DoneTodoList;