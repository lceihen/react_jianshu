import { SREACH_FOCUS, SREACH_BLUR } from "./actionType"
const defaultState = {
    focused: false
}
export default (state = defaultState, action) => {
    if (action.type === SREACH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === SREACH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}

