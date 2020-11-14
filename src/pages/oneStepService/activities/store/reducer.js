import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    activityList:[],
    page: 1,
    totalPage: 0


});
const changePage = (state, action) => {
    return state.merge({
        page: action.page
    })
}
const changeActivityList = (state, action)=> {
     return state.merge({
        activityList: fromJS(action.activityList),
        totalPage: action.totalPage

    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_ACTIVITY:
            return changeActivityList(state, action);
        case constants.CHANGE_PAGE:
            return changePage(state, action)

        default:
            return state;
    }
}