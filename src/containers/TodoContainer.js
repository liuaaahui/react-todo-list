import Todo from "../components/Todo";
import {delTodo,updateTodo} from "../action";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (index)=>{
            dispatch(delTodo(index))
        },
        updateTodo: (index)=>{
            dispatch(updateTodo(index))
        }
    }
}
const TodoContainer = connect(
    null,
    mapDispatchToProps
)(Todo)

export default TodoContainer;