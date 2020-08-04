import React from "react";
import TodoContainer from "../../containers/TodoContainer";

class DoneTodoList extends React.Component {
    render(){
        return (
            <div>
                {this.props.doneTodoList.map((value, index) => {
                    return (<TodoContainer todo={value} key={index} index={index}/>)
                })}
            </div>
        )
    }

}
export default DoneTodoList