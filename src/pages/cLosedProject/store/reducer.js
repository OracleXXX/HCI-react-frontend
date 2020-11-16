import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    noFlippingList: [],
    flippingList: [],



});
const changeCloseProjectList = (state, action) => {
    return state.merge({
        noFlippingList: fromJS(action.noFlippingList),
        flippingList: fromJS(action.noFlippingList),
    })

}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_CLOSED_PROJECT_LIST:
            return changeCloseProjectList(state, action);

        default:
            return state;
    }
}