import axios from 'axios';
import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST_ACTION } from './actionTypes';
//
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getadd_todo_item = (value) => ({
    type: ADD_TODO_ITEM,
    value
})
export const getdeleteitem = (index) => ({
    type: DELETE_ITEM,
    index
})

export const initListAction = (value) => ({
    type: INIT_LIST_ACTION,
    value
})

export const getInitList = () => ({
    type: GET_INIT_LIST,

})
// export const getTodoAList = () => {
//     return (dispatch) => {
//         axios.get('/mock.json').then((res) => {
//             let data = res.data;
//             let action = initListAction(data)
//             dispatch(action)
//             console.log(res)

//         }).catch((err) => {
//             console.log(err)
//         })
//     }
// }