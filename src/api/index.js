import axios from 'axios'
const URL = 'http://localhost:8888/todos';

export const postTodo = (todo)=>{
    return axios.post(URL,todo)
}

export const getTodo = ()=>{
    return axios.get(URL)
}

export const updateTodo = (todo)=>{
    return axios.put(URL+"/" + todo.id,todo)
}

export const deleteTodo = (id)=>{
    return axios.delete(URL+"/" + id)
}