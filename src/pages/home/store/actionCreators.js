import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, CHANGE_SCROLL } from './actionType'
import axios from 'axios'
import { fromJS } from 'immutable';
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result)
            dispatch(action)
        }).catch((err) => { console.log(err); })
    }
}
const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        });
    }
}
const addHomeList = (list, nextPage) => ({
    type: ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const ChangeScrollTopShow = (display) => {
    return (dispatch) => {

        const action = {
            type: CHANGE_SCROLL,
            value: display
        }
        dispatch(action)
    }
}
