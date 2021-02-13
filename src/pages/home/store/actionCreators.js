import { CHANGE_HOME_DATA } from './actionType'
import axios from 'axios'
import { ADD_ARTICLE_LIST } from './actionType'
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
