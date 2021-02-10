import { SREACH_FOCUS, SREACH_BLUR, CHANGE_LIST, MOUSE_ENTER, CHANGE_PAGE, MOUSE_LEAVE } from "./constants"
import { fromJS } from 'immutable'//保证store不被修改

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})
//这里可以用switch替换
export default (state = defaultState, action) => {
    if (action.type === SREACH_FOCUS) {
        return state.set('focused', true)
    }
    if (action.type === SREACH_BLUR) {
        return state.set('focused', false)
    }
    if (action.type === CHANGE_LIST) {
        return state.merge({
            'list': action.value,
            "totalPage": action.totalPage
        })

    }
    if (action.type === MOUSE_ENTER) {
        return state.set('mouseIn', true)
    }
    if (action.type === CHANGE_PAGE) {
        return state.set('page', action.page)
    }
    if (action.type === MOUSE_LEAVE) {
        return state.set('mouseIn', false)
    }
    return state;
}

