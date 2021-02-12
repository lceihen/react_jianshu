import { CHANGE_HOME_DATA } from './actionType'
import axios from 'axios'
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