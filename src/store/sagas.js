import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
    //这里不使用异步请求的promise形式
    try {
        const res = yield axios.get('/mock.json');
        console.log("成功执行到trycatch", res)
        const action = initListAction(res.data);

        yield put(action)

    } catch (error) {
        console.log('list.json 网络请求失败')
    }



}
function* mySaga() {

    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;