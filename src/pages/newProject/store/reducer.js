import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    newProjectList: [],
    page: 1,
    totalPage: 1,
    newProjectDetail:[],
    imageList: [],
    newProjectOverview: []


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
    });
};
const changeNewProjectOverview = (state, action) => {
    return state.merge({
        newProjectOverview: fromJS(action.newProjectOverview)
    })
}

const changeNewProjectDetail = (state, action) => {
    return state.merge({
        newProjectDetail: fromJS(action.newProjectDetail),
        imageList: fromJS(action.imageList)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_NEW_PROJECT_LIST:
            return newProjectListData(state, action);
        case constants.GET_MORE_PAGES:
            return getMorePages(state, action);
        case constants.CHANGE_NEW_PROJECT_DETAIL:
            return changeNewProjectDetail(state, action);
        case constants.CHANGE_NEW_PROJECT_OVERVIEW:
            return changeNewProjectOverview(state, action);

        default:
            return state;
    }
}