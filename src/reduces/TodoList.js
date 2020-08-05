export const todoList = (state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.item];
        case "DEL_TODO":
            return [...state].filter((item,index)=>(index!==action.index))
        case "UPDATE_TODO":
            return [...state].map((item,index)=>{
                let i = item.isDone
                if(index===action.index){
                    i = !item.isDone;
                }
                return {text:item.text,isDone:i};
            })
        case "UPDATE_TODO_LIST":
            return [...action.itemList]
        default:
            return state;
    }
}