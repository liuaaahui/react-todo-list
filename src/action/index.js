
export const addTodo = (item) =>({
        type: "ADD_TODO",
        item: item
})
export const delTodo = (index) =>({
        type: "DEL_TODO",
        index: index
})
export const updateTodo = (index) =>({
        type: "UPDATE_TODO",
        index: index
})


