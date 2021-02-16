import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    newsFeedList: [],
    page: 1,
    totalPage: 0,
    detailList: []


});
const changeNewsFeedList = (state, action) => {

    return state.merge({
        newsFeedList: fromJS(action.newsFeedList),
        totalPage: action.totalPage
    })
}
const changeDetailList = (state, action) => {
    return state.merge({
        detailList: fromJS(action.data)
    })
}
const changePage = (state, action) => {

    return state.merge({
        page: action.page
    })
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_NEWS_FEED_LIST:
            return changeNewsFeedList(state, action);
        case constants.CHANGE_PAGE:
            return changePage(state, action);
        case constants.CHANGE_DETAIL_LIST:
            return changeDetailList(state, action)


        default:
            return state;
    }
}