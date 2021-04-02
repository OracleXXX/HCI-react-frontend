import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    noFlippingList: [],
    flippingList: [],
    curID: -1,
    detailList: [],
    flippingSlider: true


});
const changeNoFlippingList = (state, action) => {
    return state.merge({
        noFlippingList: fromJS(action.noFlippingList),

    })

};
const changeFlippingList = (state, action) => {
    return state.merge({
        flippingList: fromJS(action.flippingList),
    })

};
const changeDetailList = (state, action) => {
    return state.merge({
        detailList: fromJS(action.detailList.sort()),
        curID: action.id
    })
};
const changeSlider = (state, action) => {
    return state.set('flippingSlider', action.flipping);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_NO_FLIPPING_LIST:
            return changeNoFlippingList(state, action);
        case constants.CHANGE_FLIPPING_LIST:
            return changeFlippingList(state, action);
        case constants.GET_DETAIL_LIST:
            return changeDetailList(state, action);
        case constants.CHANGE_SLIDER:
            return changeSlider(state, action);
        default:
            return state;
    }
}