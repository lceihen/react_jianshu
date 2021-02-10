import { SREACH_FOCUS, SREACH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from "./constants"
import axios from 'axios'
import { fromJS } from 'immutable'
const changelist = (data) => ({
    type: CHANGE_LIST,
    value: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const searchFocus = () => ({
    type: SREACH_FOCUS
})
export const searchBlur = () => ({
    type: SREACH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changelist(data.data))
        }).catch((err) => {
            console.log(err)
        })
    }

}
export const mouseEnter = () => ({
    type: MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
})