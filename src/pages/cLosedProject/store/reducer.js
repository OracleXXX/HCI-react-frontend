import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    noFlippingList: [],
    flippingList: [],
    flippingSlider: true


});
const changeCloseProjectList = (state, action) => {
    return state.merge({
        noFlippingList: fromJS(action.noFlippingList),
        flippingList: fromJS(action.flippingList),
    })

}
const changeSlider = (state, action) => {
    return state.set('flippingSlider', action.flipping);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_CLOSED_PROJECT_LIST:
            return changeCloseProjectList(state, action);
        case constants.CHANGE_SLIDER:
            return changeSlider(state, action);
        default:
            return state;
    }
}