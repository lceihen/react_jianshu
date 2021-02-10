import { SREACH_FOCUS, SREACH_BLUR, CHANGE_LIST } from "./constants"
import { fromJS } from 'immutable'//保证store不被修改

const defaultState = fromJS({
    focused: false,
    list: []
})
export default (state = defaultState, action) => {
    if (action.type === SREACH_FOCUS) {
        return state.set('focused', true)
    }
    if (action.type === SREACH_BLUR) {
        return state.set('focused', false)
    }
    if (action.type === CHANGE_LIST) {
        console.log(action.value)
        return state.set('list', action.value)
    }
    return state;
}

