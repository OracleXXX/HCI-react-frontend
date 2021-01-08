import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    newProjectList: [],
    expectationName: ["具体地址", "预期收益", "预期回报率", "预期租金", "预期装修费用", "平台贷款"],
    page: 1,
    totalPage: 1,
    newProjectDetailMap:{}


});
const newProjectListData = (state, action) => {
    //merge是替换
    return state.merge({
        newProjectList: fromJS(action.newProjectList),
        totalPage: action.totalPage
    });
}
const getMorePages = (state, action) => {
    return state.merge({
        page: action.page
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_NEW_PROJECT_LIST:
            return newProjectListData(state, action);

        case constants.GET_MORE_PAGES:
            return getMorePages(state, action);

        default:
            return state;
    }
}