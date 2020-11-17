import * as constants from './actionTypes'
import {fromJS} from "immutable";

const defaultState = fromJS({

    displayMenu: false
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DROPDOWN:
            return state.set('displayMenu', !action.dropped);
        default:
            return state;
    }
}