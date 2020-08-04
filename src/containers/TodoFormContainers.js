import {connect} from "react-redux";
import TodoForm from "../components/TodoForm";
import {addTodo} from "../action"

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (item)=>{
            dispatch(addTodo(item))
        }
    }
}

const TodoFormContainers = connect(
    null,
    mapDispatchToProps
)(TodoForm)

export default TodoFormContainers;