import {connect} from "react-redux";
import DoneTodoList from "../components/DoneTodoList";

const mapStateToProps = state =>{
    return {
        doneTodoList: state.todoList.filter((item)=>(item.isDone))
    }
}

const DoneTodoListContainer = connect(
    mapStateToProps
)(DoneTodoList)

export default DoneTodoListContainer;