import {connect} from "react-redux";
import TodoList from "../components/TodoList";
import {updateTodoList} from "../action"

const mapStateToProps = state =>{
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTodoList: (item)=>{
            dispatch(updateTodoList(item))
        }
    }
}

const TodoListContainers = connect(
    mapStateToProps,mapDispatchToProps
)(TodoList)

export default TodoListContainers;