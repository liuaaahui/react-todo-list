
export const addTodo = (text) =>({
        type: "ADD_TODO",
        text: text
})
export const delTodo = (index) =>({
        type: "DEL_TODO",
        index: index
})