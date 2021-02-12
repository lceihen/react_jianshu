import { combineReducers } from 'redux-immutable'//组和各个组件的state
import headerReducer from '../common/header/store/reducer'
import homeReducer from './../pages/home/store/reducer'
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})
export default reducer;