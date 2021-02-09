import { SREACH_FOCUS, SREACH_BLUR } from "./constants"
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false
})
export default (state = defaultState, action) => {
    if (action.type === SREACH_FOCUS) {
        return state.set('focused', true)
    }
    if (action.type === SREACH_BLUR) {
        return state.set('focused', false)
    }
    return state;
}

