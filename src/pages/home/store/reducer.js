import { fromJS } from 'immutable'//保证store不被修改
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST } from './actionType'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1
})
const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
};
//这里可以用switch替换
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            console.log(action)
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                // recommendList: fromJS(action.recommendList)
            })
        case ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        default:
            return state;
    }

}

