import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    newProjectList:[]



});
const changeHomePageData = (state, action) => {
    return state.merge({
        newProjectList: fromJS(action.newProjectList),
    });
}
/*const getProjectList = (state, action) => {
    return state.merge({
        newProjects: fromJS(action.newProjects)
    })
}*/

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOMEPAGE_DATA:
            return changeHomePageData(state,action)
/*        case constants.GET_PROJECT_LIST:
            return getProjectList(state, action);*/

        default:
            return state;
    }
}