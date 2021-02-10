import { combineReducers } from 'redux-immutable'//组和各个组件的state
import headerReducer from '../common/header/store/reducer'

const reducer = combineReducers({
    header: headerReducer
})
export default reducer;