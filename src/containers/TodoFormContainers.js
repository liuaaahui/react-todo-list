import {connect} from "react-redux";
import TodoForm from "../components/TodoForm";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text)=>{
            dispatch({
                type: "ADD_TODO",
                text: text
            })
        }
    }
}

const TodoFormContainers = connect(
    null,
    mapDispatchToProps
)(TodoForm)

export default TodoFormContainers;