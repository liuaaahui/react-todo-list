import Todo from "../components/Todo";
import {delTodo} from "../action";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (index)=>{
            dispatch(delTodo(index))
        }
    }
}
const TodoContainer = connect(
    null,
    mapDispatchToProps
)(Todo)

export default TodoContainer;