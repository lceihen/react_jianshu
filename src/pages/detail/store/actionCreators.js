import { GET_DETAIL_INFO } from './actionType'
export const get_detail_action = (id) => {
    return (dispatch) => {
        type: GET_DETAIL_INFO
        value: id
    }
}