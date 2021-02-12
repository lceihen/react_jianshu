import { fromJS } from 'immutable'//保证store不被修改

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})
//这里可以用switch替换
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_home_data':
            console.log(action)
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                // recommendList: fromJS(action.recommendList)
            })
        default:
            return state;
    }

}

