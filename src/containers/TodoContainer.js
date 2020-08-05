import Todo from "../components/Todo";
import {delTodo,updateTodo,updateTodoList} from "../action";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id)=>{
            dispatch(delTodo(id))
        },
        updateTodo: (id)=>{
            dispatch(updateTodo(id))
        },
        updateTodoList: (item)=>{
            dispatch(updateTodoList(item))
        }
    }
}
const TodoContainer = connect(
    null,
    mapDispatchToProps
)(Todo)

export default TodoContainer;