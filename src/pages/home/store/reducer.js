import { fromJS } from 'immutable'//保证store不被修改
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, CHANGE_SCROLL } from './actionType'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
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

            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                // recommendList: fromJS(action.recommendList)
            })
        case ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case CHANGE_SCROLL:

            return action.value ? state.set("showScroll", true) : state.set("showScroll", false);
        default:
            return state;
    }

}

