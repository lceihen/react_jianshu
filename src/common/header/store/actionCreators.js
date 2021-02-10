import { SREACH_FOCUS, SREACH_BLUR, CHANGE_LIST } from "./constants"
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = () => ({
    type: SREACH_FOCUS
})
export const search_blur = () => ({
    type: SREACH_BLUR
})
export const changelist = (data) => ({
    type: CHANGE_LIST,
    value: fromJS(data)
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