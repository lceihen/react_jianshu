import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST_ACTION } from './actionTypes';
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