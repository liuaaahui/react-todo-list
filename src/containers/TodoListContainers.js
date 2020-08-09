import {connect} from "react-redux";
import TodoList from "../components/TodoList";
import {addTodo} from '../action/index'

const mapStateToProps = state =>{
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (item)=>{
            dispatch(addTodo(item))
        }
    }
}

const TodoListContainers = connect(
    mapStateToProps,mapDispatchToProps
)(TodoList)

export default TodoListContainers;