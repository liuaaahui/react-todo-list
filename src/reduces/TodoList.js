export const todoList = (state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.item];
        case "DEL_TODO":
            return [...state].filter((item,index)=>(item.id!==action.index))
        case "UPDATE_TODO":
            return [...state].map((item,index)=>{
                let i = item.status
                if(item.id===action.index){
                    i = !item.status;
                }
                return {id:item.id,content:item.content,status:i};
            })
        default:
            return state;
    }
}