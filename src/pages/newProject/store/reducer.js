import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    newProjectList:[],
    expectationName: ["具体地址", "预期收益", "预期回报率", "预期回报率", "预期装修费用", "平台贷款"],
    page: 1,
    totalPage: 1


});
const newProjectListData = (state, action) => {
    //merge是替换
    return state.merge({
        newProjectList: fromJS(action.newProjectList)
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_NEW_PROJECT_LIST:
            return newProjectListData(state, action);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);

        default:
            return state;
    }
}