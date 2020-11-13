import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    newProjectList:[]


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

        default:
            return state;
    }
}