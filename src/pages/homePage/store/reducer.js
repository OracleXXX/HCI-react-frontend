import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    popularNewsFeedList: [],
    restNewsFeedList: [],
    tempList: []


});
const changeHomePageData = (state, action) => {
    return state.merge({});
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOMEPAGE_DATA:
            return changeHomePageData(state, action)
        default:
            return state;
    }
}