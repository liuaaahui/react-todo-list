import axios from 'axios'
const URL = 'https://5e9ec500fb467500166c4658.mockapi.io/todos';

export const postTodo = (todo)=>{
    axios.post(URL,todo)
        .then(function(response){
            //todo 回调
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })

}

export const getTodo = (updateRedux)=>{
    axios.get(URL)
    .then(function(response){
        //todo 回调
        console.log(response);
        updateRedux(response.data);
    })
    .catch(function(error){
        console.log(error);
    })
}