export const todoList = (state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.text];
        case "DEL_TODO":
            return [...state].filter((item,index)=>(index!==action.index))
        default:
            return state;
    }
}