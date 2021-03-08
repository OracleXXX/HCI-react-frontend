import * as constants from './constants';
import {fromJS} from "immutable";

const defaultState = fromJS({
    showPopup: false
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_SHOW_POPUP:
            return state.set('showPopup', true);
        default:
            return state;
    }
}