import {connect} from "react-redux";
import TodoForm from "../components/TodoForm";
import {addTodo} from "../action"

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text)=>{
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainers = connect(
    null,
    mapDispatchToProps
)(TodoForm)

export default TodoFormContainers;