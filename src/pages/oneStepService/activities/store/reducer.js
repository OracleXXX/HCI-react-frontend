import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    activityList:[]


});

const changeActivityList = (state, action)=> {
     return state.merge({
        activityList: fromJS(action.activityList),

    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_ACTIVITY:
            return changeActivityList(state, action);

        default:
            return state;
    }
}