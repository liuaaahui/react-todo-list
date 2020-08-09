import Todo from "../components/Todo";
import {delTodo,updateTodo} from "../action";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id)=>{
            dispatch(delTodo(id))
        },
        updateTodo: (id)=>{
            dispatch(updateTodo(id))
        }
    }
}
const TodoContainer = connect(
    null,
    mapDispatchToProps
)(Todo)

export default TodoContainer;